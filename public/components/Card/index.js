import style from './style.module.css'
import CardMeta from '../CardMeta/index.js'
import classnames from 'classnames'

export default function Card(props) {
  return (
    <div class={style.container} type={props.type} >
      <CardMeta authorImg={props.authorImg} authorName={props.authorName} authorLink={props.authorLink} name={props.name} type={props.type}/>
      <div class={style.card}>
        {props.children}
      </div>
    </div>
  )
}