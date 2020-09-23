import Demo from '../components/Demo/index.js'
import Nav from '../components/Nav/index.js'
import worklets from '../worklet-data.js'
import 'css-paint-polyfill'

console.log(worklets)

export default function Home() {
  return (
    <div>
      <Nav page="Worklet Library" />
      {Object.values(worklets).map(worklet => (
        <Demo worklet={worklet} />
      ))}
    </div>
  );
}