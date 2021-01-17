import React, { useEffect } from 'react';
import withReducer from 'app/store/withReducer';

import reducer from '../store/reducers';

function FooterFile(props) {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = 'https://jsc.adskeeper.com/s/e/sendfiles.to.1070066.js';
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div style={{ marginTop: '1rem' }}>
			<div id="M677978ScriptRootC1070066"></div>
		</div>
	);
}

export default withReducer('storage', reducer)(FooterFile);
