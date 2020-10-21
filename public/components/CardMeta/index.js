import {Component} from 'preact'
import style from './style.module.css'

const buildTag = (tag) => {
  if (tag === 'paint') {
    return (<li class={style.paint}><a href="#">Paint</a></li>)
  } else if (tag === 'properties and values') {
    return (<li class={style.props}><a href="#">Properties & Values</a></li>)
  } else if (tag === 'typed object model') {
    return (<li class={style.typed}><a href="#">Typed Object Model</a></li>)
  } else if (tag === 'layout') {
    return (<li class={style.layout}><a href="#">Layout</a></li>)
  } else if (tag === 'animation') {
    return (<li class={style.animation}><a href="#">Animation</a></li>)
  }
  else return
}

export default class CardLinks extends Component {

  render(props) {
    return (
    <div class={style.meta} metaType={props.type}>
      <img class={style.author} src={props.authorImg} alt="" />
      <div class={style.title}>
        <h2 class={style.name}>{props.packageName}</h2>
    <p>by <a href={props.authorLink}>{props.authorName}</a></p>
      </div>
      <div class={style.tags}>
        <ul>
          {props.tags.map((tag) =>
            buildTag(tag)
          )}
        </ul>
      </div>
    </div>
   )
  }
}