import { Loc, Router } from '../lib/loc.js'; // or use preact-router, or react-router, wouter, etc

// you can import routes synchronously:
import HomePage from '../pages/home.js';
import AboutPage from '../pages/about/index.js';
import UsagePage from '../pages/usage/index.js';
import ResourcesPage from '../pages/resources/index.js';

import style from '../pages/style.module.css'

// ... or lazy load them:
import lazy from '../lib/lazy.js';
const ReposPage = lazy(() => import('../pages/repos/index.js'));

export default function App() {
	return (
		<Loc>
			<div class="app">
				<div class={style.container}>
					<Router>
					<HomePage path="/" />
					<ReposPage path="/repos" />
					<AboutPage path="/about" />
					<UsagePage path="/usage" />
					<ResourcesPage path="/resources" />
					</Router>
				</div>
			</div>
		</Loc>
	);
}
