import React from 'react';
import i18next from 'i18next';

import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'errorPage', en);
i18next.addResourceBundle('tr', 'errorPage', tr);
i18next.addResourceBundle('ar', 'errorPage', ar);

const ErrorsPagesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [		
		{
			component: React.lazy(() => import('./components/404'))
		}
	]
};

export default ErrorsPagesConfig;
