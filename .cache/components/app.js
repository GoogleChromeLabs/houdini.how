import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from "/@npm/htm/preact";
import { Loc, Router } from '../lib/loc.js'; // or use preact-router, or react-router, wouter, etc

// you can import routes synchronously:
import HomePage from '../pages/home.js';

// ... or lazy load them:
import lazy from '../lib/lazy.js';
const ReposPage = lazy(() => import('../pages/repos/index.js'));

export default function App() {
	return (
		html`<${Loc}>
			<div class="app">
        <${Router}>
          <${HomePage} path="/" />
          <${ReposPage} path="/repos" />
        <//>
			</div>
		<//>`
	);
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
