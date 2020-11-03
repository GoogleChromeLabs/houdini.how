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

import lazy from '../lib/lazy.js';
const HomePage = lazy(() => import('../pages/home.js'));
const AboutPage = lazy(() => import('../pages/about/index.js'));
const UsagePage = lazy(() => import('../pages/usage/index.js'));
const ResourcesPage = lazy(() => import('../pages/resources/index.js'));


export const routes = [
	{
		url: '/',
		color: 'yellow',
		title: 'Worklet Library',
		label: 'Worklets',
		Route: HomePage
	},
	{
		url: '/about',
		color: 'magenta',
		title: 'About Houdini',
		label: 'About',
		Route: AboutPage
	},
	{
		url: '/usage',
		color: 'blue',
		title: 'Using Houdini',
		label: 'Usage',
		Route: UsagePage
	},
	{
		url: '/resources',
		color: 'green',
		title: 'Links & Resources',
		label: 'Resources',
		Route: ResourcesPage
	}
];
