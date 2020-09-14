import { Loc, Router } from '../lib/loc.js'; // or use preact-router, or react-router, wouter, etc

// you can import routes synchronously:
import HomePage from '../pages/home.js';

// ... or lazy load them:
import lazy from '../lib/lazy.js';
const ReposPage = lazy(() => import('../pages/repos/index.js'));

export default function App() {
	return (
		<Loc>
			<div class="app">
        <Router>
          <HomePage path="/" />
          <ReposPage path="/repos" />
        </Router>
			</div>
		</Loc>
	);
}
