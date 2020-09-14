import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from "/@npm/htm/preact";
import {Component} from '/@npm/preact'
import style from './style.module.css.js'

export default class CardLinks extends Component {

  render(props) {
    return (
    html`<div className=${style.meta}>
      <img className=${style.author} src=${props.authorImg} alt="" />
      <div className=${style.title}>
        <h2 className=${style.name}>${props.name}</h2>
        <p>Submitted by <a href=${props.authorLink}>${props.authorName}</a></p>
      </div>
    </div>`
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
