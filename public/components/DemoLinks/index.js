import {Component} from 'preact'
import CardStyle from '../Card/style.module.css'
import classnames from 'clsx'

const getCdnLink = (link, name) => {
  return link ? link : `https://unpkg.com/extra.css/${name}.js`
}

export default class CardLinks extends Component {
  render(props) {
    return (
    <ul class={CardStyle.links}>
      <li><a class={CardStyle.cardAction} href={this.props.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a></li>
      <li>
      <a href={getCdnLink(this.props.cdnUrl, this.props.name)} class={classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>CDN Link</a>
      </li>
      {this.props.npmUrl && <li>
        <a href={this.props.npmUrl} class={classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>NPM Link</a>
      </li>}
    </ul>
  )
}
}
