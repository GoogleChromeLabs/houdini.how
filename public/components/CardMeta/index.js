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

const buildTag = (tag) => {
  if (tag === 'paint') {
    return (<li class={style.paint}><a href="#">Paint</a></li>)
  } else if (tag === 'properties and values') {
    return (<li class={style.props}><a href="#">Properties & Values</a></li>)
  } else if (tag === 'typed object model') {
    return (<li class={style.typed}><a href="#">Typed Object Model</a></li>)
  } else if (tag === 'layout') {
    return (<li class={style.layout}><a href="#">Layout</a></li>)
  } else if (tag === 'animation') {
    return (<li class={style.animation}><a href="#">Animation</a></li>)
  }
  else return
}

export default class CardLinks extends Component {

  render(props) {
    return (
    <div class={style.meta} metaType={props.type}>
      <img class={style.author} src={props.authorImg} alt={props.authorName} loading="lazy" width="60" height="60" />
      <div class={style.title}>
        <h2 class={style.name}>{props.packageName}</h2>
        <p>by <a href={props.authorLink} target="_blank" title={props.authorName}>{props.authorName}</a></p>
      </div>
      <div class={style.tags}>
        <ul>
          {props.tags.map((tag) =>
            buildTag(tag)
          )}
        </ul>
      </div>
    </div>
   )
  }
}
