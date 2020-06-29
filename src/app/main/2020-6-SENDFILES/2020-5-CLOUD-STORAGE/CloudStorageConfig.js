import React from 'react';

const CloudStorageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/',			
			component: React.lazy(() => import('./CloudStorageRoutes'))
		}
	]
};

export default CloudStorageConfig;
