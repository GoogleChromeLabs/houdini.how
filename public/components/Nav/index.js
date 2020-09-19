import {Component} from 'preact'
import style from './style.module.css'

export default class Nav extends Component {
  render(props) {
    return (
    <div class={style.head}>
      <div>
        <h1 class={style.logo}>Houdini.how</h1>
        <h2>{props.page}</h2>
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