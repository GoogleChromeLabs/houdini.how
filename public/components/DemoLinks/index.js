import {Component} from 'preact'
import CardStyle from '../Card/style.module.css'
import classnames from 'classnames'

export default class CardLinks extends Component {

  render(props) {
    return (
    <ul class={CardStyle.links}>
      <li><a class={CardStyle.cardAction} href={`https://codepen.io/una/pen/${this.props.penLink}`} target="_blank" rel="noopener noreferrer">Demo</a></li>
      <li>
      <a href={`https://unpkg.com/extra.css/${this.props.name}.js`} class={classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>CDN Link</a>
      </li>
    </ul>
  )
}
}