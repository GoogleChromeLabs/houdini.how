import HomePage from '../pages/home.js';
import AboutPage from '../pages/about/index.js';
import UsagePage from '../pages/usage/index.js';
import ResourcesPage from '../pages/resources/index.js';

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
