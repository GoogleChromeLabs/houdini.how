import {Component} from 'preact'
import style from './style.module.css'

export default class Nav extends Component {
  render(props) {
    return (
    <div className={style.head}>
      <div>
        <h1 className={style.logo}>Houdini.how</h1>
        <h2>{props.page}</h2>
      </div>
      <nav className={style.nav}>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="#">Usage</a></li>
          <li><a href="#">Resources</a></li>
          <li className={style.active}><a href="#">Worklets</a></li>
        </ul>
      </nav>
    </div>
   )
  }
}