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
import navStyle from '../Nav/style.module.css'
import pageStyle from '../../pages/style.module.css'

export default class Footer extends Component {
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
            <li><a href="https://github.com/GoogleChromeLabs/houdini.how">Contribute</a></li>
          </ul>
        </nav>
      </div>
    </div>
   )
  }
}