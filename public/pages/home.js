import Demo from '../components/Demo/index.js'
import worklets from '../worklet-data.js'

export default function Home() {
  return (
    <div>
      {Object.values(worklets).map(worklet => (
        <Demo worklet={worklet} />
      ))}
    </div>
  );
}
