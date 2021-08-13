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

const validTags = {
  'paint': {
    style: style.paint,
    label: 'Paint',
    link: '#'
  },
  'properties and values': {
    style: style.props,
    label: 'Properties & Values',
    link: '#'
  },
  'typed object model': {
    style: style.typed,
    label: 'Typed Object Model',
    link: '#'
  },
  'layout': {
    style: style.layout,
    label: 'Layout',
    link: '#'
  },
  'animation': {
    style: style.animation,
    label: 'Animation',
    link: '#'
  },
}

export default class Tags extends Component {

  renderTag(tag, onClick, isFilterTagSelected) {
    const tagConfig = validTags[tag];
    if (tagConfig) {
      const {style: styleName, link, label} = tagConfig;
      let tagStyle;
      if (isFilterTagSelected) {
        tagStyle = isFilterTagSelected(tag) ? styleName : style.unSelectedTag;
      } else {
        tagStyle = styleName;
      }
      return <li
        className={`${style.tag} ${tagStyle}`}
        onClick={() => onClick && onClick(tag)}
      >
        <a href={link}>{label}</a>
      </li>
    }
    return null;
  }

  render(props) {
    return <div className={style.tags}>
      <ul>
        {props.tags.map((tag) =>
          this.renderTag(tag, props.onFilterTagClick, props.isFilterTagSelected)
        )}
      </ul>
    </div>
  }
}
