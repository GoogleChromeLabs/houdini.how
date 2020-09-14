import { html } from "/@npm/htm/preact";
import { render } from '/@npm/preact';
import App from './components/app.js';

render(html`<${App} />`, document.body);
