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
        <p>Houdini is a set of browser APIs that exposes parts of the CSS engine, giving developers the power to extend CSS by hooking into the styling and layout process of a browser’s rendering engine. Houdini is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to be implemented natively in browsers. —<a href="https://developer.mozilla.org/en-US/docs/Web/Houdini">[MDN]</a></p>

        <iframe class={style.iframe} src="https://ishoudinireadyyet.com"></iframe>
      </div>
      <Footer/>
    </div>
  );
}
