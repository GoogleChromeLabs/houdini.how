import { html as parseHtml } from 'htm/preact';
import { cloneElement, Component, Fragment } from 'preact'
import Card from '../Card/index.js'
import DemoLinks from '../DemoLinks/index.js'
import CardStyle from '../Card/style.module.css'

function formatUsage(usage) {
  if(typeof usage === "string") {
    return <li>{usage}</li>
  }
  return <>
    {Object.entries(usage).map(([key, value]) => <li>{key}: {value.replace(/;+$/, '')};</li>)}
  </>
}

function usageToStyleObject(usage) {
  // If `usage` is an object, we are already done
  if(typeof usage === "object") {
    return usage;
  }
  // If it’s a string, we need to do a bit of processing
  const [prop, ...rest] = usage.split(":");
  return {
    [prop]: rest.join(":")
  };
}

function styleObjectToString(styleObj) {
  return Object.entries(styleObj).map(([key, value]) => `${key}: ${value};`).join("");
}

export default class Demo extends Component {
  constructor(props) {
    super(props)

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

  componentDidMount () {
    const { worklet } = this.props
    const workletScript = document.createElement("script")
    workletScript.src = worklet.cdnUrl || worklet.workletUrl
    document.body.appendChild(workletScript)
  }

  render() {
    const { workletName, packageName, author, demoUrl, npmUrl, cdnUrl, customProps, usage, tags, html: demoHtml } = this.props.worklet
    const { propValues } = this.state

        const usageStyles = usageToStyleObject(usage);
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
      const root = Array.isArray(customPreview) ? customPreview[0] : customPreview;
      // inject styles into root element:
      let props = root.props
      if (!props) props = root.props = {}
      for (let p in propValues) {
        props.style += ` ${p}: ${propValues[p]};`;
      }
      props.style = `${props.style || ''}; ${styleObjectToString(usageStyles)}`;
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
        name={workletName}
        authorName={author.name}
        authorLink={author.url}
        authorImg={author.image}
        tags={tags}
        type='demo'
      >
          <div class={CardStyle.demoContainer}>
            {preview}
            <ol class={CardStyle.customProps}>
              <li>.demo &#123;</li>
              {Object.keys(customProps).map(propName => {
                const definition = customProps[propName]
                const currentValue = propValues[propName]
                const id = workletName + propName; // avoids collisions between worklets
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
          <DemoLinks name={packageName} demoUrl={demoUrl} npmUrl={npmUrl} cdnUrl={cdnUrl}/>
      </Card>
      )
    }
}

// components for each CSS property type
const PROPERTY_TYPES = {};

PROPERTY_TYPES.number = ({ id, propName, value, setValue, definition }) => (
  <li>
    <label htmlFor={id}>{propName}:</label>
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
          id={id}
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
