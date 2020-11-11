/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createRef } from 'preact'
import { html as parseHtml } from 'htm/preact'
import { Component } from 'preact'
import Card from '../Card/index.js'
import DemoLinks from '../DemoLinks/index.js'
import CardStyle from '../Card/style.module.css'
import Compat from '../Compat/index.js'

const normalizeValue = s => s.trim().replace(/;+$/g, '');

function formatUsage(usage) {
  if(typeof usage === "string") {
    return <li>{usage}</li>
  }
  return <>
    {Object.entries(usage).map(([key, value]) => <li>{key}: {normalizeValue(value)};</li>)}
  </>
}

function usageToStyleObject(usage) {
  // If `usage` is an object, we are already done
  if(typeof usage === "object") {
    return usage;
  }
  // If it’s a string, we need to do a bit of processing
  const [prop, ...rest] = usage.split(":")
  return {
    [prop]: normalizeValue(rest.join(":"))
  };
}

function styleObjectToString(styleObj) {
  return Object.entries(styleObj).map(([key, value]) => `${key}: ${normalizeValue(value)};`).join("")
}

const injected = new Map()
function injectWorkletScript(url) {
  let p = injected.get(url)
  if (p) return p
  p = new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
  injected.set(url, p)
  return p
}

export default class Demo extends Component {
  constructor(props) {
    super(props)

    this.demoRoot = createRef()

    // Set up state values for each custom property
    const propValues = {}
    for (let name in props.worklet.customProps) {
      propValues[name] = props.worklet.customProps[name].default
    }
    this.state = { propValues }

    this.setPropValue = this.setPropValue.bind(this)
  }

  setPropValue(name, value) {
    this.setState({
      propValues: {
        ...this.state.propValues,
        [name]: value
      }
    })
  }

  componentDidMount() {
    if (typeof IntersectionObserver === 'undefined') {
      (window.requestIdleCallback || setTimeout)(this.loadWorklet.bind(this))
      return
    }
    this.obs = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.loadWorklet()
          return
        }
      }
    })
    this.obs.observe(this.demoRoot.current)
  }

  componentWillUnmount() {
    if (this.obs) {
      this.obs.unobserve(this.demoRoot.current)
      this.obs = null
    }
  }

  loadWorklet() {
    const { worklet } = this.props
    injectWorkletScript(worklet.cdnUrl || worklet.workletUrl)
    if (this.obs) {
      this.obs.unobserve(this.demoRoot.current)
      this.obs = null
    }
  }

  render() {
    const { packageName, author, demoUrl, npmUrl, cdnUrl, customProps, usage, tags, html: demoHtml } = this.props.worklet
    const { propValues } = this.state

    const usageStyles = usageToStyleObject(usage)
    const demoStyle = {
      ...propValues,
      ...usageStyles,
    }

    let preview;

    // if we have custom HTML to show, parse it and inject the styles onto the root element.
    if (demoHtml) {
      let customPreview
      try {
        // @ts-ignore-next
        customPreview = parseHtml([demoHtml])
      } catch (e) {
        console.error(`Custom preview HTML failed to parse: ${e}`)
      }
      const root = Array.isArray(customPreview) ? customPreview[0] : customPreview
      // inject styles into root element:
      let props = root.props
      if (!props) props = root.props = {}
      props.contenteditable = true;
      props.style = props.style || ''
      for (let p in propValues) {
        props.style += ` ${p}: ${propValues[p]};`
      }
      props.style = `${props.style ? props.style+'; ' : ''}${styleObjectToString(usageStyles)}`
      preview = (
        <div class={CardStyle.demoArea}>
          {customPreview}
        </div>
      )
    }

    // if there's no custom preview HTML or it failed to parse, just style the preview div itself:
    if (!preview) {
      preview = <div class={CardStyle.demoArea} style={demoStyle} />
    }

    return (
      <Card
        name={packageName}
        authorName={author.name}
        authorLink={author.url}
        authorImg={author.image}
        tags={tags}
        type='demo'
      >
          <div ref={this.demoRoot} class={CardStyle.demoContainer}>
            {preview}
            <ol class={CardStyle.customProps}>
              <li>.demo &#123;</li>
              {Object.keys(customProps).map(propName => {
                const definition = customProps[propName]
                const currentValue = propValues[propName]
                const id = packageName + propName; // avoids collisions between worklets
                const setValue = value => {
                  if (value instanceof Event) value = value.target[/check|rad/.test(value.target.type)?'checked':'value']
                  this.setPropValue(propName, value)
                }

                let EditorComponent = PROPERTY_TYPES[definition.type] || PROPERTY_TYPES.default
                if (definition.options) EditorComponent = PROPERTY_TYPES.options;

                return (
                  <EditorComponent
                    id={id}
                    propName={propName}
                    value={currentValue}
                    setValue={setValue}
                    definition={definition}
                  />
                )
              })}
              {formatUsage(usage)}
              <li>&#125;</li>
            </ol>
          </div>
          <footer class={CardStyle.footer}>
            <Compat {...this.props.worklet.compat} />
            <DemoLinks name={packageName} demoUrl={demoUrl} npmUrl={npmUrl} cdnUrl={cdnUrl}/>
          </footer>
      </Card>
      )
    }
}

// components for each CSS property type
const PROPERTY_TYPES = {};

PROPERTY_TYPES.number = ({ id, propName, value, setValue, definition }) => (
  <li>
    <label htmlFor={id} id={id + '_label'}>{propName}:</label>
    <div class={CardStyle.input}>
      <span>
        <input
          id={id}
          class={CardStyle.inputVal}
          type="number"
          min={definition.range && definition.range[0]}
          max={definition.range && definition.range[1]}
          value={value}
          onChange={setValue}
        />
      </span>
      <span class={CardStyle.rangeInputWrap}>
        <input
          id={id + '_range'}
          aria-labelledby={id + '_label'}
          class={CardStyle.rangeSlider}
          type="range"
          min={definition.range && definition.range[0]}
          max={definition.range && definition.range[1]}
          value={value}
          onInput={setValue}
        />
      </span>
    </div>
  </li>
)

PROPERTY_TYPES.options = ({ id, propName, value, setValue, definition }) => (
  <li>
    <label htmlFor={id}>{propName}:</label>
    <div class={CardStyle.input}>
      <select
          id={id}
          class={CardStyle.inputVal}
          value={value}
          onInput={setValue}
        >
          {definition.options.map(option => (
            <option value={option}>{option}</option>
          ))}
      </select>
    </div>
  </li>
)

// handles strings or anything else with no specific editing component.
// It tries to use `definition.type` for the input type (works for things like "color")
PROPERTY_TYPES.default = ({ id, propName, value, setValue, definition }) => (
  <li>
    <label htmlFor={id}>{propName}:</label>
    <div class={CardStyle.input}>
      <input
        id={id}
        class={CardStyle.inputVal}
        type={definition.type}
        value={value}
        onInput={setValue}
      />
    </div>
  </li>
)
