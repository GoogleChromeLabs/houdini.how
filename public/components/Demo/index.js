import { Component } from 'preact'
import Card from '../Card/index.js'
import CardStyle from '../Card/style.module.css'

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
    const { workletName, packageName, author, demoUrl, customProps } = this.props.worklet
    const { propValues } = this.state

    const paintWorkletId = packageName

	  return (
      <Card
        name={workletName}
        authorName={author.name}
        authorLink={author.url}
        authorImg={author.image}
        penLink={demoUrl}
        paint={true}
        properties={true}
        layout={false}
      >
          <div className={CardStyle.demoContainer}>
            <div className={CardStyle.demoArea} style={{
                ...propValues,
                background: `paint(${paintWorkletId})`
                }}></div>
            <ol className={CardStyle.customProps}>
              <li>.demo	&#123;</li>
              {Object.keys(customProps).map(propName => {
                const definition = customProps[propName]
                const currentValue = propValues[propName]
                return (
                  <li>
                    <label htmlFor={propName}>{propName}:</label>
                    <div className={CardStyle.input}>
                      <div className={CardStyle.inputVal}>{currentValue}</div>
                      <input
                        className={CardStyle.rangeSlider}
                        type="range"
                        min={definition.range && definition.range[0]}
                        max={definition.range && definition.range[1]}
                        value={currentValue}
                        id={propName}
                        onInput={e => this.setPropValue(e.target.id, e.target.value)}
                      />
                    </div>
                  </li>
                )
              })}
              <li>&#125;</li>
            </ol>
          </div>
      </Card>
	  )
	}
}
