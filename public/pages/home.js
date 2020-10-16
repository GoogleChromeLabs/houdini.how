import Demo from '../components/Demo/index.js'
import workletData from '../worklet-data.js'

const worklets = Object.values(workletData).sort(() => Math.random()-.5);

export default function Home() {
  return (
    <div>
      {worklets.map(worklet => (
        <Demo worklet={worklet} />
      ))}
    </div>
  );
}
