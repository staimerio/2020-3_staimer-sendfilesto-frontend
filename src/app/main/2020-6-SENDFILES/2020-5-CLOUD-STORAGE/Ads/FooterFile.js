import React, { useEffect } from 'react';

function FooterFile(props) {
	useEffect(() => {
		// Adskeeper
		// const script = document.createElement('script');
		// script.src = 'https://jsc.adskeeper.com/s/e/sendfiles.to.1070066.js';
		// script.async = true;
		// document.body.appendChild(script);
		// Adsterra
		// const script = document.createElement('script');
		// script.src = 'https://pl16294641.achievablecpmrevenue.com/be/96/ea/be96eaa3eaca5c3b25ffe5603f0b1c8f.js';
		// script.type = 'text/javascript';
		// document.body.appendChild(script);
		//Exoclick
		// var adstop = document.getElementById('adstop');

		// const initscript = document.createElement('script');
		// initscript.type = 'application/javascript';
		// initscript.src = `https://a.exdynsrv.com/ads.js`;
		// adstop.appendChild(initscript);

		// //Banner 1
		// const script = document.createElement('script');
		// script.type = 'application/javascript';
		// script.innerHTML = `var ad_idzone = "4266412",ad_width = "300",ad_height = "250";`;
		// adstop.appendChild(script);
		// const iframe = document.createElement('iframe');
		// iframe.src = 'https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4266412&output=noscript';
		// iframe.setAttribute('width', '300');
		// iframe.setAttribute('height', '250');
		// iframe.setAttribute('scrolling', 'no');
		// iframe.setAttribute('marginwidth', '0');
		// iframe.setAttribute('marginheight', '0');
		// iframe.setAttribute('frameborder', '0');
		// iframe.setAttribute('style', 'margin: 10px auto 0px auto;');
		// adstop.appendChild(iframe);

		// //Banner 2
		// const script2 = document.createElement('script');
		// script2.type = 'application/javascript';
		// script2.innerHTML = `var ad_idzone = "4266412",ad_width = "300",ad_height = "250";`;
		// adstop.appendChild(script2);
		// const iframe2 = document.createElement('iframe');
		// iframe2.src = 'https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4266412&output=noscript';
		// iframe2.setAttribute('width', '300');
		// iframe2.setAttribute('height', '250');
		// iframe2.setAttribute('scrolling', 'no');
		// iframe2.setAttribute('marginwidth', '0');
		// iframe2.setAttribute('marginheight', '0');
		// iframe2.setAttribute('frameborder', '0');
		// iframe2.setAttribute('style', 'margin: 10px auto 0px auto;');
		// adstop.appendChild(iframe2);
		// Adcash
		const scriptPop = document.createElement('script');
		scriptPop.src = 'https://asacdn.com/script/atg.js';
		scriptPop.setAttribute('data-adel', 'atag');
		scriptPop.setAttribute('czid', 'r4u6f25l');
		scriptPop.async = true;
		document.body.appendChild(scriptPop);
		return () => {
			// document.body.removeChild(adstop);
		};
	}, []);

	// return <div style={{ marginTop: '1rem' }}></div>;
	return (
		<div style={{ marginTop: '1rem' }}>
			{/* <div id="M677978ScriptRootC1070066"></div> */}
		</div>
	);
}

export default FooterFile;
