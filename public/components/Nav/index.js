import {Component} from 'preact'
import style from './style.module.css'



const getHeader = (title) => {
  if (title === "About Houdini") {
    return (
      <h2 class={style.magenta}>{title}</h2>
    )
  } else if (title === "Worklet Library") {
    return (
      <h2 class={style.yellow}>{title}</h2>
    )
  } else if (title === "Using Houdini") {
    return (
      <h2 class={style.blue}>{title}</h2>
    )
  } else if (title === "Links & Resources") {
    return (
      <h2 class={style.green}>{title}</h2>
    )
  }
}

const getActive = (title) => {
  if (title === "About Houdini") {
    return (
      "class={style.magenta}"
    )
  } else if (title === "Worklet Library") {
    return (
      "class={style.yellow}"
    )
  } else if (title === "Using Houdini") {
    return (
      "class={style.blue}"
    )
  } else if (title === "Links & Resources") {
    return (
      "class={style.green}"
    )
  }
}

export default class Nav extends Component {
  render(props) {

    return (
    <div class={style.head}>
      <div>
        <h1 class={style.logo}>Houdini.how</h1>
        {getHeader(props.page)}
      </div>
      <nav class={style.nav}>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/usage">Usage</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/">Worklets</a></li>
        </ul>
      </nav>
    </div>
   )
  }
}