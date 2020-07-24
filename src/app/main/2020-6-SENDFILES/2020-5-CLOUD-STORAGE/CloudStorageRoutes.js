import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import i18next from 'i18next';

import en from './i18n/en';
import es from './i18n/es';
// import ar from './i18n/ar';

i18next.addResourceBundle('en', 'homePage', en);
i18next.addResourceBundle('es', 'homePage', es);
// i18next.addResourceBundle('ar', 'homePage', ar);

function CloudStorageRoutes(props) {
	return (
		<Router>
			<Route path="/downloads/:code" exact component={React.lazy(() => import('./components/DownloadsPage'))} />
			<Route path="/" exact component={React.lazy(() => import('./components/HomePage'))} />
		</Router>
	);
}

export default CloudStorageRoutes;
