import Nav from '../../components/Nav/index.js'
import Footer from '../../components/Footer/index.js'
import style from './style.module.css'
import pageStyle from '../style.module.css'

export default function UsagePage() {
  return (
    <div>
      <Nav page="Using Houdini" />
      <div class={pageStyle.container}>

        <h3>Option 1: Install from npm</h3>

        <pre class={style.sh}><code>npm install angled-corners</code></pre>

        <h3>Option 2: Usage in Bundlers</h3>

        <p>Importing this package will register custom properties, but does not automatically inject the paint worklet. To inject the worklet, you'll need to generate a URL that resolves to <code>angled-corners/worklet.js</code>, and register that.</p>

        <pre class={style.js}><code>
  import 'angled-corners';

  // for Webpack:
  import workletUrl from 'url-loader!angled-corners/worklet.js';
  CSS.paintWorklet.addModule(workletUrl);

  // for Rollup or Parcel:
  import workletUrl from 'url:angled-corners/worklet.js';
  CSS.paintWorklet.addModule(workletUrl);
        </code></pre>

        <p>Alternatively, you can import the single-file bundled version and everything will be done for you. This is easier, but can cause <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">CSP issues</a> since it defines the worklet using a Blob URL.</p>

        <pre class={style.js}><code> import 'angled-corners/standalone.js';</code></pre>

        <h3>Option 3: Manual usage</h3>

        <p>Copy the <code>index.js</code> and <code>worklet.js</code> files from this package into your project, or otherwise make them available at a URL. The <code>index.js</code> module contains main-thread code, registering any custom CSS properties. The <code>worklet.js</code> module then needs to be registered using <code>CSS.paintWorklet.addModule()</code>.</p>

  <pre class={style.html}><code dangerouslySetInnerHTML={{ __html: `&lt;script src="/@npm/angled-corners/index.js"&gt;&lt;/script&gt;

  &lt;script&gt;
    CSS.paintWorklet.addModule('/@npm/angled-corners/index.js');
  &lt;/script&gt;` }}>
    </code></pre>

        <h3>Option 4: Hotlinking from unpkg</h3>

        <p>A single script tag can be used to load and install the worklet from the unpkg CDN. The script will register any custom CSS properties, then automatically register the <code>angled-corners</code> worklet (using the URL <code>https://unpkg.com/angled-corners/worklet.js</code>).</p>

        <pre class={style.html}><code dangerouslySetInnerHTML={{ __html: `&lt;script src="https://unpkg.com/angled-corners"&gt;&lt;/script&gt;` }}>
        </code></pre>

        <p>As with bundlers, we can alternatively choose to use a single-file version of the code that includes an inlined copy of the worklet. Because the worklet code is contained in a Blob URL, this can cause <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">CSP issues</a>:</p>

        <pre class={style.html}><code dangerouslySetInnerHTML={{ __html: `&lt;script src="script src="https://unpkg.com/angled-corners/standalone.js"&gt;&lt;/script&gt;` }}>
        </code></pre>

        <h3>Option 5: Loading from unpkg</h3>

        <p>We can load this package's <code>"module"</code> entry from unpkg to get its main-thread code, which registers any custom CSS properties. In addition, we need to register the worklet file (<code>/worklet.js</code>) separately:</p>

        <pre class={style.html}><code dangerouslySetInnerHTML={{ __html: `&lt;script type="module"&gt;
    import 'https://unpkg.com/angled-corners?module';
    CSS.paintWorklet.addModule('https://unpkg.com/angled-corners/worklet.js');
  &lt;/script&gt;` }}>
        </code></pre>
        </div>
      <Footer />
    </div>
  );
}
