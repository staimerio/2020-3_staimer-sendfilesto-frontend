import React from 'react';

const PagesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/user',			
			component: React.lazy(() => import('./PagesRoutes'))
		}
	]
};

export default PagesConfig;
