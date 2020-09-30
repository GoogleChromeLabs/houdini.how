import {Component} from 'preact'
import style from './style.module.css'
import navStyle from '../Nav/style.module.css'
import pageStyle from '../../pages/style.module.css'

export default class Nav extends Component {
  render(props) {
    return (
    <div class={style.footer}>
      <div class={pageStyle.container}>
        <div>
          <h1 class={navStyle.logo}>Houdini.how</h1>
          <p>Brought to you by <a href="https://web.dev">web.dev</a></p>
        </div>
        <nav>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/usage">Usage</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/">Worklets</a></li>
          </ul>
        </nav>
      </div>
    </div>
   )
  }
}