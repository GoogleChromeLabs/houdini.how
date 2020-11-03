/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Loc, Router } from '../lib/loc.js';
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
