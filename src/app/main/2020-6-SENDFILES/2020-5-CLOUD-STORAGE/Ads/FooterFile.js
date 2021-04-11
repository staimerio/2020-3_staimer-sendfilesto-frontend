import React, { useEffect } from 'react';
import withReducer from 'app/store/withReducer';

import reducer from '../store/reducers';

function FooterFile(props) {
	useEffect(() => {
		// Adskeeper
		const script = document.createElement('script');
		script.src = 'https://jsc.adskeeper.com/s/e/sendfiles.to.1070066.js';
		script.async = true;
		document.body.appendChild(script);
		// Adcash
		const scriptPop = document.createElement('script');
		scriptPop.src = 'https://asacdn.com/script/atg.js';
		scriptPop.setAttribute('data-adel', 'atag');
		scriptPop.setAttribute('czid', 'r4u6f25l');
		scriptPop.async = true;
		document.body.appendChild(scriptPop);
		return () => {
			document.body.removeChild(script);
			document.body.removeChild(scriptPop);
		};
	}, []);

	return (
		<div style={{ marginTop: '1rem' }}>
			<div id="M677978ScriptRootC1070066"></div>
		</div>
	);
}

export default withReducer('storage', reducer)(FooterFile);
