import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from "/@npm/htm/preact";
import { Component } from '/@npm/preact'
import Nav from '../../components/Nav';
import styles from './style.module.css.js';

export default class AboutPage extends Component {
  render(props) {
    return (
      html`<div>
        <${Nav} page="About" />
        <h2>Worklets and resources for modern CSS with Houdini. Well, what is Houdini you ask?</h2>
      </div>`
    );
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
