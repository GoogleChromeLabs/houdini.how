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
import CardStyle from '../Card/style.module.css'
import classnames from 'clsx'

const getCdnLink = (link, name) => {
  return link ? link : `https://unpkg.com/extra.css/${name}.js`
}

export default class CardLinks extends Component {
  render(props) {
    return (
    <ul class={CardStyle.links}>
      <li><a class={CardStyle.cardAction} href={this.props.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a></li>
      <li>
      <a href={getCdnLink(this.props.cdnUrl, this.props.name)} class={classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>CDN Link</a>
      </li>
      {this.props.npmUrl && <li>
        <a href={this.props.npmUrl} class={classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>NPM Link</a>
      </li>}
    </ul>
  )
}
}
