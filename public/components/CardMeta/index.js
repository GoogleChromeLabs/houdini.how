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
import Tag from '../Tag'
import style from './style.module.css'

export default class CardLinks extends Component {
  render(props) {
    return (
    <div class={style.meta} metaType={props.type}>
      <img class={style.author} src={props.authorImg} alt={props.authorName} loading="lazy" width="60" height="60" />
      <div class={style.title}>
        <h2 class={style.name}>{props.packageName}</h2>
        <p>by <a href={props.authorLink} target="_blank" title={props.authorName}>{props.authorName}</a> {props.date && <span class={style.date}>{props.date}</span>}</p>
      </div>
      <div class={style.tags}>
        <ul>
          {props.tags.map((tag) =>
            <Tag label={tag} setFilter={props.setFilter} selected={tag === props.selectedTag}/>
          )}
        </ul>
      </div>
    </div>
   )
  }
}
