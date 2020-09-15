import Sparkles from '../components/Demos/Sparkles/index.js'
import Nav from '../components/Nav/index.js'
import style from './style.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <Nav page="Worklet Library" />
      <Sparkles />
      <Sparkles />
    </div>
  );
}