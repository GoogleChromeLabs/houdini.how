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
  if (title === "About Houdini" && this.props.location === 'about') {
    return (
      style.magenta
    )
  } else if (title === "Worklet Library") {
    return (
      style.yellow
    )
  } else if (title === "Using Houdini") {
    return (
      style.blue
    )
  } else if (title === "Links & Resources") {
    return (
      style.green
    )
  }
}

export default class Nav extends Component {
  render(props) {
    console.log(this.props)
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