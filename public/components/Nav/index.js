import {Component} from 'preact'
import style from './style.module.css'
import { Link, useLoc } from '../../lib/loc.js'
import { routes } from '../routes.js';

export default class Nav extends Component {
  render(props) {
    const { path } = useLoc();
    const route = routes.find(route => route.url === path);

    return (
      <div class={`${style.head} ${style[route.color]}`}>
        <div>
          <p class={style.superHeader}>Brought to you by <img class={style.webdev} src="../img/webdev.svg" alt="web.dev"></img></p>
          <h1 class={style.logo}>Houdini.how</h1>
          <h2>{route.title}</h2>
        </div>
        <nav class={style.nav}>
          <ul>
            {routes.map(route => (
              <li>
                <Link activeClassName={style.active} href={route.url}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}
