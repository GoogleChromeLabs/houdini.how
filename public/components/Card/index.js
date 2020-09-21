import style from './style.module.css'
import CardMeta from '../CardMeta/index.js'

export default function Card(props) {
  return (
    <div class={style.container}>
      <CardMeta authorImg={props.authorImg} authorName={props.authorName} authorLink={props.authorLink} name={props.name}/>
      <div class={style.card}>
        {props.children}
      </div>
    </div>
  )
}