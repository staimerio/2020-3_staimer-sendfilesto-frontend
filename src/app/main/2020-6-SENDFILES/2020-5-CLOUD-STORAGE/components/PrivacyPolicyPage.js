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

function PrivacyPolicyPage(props) {
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
					<Typography variant="body2">{t('PRIVACY_POLICY')}</Typography>
				</div>
			}
			content={
				<div className="p-24">
					<p>
						<small>Effective as of Junio 03, 2021</small>
					</p>
					<p>
						Our updated Privacy Policy explains what information we collect, how we use it, and the choices
						you have, including how to manage your privacy and cookies settings, access the information we
						have about you, and delete your account.
					</p>
					<br />
					<p>
						SendFiles is committed to protecting consumer privacy online. We believe that greater protection
						of personal privacy on the Web will not only protect our users, but also increase users
						confidence and ultimately their participation in online activities. The purpose of our policy is
						to inform you about the types of information we gather about you when you visit our site, how we
						may use that information, whether we disclose it to anyone, and the choices you have regarding
						our use of the information. SendFiles.com strives to offer its visitors the many advantages of
						Internet technology and to provide an interactive and personalized experience.
					</p>
					<br />
					<br />
					<h3>Your Consent</h3>
					<br />
					<p>
						BY USER SendFiles SERVICES, INSTALLING AND/OR RUNNING ON YOUR MOBILE DEVICE OR BROWSER, ENTERING
						INTO, CONNECTING TO, ACCESSING AND/OR USING THE
						<br />
						APP, YOU AGREE TO THE TERMS AND CONDITIONS SET FORTH IN THIS PRIVACY
						<br />
						POLICY, INCLUDING TO THE POSSIBLE COLLECTION AND PROCESSING OF YOUR
						<br />
						PERSONAL INFORMATION. PLEASE NOTE: IF YOU OR, AS APPLICABLE, YOUR
						<br />
						LEGAL GUARDIAN, DISAGREE TO ANY TERM PROVIDED HEREIN, YOU MUST NOT
						<br />
						INSTALL, ACCESS AND/OR USE THE APP, SendFiles OTHER SERVICES AND YOU ARE REQUESTED TO PROMPTLY
						ERASE THE APP FROM YOUR MOBILE DEVICE OR STOP USING OUR APP/WEBSITE THROUGH YOUR BROWSER AND DO
						NOT ENTER TO, CONNECT TO, ACCESS OR USE ANY OF OUR SERVICES RELATED TO THE APP.
					</p>
					<br />
					<br />
					<h3>What information do we collect?</h3>
					<br />
					<h3>Data you give us directly</h3>
					<br />
					<br />
					<ul>
						<li>
							if you register with us (such as your date of birth, username, avatar, password and
							<br />
							email address);
						</li>
						<li>
							information you provide by participating in any chats, communities or social media
							<br />
							functions. We will consider that information as part of the public domain;
						</li>
						<li>information you provide us if you report a problem with our Services or App.</li>
					</ul>
					<br />
					<br />
					<h3>Data we may collect when you use our services and App (whether or not you register with us)</h3>
					<br />
					<ul>
						<li>data about your location, device type, operating system and platform;</li>
						<li>
							mobile device identifiers (such as your unique device ID (persistent/non-persistent,
							<br />
							hardware type, medial access control (“MAC”) address, international mobile
							<br />
							equipment identity (“IMEI”), OS, and your device name;
						</li>
						<li>
							data about your computer’s browser version, operating system version, page loading
							<br />
							time, network, generated device identifier information, hashed MAC address, referral
							<br />
							source and IP address.
						</li>
						<li>
							the number of times you visit our APP and the amount of time you spend using the
							<br />
							APP;
						</li>
						<li>
							when you are accessing the APP through a third-party account such as Facebook
							<br />
							or Google – certain information relating to your account with those third parties
							<br />
							including your name, user ID, gender, location (country and/or city specific), email
							<br />
							address, date of birth, information from your public profile including friends and
							<br />
							connections, log in details, avatar, gender and other information based on your use
							<br />
							of our APP. You can manage the information which is shared by such third parties
							<br />
							by amending your preferences through the privacy settings such third parties provide.
							<br />
							With this list, we try to be as clear and complete as possible, but we find it important to
							keep
							<br />
							this Privacy Policy legible, so there may be other information we collect.
						</li>
					</ul>
					<br />
					<br />
					<h3>How do we use your information?</h3>
					<br />
					<p>We may use your data in the following ways:</p>
					<br />
					<ul>
						<li>
							To provide you the App and associated websites and continuously improve their
							<br />
							features;
						</li>
						<li>To store your running-history;</li>
						<li>To provide helpdesk and support services;</li>
						<li>To customise the App which is available to you;</li>
						<li>To ensure that you are in compliance with our terms;</li>
						<li>To moderate any chat messages;</li>
						<li>
							To improve the App, for analysis and reporting purposes and to offer you technical
							<br />
							support or respond to your questions. This also includes using data to log any
							<br />
							crashes in our provision of the App, so we may report such interruptions (in this
							<br />
							regard, we may use a third party to assist us);
						</li>
						<li>To notify you if you have received message update notifications or something;</li>
						<li>To enable social network integration, especially with Facebook;</li>
						<li>To personalise your experience;</li>
						<li>
							To send you push notifications for the App (which you can choose not to accept or
							<br />
							turn off by visiting the settings section of your device and selecting the appropriate
							<br />
							setting);
						</li>
						<li>To offer you other services and Apps which we think may be of interest to you;</li>
						<li>To prevent fraud and crime;</li>
						<li>To create a profile for marketing purposes with for example Facebook or Google;</li>
						<li>Emails (regarding updates, newsletter, new features, (new) apps etc.);</li>
						<li>Administrative purposes, such as notification of a violation of our terms of use.</li>
					</ul>
					<br />
					<br />
					<h3>Cookies and Web Beacons</h3>
					<br />
					<p>
						We use “cookies.” The cookies we place on your computer are very small text files that uniquely
						identify your browser and may be sent to your computer or mobile device. They are stored on your
						hard drive and communicate with our servers only when you are visiting our websites. We use
						cookies to improve the quality of SendFiles.com. They allow us to monitor aggregate metrics such
						as total number of visitors and number of pages viewed. They also allow us to optimize
						SendFiles.com to make sure that we are delivering the best possible experience to our users.
						Your web browser is likely already set to accept cookies, yet you may choose to block cookies in
						your web browser’s settings. Note that blocking cookies may result in some features not being
						able to function properly. To learn more about controlling browser cookies visit:&nbsp;
						<a
							rel="noreferrer noopener"
							target="_blank"
							href="http://www.aboutcookies.org/Default.aspx?page=1"
						>
							http://www.aboutcookies.org/Default.aspx?page=1
						</a>
						.
					</p>
					<br />
					<p>
						Note that SendFiles has no access to or control over these cookies that are used by third-party
						advertisers. Learn more about our&nbsp;<a href="/#/pages/cookie-policy/">Cookies Policy</a>.
					</p>
					<br />
					<br />
					<h3>Device Information.</h3>
					<br />
					<p>
						We collect information regarding the Internet browser, computer, tablet, mobile phone,
						smartphone or other device utilized to access SendFiles.com to ensure that SendFiles.com is
						optimized for those devices.
					</p>
					<br />
					<h3>Log Files.</h3>
					<br />
					<br />
					<p>
						We may also automatically log certain anonymous information about visitors to SendFiles.com,
						including, but not limited to, where the user came from to visit our site, IP address, search
						terms utilized, browser type and a reading history of the pages viewed.
					</p>
					<br />
					<br />
					<h3>Analytics</h3>
					<br />
					<p>
						We use third party information, reports and analysis about the usage and browsing patterns of
						users of SendFiles.com. We allow the third party analytics companies to include web beacons and
						cookies on SendFiles.com. The collected information includes search terms, search parameters,
						click-throughs by users, and other similar information. We utilize this information to improve
						SendFiles.com and make sure we are delivering relevant content to our users. The Analytics we
						use do not identify individual users of SendFiles.com.
					</p>
					<br />
					<br />
					<h3>Third Party Ad Networks and Social Networks</h3>
					<br />
					<p>
						SendFiles.com expects its partners, advertisers to respect the privacy of our users. However,
						third parties, including our partners, advertisers and other content providers accessible
						through our site, may have their own privacy and data collection policies and practices. For
						example, during your visit to our site you may link to, or view as part of a frame on
						SendFiles.com page, certain content that is actually created or hosted by a third party. Also,
						through SendFiles.com you may be introduced to, or be able to access, information, Web sites,
						advertisements, features, contests or sweepstakes offered by other parties. SendFiles.com is not
						responsible for the actions or policies of such third parties. You should check the applicable
						privacy policies of those third parties when providing information on a feature or page operated
						by a third party.
					</p>
					<br />
					<p>
						While on our site, our advertisers, promotional partners or other third parties may use cookies
						or other technology to attempt to identify some of your preferences or retrieve information
						about you. For example, some of our advertising is served by third parties and may include
						cookies that enable the advertiser to determine whether you have seen a particular advertisement
						before. Through features available on our site, third parties may use cookies or other
						technology to gather information. SendFiles.com does not control the use of this technology or
						the resulting information and is not responsible for any actions or policies of such third
						parties.
					</p>
					<br />
					<p>
						We use third-party advertising companies to serve ads when you visit our Web site. These
						companies may use non-personal information (i.e., information that does not include your name,
						address, email address or telephone number) about your visits to this and other Web sites in an
						effort to provide advertisements about goods and services that may be of interest to you. To
						learn more about third-party advertising or to opt-out of such advertising, you can visit both
						the Network Advertising Initiative and the Digital Advertising Alliance.
					</p>
					<br />
					<p>
						In addition to the above, we have implemented at SendFiles.com certain “Google Analytics”
						features that support display advertising, including re-targeting. Visitors to SendFiles.com may
						opt out of Google Analytics, customize the Google Display Network ads by using the Google Ad
						Preferences Manager and learn more about how google serves ads by viewing its Customer Ads Help
						Center. If you do not wish to participate in Google Analytics, you may also download the Google
						Analytics pt-out browser add-on.
					</p>
					<br />
					<br />
					<h3>Children’s Information</h3>
					<br />
					<p>
						Another part of our priority is adding protection for children while using the internet. We
						encourage parents and guardians to observe, participate in, and/or monitor and guide their
						online activity.
					</p>
					<br />
					<p>
						SendFiles does not knowingly collect any Personal Identifiable Information from children under
						the age of 13. If you think that your child provided this kind of information on our website, we
						strongly encourage you to contact us immediately and we will do our best efforts to promptly
						remove such information from our records.
					</p>
					<br />
					<br />
					<h3>Information security and accuracy</h3>
					<br />
					<p>
						We intend to protect your personal information and to maintain its accuracy. SendFiles
						<br />
						implements reasonable physical, administrative and technical safeguards to help us protect
						<br />
						your personal information from unauthorized access, use and disclosure.
					</p>
					<br />
					<br />
					<h3>Online Privacy Policy Only</h3>
					<br />
					<p>
						This privacy policy applies only to our online activities and is valid for visitors to our
						website with regards to the information that they shared and/or collect in SendFiles. This
						policy is not applicable to any information collected offline or via channels other than this
						website.
					</p>
					<br />
					<br />
					<h3>Access to information</h3>
					<br />
					<p>
						You have the right to request access to the information we have on you. You can do this by
						<br />
						contacting us at&nbsp;<a href="mailto:info@sendfiles.to">info@sendfiles.to</a>. We will make
						sure to provide you with a copy of the
						<br />
						data we process about you. In order to comply with your request, we may ask you to verify
						<br />
						your identity. We will fulfill your request by sending your copy electronically. For any
						subsequent access request, we may charge you with an administrative fee.
					</p>
					<br />
					<br />
					<h3>Information correction &amp; deletion</h3>
					<br />
					<p>
						If you believe that the information we have about you is incorrect, you are welcome to
						<br />
						contact us so we can update it and keep your data accurate. If at any point you wish for
						SendFiles to delete information about you, you can simply contact us at&nbsp;
						<a href="mailto:info@sendfiles.to">info@sendfiles.to</a>.
					</p>
					<br />
					<br />
					<h3>Changes in Privacy Policy</h3>
					<br />
					<p>
						SendFiles.com reserves the right to change or update this Privacy Policy at any time by posting
						a notice at the Site explaining that we are changing our Privacy Policy.
					</p>
					<br />
					<br />
					<h3>Contacting the Site</h3>
					<br />
					<p>
						We welcome your feedback and we thank you for using SendFiles! If you have additional questions
						or require more information about our Privacy Policy, do not hesitate to contact us through
						email at&nbsp;<a href="mailto:info@sendfiles.to">info@sendfiles.to</a>
					</p>
				</div>
			}
		/>
	);
}

export default withReducer('storage', reducer)(PrivacyPolicyPage);
