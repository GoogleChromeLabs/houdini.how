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
