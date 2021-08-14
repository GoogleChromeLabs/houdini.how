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

export default class Card {
  onRefCreated(target) {
    const {name, showAnchor} = this.props;
    const {hash} = window.location;
    if (target && showAnchor) {
      if (hash.includes(`#${name}`)) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'center',
        });
      }
    }
  }

  render() {
    return (
      <div class={style.container} type={this.props.type} id={this.props.packageName} ref={this.onRefCreated.bind(this)}>
        <CardMeta authorImg={this.props.authorImg} authorName={this.props.authorName} authorLink={this.props.authorLink} packageName={this.props.name} type={this.props.type} tags={this.props.tags} date={this.props.date} note={this.props.note} showAnchor={this.props.showAnchor}/>
        <div class={style.card}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
