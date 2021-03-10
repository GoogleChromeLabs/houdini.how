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

import style from './style.module.css'
import CardMeta from '../CardMeta/index.js'

export default function Card(props) {
  return (
    <div class={style.container} type={props.type} >
      <CardMeta authorImg={props.authorImg} authorName={props.authorName} authorLink={props.authorLink} packageName={props.name} type={props.type} tags={props.tags} date={props.date} note={props.note} selectedTag={props.selectedTag} setFilter={props.setFilter}/>
      <div class={style.card}>
        {props.children}
      </div>
    </div>
  )
}