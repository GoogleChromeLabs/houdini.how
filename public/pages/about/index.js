import Nav from '../../components/Nav/index.js'
import Footer from '../../components/Footer/index.js'
import pageStyle from '../style.module.css'
import style from './style.module.css'

export default function AboutPage() {
  return (
    <div>
      <Nav page="About Houdini"/>
      <div class={pageStyle.container}>
        <h3>What is Houdini?</h3>
        <p>Houdini is a set of low-level APIs that exposes parts of the CSS engine, giving developers the power to extend CSS by hooking into the styling and layout process of a browser’s rendering engine. Houdini is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to be implemented natively in browsers. —<a href="https://developer.mozilla.org/en-US/docs/Web/Houdini">[MDN]</a></p>
        <h3>Houdini APIs</h3>
        <p>CSS Houdini includes the following APIs, in order of support:</p>
        <ul>
          <li>Typed Object Model</li>
          <li>Properties and Values</li>
          <li>Paint Worklet</li>
          <li>Animation Worklet</li>
          <li>Layout Worklet</li>
          <li>Font Metrics API</li>
          <li>Parser API</li>
        </ul>

        <h3>Browser Support</h3>
        <iframe class={style.iframe} src="https://ishoudinireadyyet.com"></iframe>
      </div>
      <Footer/>
    </div>
  );
}
