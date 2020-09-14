import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from "/@npm/htm/preact";
import style from './style.module.css.js'
import CardLinks from '../CardLinks/index.js'
import CardMeta from '../CardMeta/index.js'

export default function Card(props) {
  return (
    html`<div className=${style.container}>
      <${CardMeta} authorImg=${props.authorImg} authorName=${props.authorName} authorLink=${props.authorLink} name=${props.name} />
      <div className=${style.card}>
        ${props.children}
        <${CardLinks} name=${props.name} penLink=${props.penLink} />
      </div>
    </div>`
  )
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
