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
import pageStyle from '../style.module.css'

export default function UsagePage() {
  return (
    <div>
      <div class={pageStyle.container}>

        <p>Houdini worklets must either be run via a server locally, or on HTTPS in production. In order to work with a Houdini worklet, you will need to either install it locally or use a content delivery network (CDN) like <a href="http://unpkg.com/">unpkg</a> to serve the files. You will then need to register the worklet locally.</p>

        <p>When using Paint worklets, we highly recommend you also use the <a href="https://github.com/GoogleChromeLabs/css-paint-polyfill">CSS Paint Polyfill</a> to ensure that all modern browsers can run the styles seamlessly. Read on for instructions.</p>

        <h3>Option 1: Install from npm and register</h3>

        <p>Install your worklet from npm:</p>

        <pre class={style.sh}><code dangerouslySetInnerHTML={{ __html: `npm install &lt;package-name&gt;` }}></code></pre>

        <p>Importing this package does not automatically inject the paint worklet. To install the worklet, you'll need to generate a URL that resolves to the package's <code>worklet.js</code>, and register that. You do so with:</p>

        <pre class={style.js}><code dangerouslySetInnerHTML={{ __html: `CSS.paintWorklet.addModule(..file-path/worklet.js)` }}></code></pre>

        <p>You will be using <code>paintWorklet</code> for paint, <code>layoutWorklet</code> for layout, and <code>animationWorklet</code> for animation worklets respectively.</p>

        <aside>The npm package name and link can be found on each worklet card.</aside>

        <h3>Option 2: Register from unpkg</h3>

        <p>When registering from unpkg, you can link directly to the <code>worklet.js</code> file without needing to locally install the worklet. Unpkg will resolve to the <code>worklet.js</code> as the main script, or you can specify it yourself. Unpkg will not cause CORS issues, as it is served over HTTPS.</p>

        <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
          `CSS.paintWorklet.addModule("https://unpkg.com/&lt;package-name&gt;");`}}></code></pre>

        <p>Note that this does not register the custom properties for syntax and fallback values. Instead, they each have fallback values embedded into the worklet.</p>

        <p>To optionally register the custom properties, include the <code>properties.js</code> file as well.</p>

        <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
          `&lt;script src="https://unpkg.com/&lt;package-name&gt;/properties.js"&gt;&lt;/script&gt;`}}></code></pre>

        <h3>Usage in Bundlers</h3>

        <p>Here is an example of how to use Houdini in modern bundlers:</p>

        <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
          `import "&lt;package-name&gt;/properties.js"; // optionally register properties
import workletURL from "url:&lt;package-name&gt;";

CSS.paintWorklet.addModule(workletURL);`}}></code></pre>

        <h3>Install the Paint Polyfill</h3>

        <p>As previously mentioned, when using the Paint worklet, you should also include the CSS Paint Polyfill.</p>

        <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
          `&lt;script src="css-paint-polyfill.js">&lt;/script&gt;
          
// or with unpkg:
&lt;script src="https://unpkg.com/css-paint-polyfill"&gt;&lt;/script&gt;`}}></code></pre>

          <p>With a bundler or ES modules:</p>

          <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
          `import 'css-paint-polyfill';`}}></code></pre>

        </div>
    </div>
  );
}
