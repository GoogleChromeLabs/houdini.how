import { Loc, Router } from '../lib/loc.js';
import style from '../pages/style.module.css'
import { routes } from './routes.js';
import Footer from './Footer/index.js';
import Nav from './Nav/index.js';

export default function App() {
	return (
		<Loc>
			<div class="app">
				<div>
					<Nav />
					<Router>
						{routes.map(({ Route, url }) => (
							<Route path={url} />
						))}
					</Router>
					<Footer />
				</div>
			</div>
		</Loc>
	);
}
