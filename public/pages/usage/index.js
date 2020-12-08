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

        <p>Firstly, when using paint worklets, we highly recommend you also use the <a href="https://github.com/GoogleChromeLabs/css-paint-polyfill">CSS Paint Polyfill</a> to ensure that all modern browsers can run these styles as well. Read on for instructions on implementing both worklets and the polyfill in your user interfaces.</p>

        <p><b>Note: </b>Houdini worklets must either be run via a server locally, or on HTTPS in production. In order to work with a Houdini worklet, you will need to either install it locally or use a content delivery network (CDN) like <a href="http://unpkg.com/">unpkg</a> to serve the files.</p>

        <p class={style.callout}>There are four steps required to use a Houdini paint worklet:</p>

        <ol class={style.steps}>
          <li><span class={style.install}>Install</span> the worklet to your file system (either via an <a href="https://www.npmjs.com/">npm</a> module or linked through a <a href="http://unpkg.com/">CDN</a>).</li>
          <li><span class={style.register}>Add</span> the worklet to your local CSS interface using <code>CSS.paintWorklet.addModule()</code>.</li>
          <li><span class={style.use}>Use</span> the worklet in your CSS file.</li>
          <li><span class={style.polyfill}>Polyfill</span> your site using the <a href="https://github.com/GoogleChromeLabs/css-paint-polyfill">CSS Paint Polyfill</a></li>
        </ol>

        <p>The following goes through some of the various ways to achieve the above steps. You can also find demos and guidance on how to use the worklets in your CSS file on the <a href="/">worklet</a> page.</p>

        <h3>1. <span class={style.install}>Install</span> and 2. <span class={style.register}>Add</span></h3>

        <div class={style.installation}>
          <div>
            <h4>Option 1: Install and register from npm<br/>
              <em>(recommended for production)</em></h4>

            <p>Install your worklet from npm:</p>

            <pre class={style.sh}><code dangerouslySetInnerHTML={{ __html: `npm install &lt;package-name&gt;` }}></code></pre>

            <aside class={style.note}><b>Note: </b>The npm package name and link can be found on each worklet card.</aside>
              <p>Importing this package does not automatically inject the paint worklet. To install the worklet (step 2), you'll need to generate a URL that resolves to the package's <code>worklet.js</code>, and register that. You do so with:</p>

              <pre class={style.js}><code dangerouslySetInnerHTML={{ __html: `CSS.paintWorklet.addModule(..file-path/worklet.js)`}}></code></pre> 
          </div>

          <div>
            <h4>Option 2: Register directly from unpkg</h4>
              <p>When registering from unpkg, you can link directly to the worklet file without needing to locally install the worklet. Unpkg will resolve to the main script, or you can specify it yourself (i.e. <code>worklet.js</code>). Unpkg will not cause CORS issues, as it is served over HTTPS.</p>

              <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
                `CSS.paintWorklet.addModule("https://
                unpkg.com/&lt;package-name&gt;");`}}></code></pre>

              <p>Note that this does not register the custom properties for syntax and fallback values. Instead, they each have fallback values embedded into the worklet.</p>

              <p>To optionally register the custom properties, include the <code>properties.js</code> file as well.</p>

              <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
                `&lt;script src="https://unpkg.com/&lt;package-name&gt;/properties.js"&gt;&lt;/script&gt;`}}></code></pre>
            </div>
        </div>

        <h3 class={style.small}>Installation in Bundlers</h3>

        <p>Here is an example of how to use Houdini in modern bundlers:</p>

        <div class={style.installation}>
          <div>
          <h4>Parcel and WMR</h4>

          <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
            `import workletURL from "url:&lt;package-name&gt/worklet.js"

          CSS.paintWorklet.addModule(workletURL);`}}></code></pre>
          </div>
          <div>
            <h4>Webpack 4 and 5</h4>
            <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
          `import workletURL from "url-loader!&lt;package-name&gt/worklet.js"

CSS.paintWorklet.addModule(workletURL);`}}></code></pre>
          </div>
          <div>
            <h4>Rollup</h4>
            <pre class={style.js}><code dangerouslySetInnerHTML={{ __html:
          `import workletURL from "omt:&lt;package-name&gt/worklet.js"; 

CSS.paintWorklet.addModule(workletURL);`}}></code></pre>
          </div>
        </div>

        <h3>3. <span class={style.use}>Use</span> in CSS</h3>

        <p>Now you're ready to call the worklet by its name in your CSS file.</p>

        <pre class={style.css}><code dangerouslySetInnerHTML={{ __html: `div {
  background: paint(&lt;paintName&gt;);
}` }}></code></pre>

        <p>Most of the worklets showcased on this site have optional styling parameters which can be custimzed via CSS custom properties. These are denoted with a <code>--</code>. See the <a href="/">worklets</a> page for more information on customizations and how to use the worklets in CSS.</p>

        <pre class={style.css}><code dangerouslySetInnerHTML={{ __html: `div {
  --customValue: &lt;value&gt;
  background: paint(&lt;paintName&gt;);
}` }}></code></pre>

        <h3>4. <span class={style.polyfill}>Polyfill</span> your site</h3>

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
