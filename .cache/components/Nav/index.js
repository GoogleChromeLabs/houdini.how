import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from "/@npm/htm/preact";
import {Component} from '/@npm/preact'
import style from './style.module.css.js'

export default class Nav extends Component {
  render(props) {
    return (
    html`<div className=${style.head}>
      <div>
        <h1 className=${style.logo}>Houdini.how</h1>
        <h2>${props.page}</h2>
      </div>
      <nav className=${style.nav}>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="#">Usage</a></li>
          <li><a href="#">Resources</a></li>
          <li className=${style.active}><a href="#">Worklets</a></li>
        </ul>
      </nav>
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
