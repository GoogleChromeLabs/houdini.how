import {Component} from 'preact'
import style from './style.module.css'

export default class CardLinks extends Component {

  render(props) {
    return (
    <div class={style.meta}>
      <img class={style.author} src={props.authorImg} alt="" />
      <div class={style.title}>
        <h2 class={style.name}>{props.name}</h2>
        <p>via <a href={props.authorLink}>{props.authorName}</a></p>
      </div>
      <div class={style.tags}>
        <ul>
          <li class={style.paint}><a href="#">Paint</a></li>
          <li class={style.props}><a href="#">Properties & Values</a></li>
        </ul>
      </div>
    </div>
   )
  }
}