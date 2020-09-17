import Demo from '../components/Demo/index.js'
import Nav from '../components/Nav/index.js'
import style from './style.module.css'
import worklets from '../worklet-data.js'

console.log(worklets)

export default function Home() {
  return (
    <div className={style.container}>
      <Nav page="Worklet Library" />
      {Object.values(worklets).map(worklet => (
        <Demo worklet={worklet} />
      ))}
    </div>
  );
}