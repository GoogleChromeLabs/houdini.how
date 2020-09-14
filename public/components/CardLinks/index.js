import {Component} from 'preact'
import CardStyle from '../Card/style.module.css'
import classnames from 'classnames'

export default class CardLinks extends Component {

  render(props) {
    return (
    <ul className={CardStyle.links}>
      <li><a className={CardStyle.cardAction} href={`https://codepen.io/una/pen/${this.props.penLink}`} target="_blank" rel="noopener noreferrer">Demo</a></li>
      <li>
      <a href={`https://unpkg.com/extra.css/${this.props.name}.js`} className={classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>CDN Link</a>
      </li>
    </ul>
  )
}
}