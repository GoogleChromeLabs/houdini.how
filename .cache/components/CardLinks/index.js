import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from "/@npm/htm/preact";
import {Component} from '/@npm/preact'
import CardStyle from '../Card/style.module.css.js'
import classnames from '/@npm/classnames'

export default class CardLinks extends Component {

  render(props) {
    return (
    html`<ul className=${CardStyle.links}>
      <li><a className=${CardStyle.cardAction} href=${`https://codepen.io/una/pen/${this.props.penLink}`} target="_blank" rel="noopener noreferrer">Demo</a></li>
      <li>
      <a href=${`https://unpkg.com/extra.css/${this.props.name}.js`} className=${classnames(CardStyle.cardAction, this.state.copied === 'props' && CardStyle.copied)}>CDN Link</a>
      </li>
    </ul>`
  )
}
}

import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
