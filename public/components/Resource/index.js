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

import { Component } from 'preact'
import Card from '../Card/index.js'
import CardStyle from '../Card/style.module.css'
import style from './style.module.css'

export default class Resource extends Component {
	render() {
    const { url, type, title, tags, pubDate, author, desc } = this.props.resource

	  return (
      <Card
        name={
          <a href={url} class={style.link} target="_blank">{title}</a>
        }
        type="resource"
        subType={type}
        date={pubDate}
        authorName={author.name}
        authorLink={author.url}
        authorImg={author.image}
        url={url}
        desc={desc}
        tags={tags}
      >
        <div class={CardStyle.resourceContainer}>
          {desc && (
            <p>
              <a href={url} class={style.link} target="_blank" title={title}>{desc}</a>
            </p>
          )}
          <a href={url} class={style.button} target="_blank" title={title}>View {type}</a>
        </div>
      </Card>
	  )
  }
}
