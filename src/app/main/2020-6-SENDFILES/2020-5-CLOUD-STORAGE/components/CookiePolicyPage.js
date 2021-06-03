import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';

import reducer from '../store/reducers';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		// color: '#FFF'
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		zIndex: 2,
		maxWidth: '100%',
		minWidth: 0,
		height: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundImage:
			"linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url('/assets/images/backgrounds/sendfiles-fondo-minify.png')"
	},
	row: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '10px 10px 10px 10px'
	}
}));

function CookiePolicyPage(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('homePage');

	// const propsContent = {
	// 	description: folderList.description
	// };

	return (
		<FusePageSimple
			classes={{
				root: classes.root,
				wrapper: classes.wrapper
			}}
			header={
				<div className="p-24">
					<Typography variant="body2">{t('COOKIE_POLICY')}</Typography>
				</div>
			}
			content={
				<div className="p-24">
					<p>
						<small>Effective as of April 23, 20</small>20
					</p>
					<p>
						This Cookie Policy explains when and why cookies are used by SendFiles, (collectively,
						“SendFiles”, “we”, “us” or “our”), on our websites, applications, advertisements and related
						services, including emails, newsletters and on certain partner and licensee websites that we do
						not own or operate but with whom we have agreements (together, the “Service”).
					</p>
					<br />
					<br />
					<h3>What are Cookies?</h3>
					<br />
					<p>
						Cookies are small bits of text that are downloaded to the devices you use to reach and use the
						Service. Your browser or device holds these cookies and makes them available every time you
						visit a site again so that it can recognize you and remember important information about you.
					</p>
					<br />
					<p>
						Session Cookies are temporary cookies that remain in your browser or device until you leave the
						site. They are then deleted from your device once you leave the Service.
					</p>
					<br />
					<p>
						Persistent Cookies remain in your browser or device for much longer – they remain there until
						you delete them or they reach their expiry date, depending on the cookie. These may, for
						example, be used to remember your preferences when you use the Service, recognize you on your
						return, and enhance your experience on the Service. Use of a persistent cookie may be linked to
						personal information while interacting with the Service, such as when you choose to store your
						user names so that you do not have to enter them each time you access your accounts. Then, a
						persistent cookie will be stored on your computer, which is linked to your account information.
						If you reject the persistent cookie, you may still use the Service but you will be limited in
						some areas of it.
					</p>
					<br />
					<p>
						For more information on cookies please visit:&nbsp;
						<a target="_blank" href="http://www.allaboutcookies.org/" rel="noreferrer noopener">
							http://www.allaboutcookies.org/
						</a>
					</p>
					<br />
					<br />
					<h3>Can I Change My Cookie Preferences?</h3>
					<br />
					<p>
						You can always change your cookie preferences or delete cookies altogether as discussed below.
					</p>
					<br />
					<p>
						Browser settings also allow you to choose whether or not to accept cookies or limit certain
						cookies. Most browsers also provide functionality that lets you review and erase cookies. You
						may wish to refer to&nbsp;
						<a
							target="_blank"
							href="http://www.allaboutcookies.org/manage-cookies/index.html"
							rel="noreferrer noopener"
						>
							this guide
						</a>
						&nbsp;for information on commonly used browsers. If you use the Service without changing your
						browser settings, we will assume that you are happy to receive all cookies on the Service.
						Please be aware that if cookies are disabled, not all features of the Service may operate as
						intended.
					</p>
					<br />
					<p>
						If you would prefer that we not collect information that may be used to help determine which
						advertisements to serve you, opt out by clicking this icon , which can be found on most of our
						webpages and applications. You may also opt out or change your behavioral advertising cookie
						preferences by visiting the opt-out page for the&nbsp;
						<a target="_blank" href="http://www.aboutads.info/choices/" rel="noreferrer noopener">
							Digital Advertising Alliance
						</a>
						&nbsp;(U.S. residents and those not in the EU or Canada), the&nbsp;
						<a target="_blank" href="http://www.youronlinechoices.com/" rel="noreferrer noopener">
							European Interactive Digital Advertising Alliance
						</a>
						&nbsp;(EU residents).
					</p>
					<br />
					<p>
						Flash Cookies (also known as Local Shared Objects) cannot be changed by browser settings. The
						Adobe website provides comprehensive information on how to delete or disable Flash cookies –
						see&nbsp;
						<a target="_blank" rel="noreferrer noopener" href="http://www.adobe.com/devnet/security.html">
							Adobe’s website
						</a>
						&nbsp;for further information. Please be aware that if you disable or reject Flash cookies for
						the Service, you may not be able to access certain features, such as video content or services
						that require you to sign in.
					</p>
					<br />
					<p>
						Your mobile operating system may let you opt out from having your information collected or used
						for interest-based advertising on mobile devices. You should refer to the instructions provided
						by your mobile device’s manufacturer, but this functionality is usually available in the
						“Settings” section of your device. You can also stop us from collecting information by turning
						off data collection for interest-based advertising in our applications or by uninstalling our
						applications.
					</p>
					<br />
					<br />
					<h3>Does this Policy Change?</h3>
					<br />
					<p>
						We may change this Cookie Policy at any time. Please take a look at the date at the top of this
						page to see when this Cookie Policy was last updated. Any changes in this Cookie Policy will
						become effective when we make the revised Cookie Policy available on the Service.
					</p>
					<br />
					<br />
					<h2>How Does SendFiles Use Cookies?</h2>
					<br />
					<h3>What Cookies Do We Use?</h3>
					<br />
					<br />
					<p>
						Below is a list of each category of cookies we use and why we use each cookie. First party
						cookies are our own cookies set by SendFiles, controlled by us and used to provide information
						about the usage of the Service.
					</p>
					<br />
					<p>
						<strong>Essential Cookies or Strictly Necessary Cookies:</strong>&nbsp;These cookies are
						essential to the Service in order for you to move around the Service and to use its features.
						Without these cookies, certain features could not function. No information about your browsing
						habits is gathered by these cookies.
					</p>
					<br />
					<p>
						<strong>Functional Cookies:</strong>&nbsp;These cookies remember how you prefer to use the
						Service and enable us to improve the way the Service works. We can remember your settings and
						help provide you with ads. Functional Cookies are persistent cookies that the Service remembers
						when your computer or device comes back to that Service.
					</p>
					<br />
					<p>
						<strong>Analytics Cookies:</strong>&nbsp;Analytics Cookies allow us to improve our services by
						collecting information about your use of the Service. We use these cookies to help improve how
						the website works. For example, Analytics Cookies show us statistics, which are the most
						frequently visited pages on the Service, help us record any difficulties you have with the
						Service, and show us whether our advertising is effective or not. We can’t identify you
						personally through the use of these cookies, but third parties who provide these cookies may be
						able to.
					</p>
					<br />
					<p>
						<strong>Behavioral Advertising Cookies:</strong>&nbsp;Behavioral Advertising Cookies are used to
						deliver relevant advertisements to users both on and off the Service. We analyze what pages you
						visit on these sites, what products or services you view, and whether you view or click on ads
						that are shown to you. We may also use a cookie to learn whether someone who saw an ad later
						visited and took an action on the advertiser’s site. We use this information to send you
						interest-based ads and may also share this information with third parties. Similarly, our
						partners may use a cookie to determine whether we’ve shown an ad and how it performed, or
						provide us with information about how you interact with ads. We may also work with a partner to
						show you an ad on or off the Service, such as after you have visited a partner’s site or
						application.
					</p>
					<br />
					<p>
						<strong>Third Party Cookies:</strong>&nbsp;Some of the cookies on the Service are operated by
						third parties, such as Twitter, YouTube, Facebook or Comscore. Some of these third parties (for
						example third-party advertisers) may use cookies on the Service, in emails or in our
						advertisements on other websites to allow them to deliver the services they are providing. Some
						of the cookies operated by third parties may be used for analytics purposes, such as to monitor,
						analyze and prevent fraudulent traffic or other suspicious activities. In order to create a
						user-friendly experience, some of our third-party promotions and advertisements are designed to
						automatically transmit users’ information onto the third party’s landing page when you choose to
						“click” upon a third party’s advertisement or promotion. We do not control these third parties
						or their use of cookies. This means it is not possible for us to manage these cookies. This
						Policy only covers the use of cookies by SendFiles and does not cover the use of cookies by any
						third party. Some of these third party cookies are not session based and have varying expiry
						dates. Please check the websites of these third parties for details on how they use cookies.
					</p>
					<br />
					<p>
						<strong>Flash Cookies:</strong>&nbsp;We may, in certain situations, use Adobe Flash Player to
						deliver special content, such as video clips or animation. Flash cookies are stored on your
						device, but they are managed through an interface that is different from the one provided by
						your web browser. This means that it is not possible to manage Flash cookies at the browser
						level in the same way you would manage other types of cookies. Instead, you can access your
						Flash management tools from Adobe’s website directly.
					</p>
					<br />
					<p>
						<strong>Geo-Location Information:</strong>&nbsp;Some devices allow applications to access
						real-time location-based information (for example, GPS). Some photos or other content you place
						within the Service may contain recorded location information. We may use this information to
						optimize your experience. Also, some of the information we collect from a device, for example IP
						address, can sometimes be used to approximate a device’s location.
					</p>
					<br />
					<br />
					<h3>Similar Technologies</h3>
					<br />
					<p>
						In addition to cookies, we may also use other similar tracking technologies on our services,
						such as pixel tags (also known as clear GIFs, pixels or web bugs), web beacons, eTags and local
						storage. We use these technologies to do things like store user settings video viewing history,
						gather demographic information about our user base as a whole or track users’ movements around
						the Service, to serve interest-based ads, or to improve our understanding of things like site
						traffic, visitor behavior and promotional campaigns. Pixel tags are small blocks of code
						installed in or on a web page, mobile app, or advertisement and are a method for passing
						information from your device to a third party website. Web beacons are electronic files that
						allow a website to count users who have visited that page or to access certain cookies. Local
						storage, such as HTML 5, allows a website or mobile app to store and retrieve data on an
						individual’s device. eTags are tags used to analyze trends by us and our commerce partners.
					</p>
					<br />
					<p>For more information, please read our&nbsp;Privacy Policy.</p>
					<p>
						We hope that this policy helps you understand our use of cookies. If you have any further
						queries, please contact us at&nbsp;
						<a href="mailto:info@sendfiles.to">info@sendfiles.to</a>&nbsp;and be sure to include Cookie
						Policy in the subject line.
					</p>
				</div>
			}
		/>
	);
}

export default withReducer('storage', reducer)(CookiePolicyPage);
