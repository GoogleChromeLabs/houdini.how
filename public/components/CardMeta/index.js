import {Component} from 'preact'
import style from './style.module.css'

export default class CardLinks extends Component {

  render(props) {
    return (
    <div className={style.meta}>
      <img className={style.author} src={props.authorImg} alt="" />
      <div className={style.title}>
        <h2 className={style.name}>{props.name}</h2>
        <p>Submitted by <a href={props.authorLink}>{props.authorName}</a></p>
      </div>
    </div>
   )
  }
}