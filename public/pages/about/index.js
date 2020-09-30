import Nav from '../../components/Nav/index.js'
import Footer from '../../components/Footer/index.js'
import pageStyle from '../style.module.css'

export default function AboutPage() {
  return (
    <div>
      <Nav page="About Houdini"/>
      <div class={pageStyle.container}>
        <h2>Worklets and resources for modern CSS with Houdini. Well, what is Houdini you ask?</h2>
      </div>
      <Footer/>
    </div>
  );
}
