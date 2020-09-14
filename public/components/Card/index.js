import style from './style.module.css'
import CardLinks from '../CardLinks/index.js'
import CardMeta from '../CardMeta/index.js'

export default function Card(props) {
  return (
    <div className={style.container}>
      <CardMeta authorImg={props.authorImg} authorName={props.authorName} authorLink={props.authorLink} name={props.name}/>
      <div className={style.card}>
        {props.children}
        <CardLinks name={props.name} penLink={props.penLink}/>
      </div>
    </div>
  )
}