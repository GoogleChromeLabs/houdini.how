/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component} from 'preact'
import style from './style.module.css'
import webdev from 'url:../../img/webdev.svg'
import { Link, useLoc } from '../../lib/loc.js'
import { routes } from '../routes.js';

export default class Nav extends Component {
  render(props) {
    const { path } = useLoc();
    const route = routes.find(route => route.url === path);

    return (
      <div class={`${style.head} ${style[route.color]}`}>
        <div>
          <p class={style.superHeader}>Brought to you by <img class={style.webdev} src={webdev} width="70" height="16" alt="web.dev"></img></p>
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
