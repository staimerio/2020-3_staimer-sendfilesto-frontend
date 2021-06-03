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

function TermOfUsePage(props) {
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
					<Typography variant="body2">{t('TERM_OF_USE')}</Typography>
				</div>
			}
			content={
				<div className="p-24">
					<p>
						These terms of use (the “terms of use”) set out the legal duties of the parties with respect to
						the use of our services and of SendFiles.to (the “site”). Please read them carefully before
						using this website.
					</p>
					<br />
					<p>
						<strong>
							Note: SendFiles.to is NOT associated or affiliated with Google, Google Play or Android in
							any way. Android is a trademark of Google Inc. All the apps &amp; games are property and
							trademark of their respective developer or publisher and for HOME or PERSONAL use ONLY.
							Please be aware that SendFiles.to ONLY SHARE THE ORIGINAL APK FILE FOR FREE APPS. ALL THE
							APK FILE IS THE SAME AS IN GOOGLE PLAY WITHOUT ANY CHEAT, UNLIMITED GOLD PATCH OR ANY OTHER
							MODIFICATIONS.
						</strong>
					</p>
					<br />
					<br />
					<h3>The Agreement</h3>
					<br />
					<p>
						These terms of use are a legal agreement between you (referred to hereinafter as “you”, “your,”
						or “user”) and SendFiles, Inc., including its parent company and all of its subsidiaries and
						affiliated entities (referred to hereinafter as “SendFiles.to”, “we,” “us”, or “our”). These
						terms of use set forth the Terms and Conditions under which you may use our site and any
						services (i.e. search) that may be offered at our site now or in the future (the “services”).
						References to “our site” include, where applicable, the services.
					</p>
					<br />
					<p>You should also review our Privacy Policy before using this site.</p>
					<br />
					<p>
						By using our site you signify your agreement to these terms of use and to the&nbsp;
						<a href="/#/pages/privacy-policy/">Privacy Policy</a>. We may amend these terms of use from time
						to time without notice to you, and you agree to be bound by any such amendments. Therefore, you
						should review these terms of use each time you use our site.
					</p>
					<br />
					<p>
						SendFiles.to only provides general information and nothing on the site should be taken as any
						form of advice, warranty or endorsement. The content, information, articles, links, pictures,
						graphics, and other information contained on this site is for information and entertainment
						purposes only and is not a substitute for professional advice. To learn more, your should review
						our&nbsp;<a href="http://privacy-policy/">Privacy Policy</a>&nbsp;which details important
						information that will help answer questions regarding personal privacy in relation to the use of
						our site.
					</p>
					<br />
					<br />
					<h3>1. Use Restrictions</h3>
					<br />
					<p>
						All information, content and materials contained or offered on our site are our copyrighted
						property or the copyrighted property of our content suppliers, licensors or licensees. All
						trademarks, service marks, trade names, and trade dress are proprietary to us and/or our content
						suppliers, licensors or licensees. Nothing contained on our site confers any license, right,
						title, or interest in or to our intellectual property or any third-party’s intellectual property
						(including but not limited to patents, copyrights and trademarks) in any form by implication,
						estoppel, or otherwise. No content or material from our site may be copied, reproduced,
						republished, uploaded, posted, transmitted or distributed in any way that violates these terms
						of use or applicable law.
					</p>
					<br />
					<p>
						You agree that you will only use our site for your personal use. You must not use our site for
						commercial purposes or in any way that harms us or any other person or entity. You shall not use
						or attempt to use our site for any improper or unlawful purpose including, without limitation,
						to violate any of our policies, procedures, or requirements, or to interfere with, disrupt, or
						breach the security of our site or any of our servers or networks. You are further responsible
						for ensuring that your use of our site does not violate any applicable local, state, federal,
						international or other law, rule, or regulation.
					</p>
					<br />
					<p>
						We are committed to protecting the privacy of children. You should be aware that this site is
						not intended or designed to attract children under the age of 13. We do not collect personally
						identifiable information from any person we actually know is a child under the age of 13.
					</p>
					<br />
					<br />
					<h3>2. Links to Third Party Websites</h3>
					<br />
					<p>
						When you are on our site you could be directed, via hyperlink, to third party websites that are
						beyond our control. For example, our site may provide search results in response to user queries
						or other links from advertisers, sponsors or content partners that may or may not use ads or
						logo(s) to link to their own sites. You acknowledge that when you click on a link that leaves
						our site, the site you will land on may not be controlled by us and different terms of use and
						privacy policies shall apply. By clicking on such links you hereby acknowledge that SendFiles.to
						is not responsible for those websites or their associated content or services. We also reserve
						the right to disable links from any third-party sites, although we are under no obligation to do
						so.
					</p>
					<br />
					<br />
					<h3>3. Electronic Communications</h3>
					<br />
					<p>
						Should you send e-mails to us for any reason, you are communicating with us electronically. By
						doing so, you consent to receive communications from us electronically. We may communicate with
						you by e-mail or by posting notices on our site. You agree that all notices, disclosures,
						agreements and other communications that we provide to you electronically satisfy any legal
						requirement that such communications be in writing.
					</p>
					<br />
					<br />
					<h3>4. Policy Restrictions</h3>
					<br />
					<p>
						You will not impair or cause damage to our site, or any connected network, or otherwise
						interfere with any person or entity’s use or enjoyment of our site in any way, including without
						limitation, using or launching any automated system that accesses our site in a manner that
						sends more request messages to our servers in a given period of time than a human can reasonably
						produce in the same period by using a conventional online web browser. Notwithstanding the
						foregoing, operators of public search engines may use spiders for the sole purpose of creating
						publicly available searchable indices of the materials and our site, but not for caching or
						archiving such materials.
					</p>
					<br />
					<p>
						You agree that you will not take any action that imposes an unreasonable or disproportionately
						large load on the infrastructure of our sites.
					</p>
					<br />
					<br />
					<h3>5. DISCLAIMER</h3>
					<br />
					<p>
						THE SERVICES, INFORMATION, CONTENT AND MATERIALS ON OUR SITE OR PROVIDED THROUGH OUR SITE ARE
						PROVIDED “AS IS” AND WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
						NOT LIMITED TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE;
						NON-INFRINGEMENT; ANY IMPLIED WARRANTY RELATING TO COURSE OF PERFORMANCE, COURSE OF DEALING, OR
						USAGE OF TRADE; AND ANY WARRANTY REGARDING THE SUITABILITY AND QUALITY OF OUR SITE FOR YOUR
						PURPOSES OR EXPECTATIONS. WE DO NOT WARRANT THAT THE FUNCTIONS CONTAINED IN INFORMATION, CONTENT
						AND MATERIALS ON OUR SITE OR THROUGH OUR SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS
						WILL BE CORRECTED, OR THAT OUR SITE OR THE SERVERS THAT MAKE SUCH INFORMATION, CONTENT AND
						MATERIALS AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. MOREOVER, YOU ASSUME THE
						ENTIRE COST OF ALL ASSOCIATED SERVICING, REPAIR OR NECESSARY CORRECTION DUE TO ANY SUCH HARM. WE
						DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF ANY
						INFORMATION, CONTENT, MATERIALS, PRODUCTS OR SERVICES CONTAINED ON OR OFFERED, MADE AVAILABLE
						THROUGH, OR OTHERWISE RELATED IN ANY WAY TO OUR SITE OR ANY THIRD PARTY SITES OR SERVICES LINKED
						TO OR FROM OUR SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, COMPLETENESS, AVAILABILITY,
						RELIABILITY, SAFETY OR OTHERWISE.
					</p>
					<br />
					<p>
						WE CANNOT ENSURE THAT YOU WILL BE SATISFIED WITH ANY PRODUCTS OR SERVICES THAT YOU MAY PURCHASE
						FROM A THIRD PARTY WEBSITE THAT LINKS TO OR FROM OUR SITE OR THIRD PARTY INFORMATION, CONTENT OR
						MATERIALS CONTAINED ON OUR SITE. WE DO NOT ENDORSE ANY OF THE CONTENT, NOR HAVE WE TAKEN ANY
						STEPS TO CONFIRM THE ACCURACY, COMPLETENESS OR RELIABILITY OF, ANY OF THE INFORMATION, CONTENT
						OR MATERIALS CONTAINED ON ANY THIRD PARTY WEBSITE. WE DO NOT MAKE ANY REPRESENTATIONS OR
						WARRANTIES AS TO THE SECURITY OF ANY INFORMATION, CONTENT OR MATERIALS YOU MIGHT BE REQUESTED TO
						GIVE TO ANY THIRD PARTY.
					</p>
					<br />
					<p>
						YOU HEREBY IRREVOCABLY WAIVE ANY CLAIM AGAINST US WITH RESPECT TO (A) INFORMATION, CONTENT AND
						MATERIALS CONTAINED ON OUR SITE OR PROVIDED THROUGH OUR SERVICES, (B) THIRD PARTY WEBSITES OR
						OFFERS PLACED THROUGH THE SITE IN RESPECT TO ANY INFORMATION, CONTENT AND MATERIALS YOU PROVIDE
						TO SUCH THIRD PARTIES.
					</p>
					<br />
					<p>
						SOME JURISDICATIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO SOME OR ALL OF THE
						ABOVE EXCLUSION MAY NOT APPLY TO YOU.
					</p>
					<br />
					<br />
					<h3>6. Indemnification</h3>
					<br />
					<p>
						You hereby agree to indemnify, defend, and hold us, our content providers, licensors, licensees,
						distributors, agents, representatives and other authorized users, and each of the foregoing
						entities’ respective resellers, distributors, service providers and suppliers, and all of the
						foregoing entities’ respective officers, directors, owners, employees, agents, representatives,
						successors and assigns (collectively, the “indemnified parties”) harmless from and against any
						and all losses, damages, liabilities and costs (including, without limitation, settlement costs
						and any legal or other fees and expenses for investigating or defending any actions or
						threatened actions) incurred by the indemnified parties in connection with any claim arising out
						of any breach by you of these terms of use or claims arising directly or indirectly from your
						use of our site.
					</p>
					<br />
					<p>
						We reserve the right, at our own expense, to employ separate counsel and assume the exclusive
						defense and control of any matter otherwise subject to indemnification by you and you hereby
						agree to cooperate with us in the defense of any such claim.
					</p>
					<br />
					<br />
					<h3>7. LIMITATION OF LIABILITY</h3>
					<br />
					<p>
						IN NO EVENT SHALL WE OR ANY OF OUR DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, CONTRACTORS,
						AFFILIATES, SUBSIDIARIES, SUCCESSORS OR ASSIGNS BE LIABLE TO YOU OR ANY OTHER PARTY FOR ANY
						CLAIM FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING
						BUT NOT LIMITED TO LOST PROFITS), OR FOR DAMAGE TO YOUR COMPUTER (INCLUDING BUT NOT LIMITED TO
						HARM RESULTING FROM DOWNLOADING OR ACCESSING INFORMATION OR MATERIAL ON THE INTERNET), OR FOR
						FAILURE TO STORE OR DELIVER, IN A TIMELY OR UNTIMELY MANNER, ANY INFORMATION OR MATERIAL
						DISPLAYED, OR ANY CLAIM IN CONTRACT OR TORT (WHETHER OR NOT ARISING IN WHOLE OR PART OUT OF OUR
						ACT, OMISSION, FAULT, NEGLIGENCE, STRICT LIABILITY, OR PRODUCT LIABILITY) ARISING OUT OF OR IN
						CONNECTION WITH OUR SITE, THE CONTENT OF OUR SITE, OR FROM USERS OF OUR SITE (WHETHER OFFLINE OR
						ONLINE), EVEN IF SUCH DAMAGES ARE FORESEEABLE OR WE HAVE BEEN ADVISED OF OR HAVE CONSTRUCTIVE
						KNOWLEDGE OF THE POSSIBILITY OF SUCH DAMAGES. YOU FURTHER ACKNOWLEDGE AND AGREE THAT NEITHER WE,
						NOR OUR CONTENT PROVIDERS, LICENSORS, LICENSEES, NOR ANY OF THE FOREGOING ENTITIES’ RESPECTIVE
						RESELLERS, DISTRIBUTORS, SERVICE PROVIDERS OR SUPPLIERS ARE RESPONSIBLE OR LIABLE FOR ANY
						INCOMPATIBILITY BETWEEN OUR SITE AND ANY OTHER WEBSITE, BROWSER, SERVICE, SOFTWARE OR HARDWARE.
						THE LIMITATIONS, EXCLUSIONS AND DISCLAIMERS IN THIS SECTION AND ELSEWHERE IN THESE TERMS OF USE
						APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. BECAUSE SOME JURISDICTIONS DO NOT ALLOW
						THE EXCLUSION OR LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, CERTAIN PARTS
						OF THE FOREGOING PARAGRAPH OF THIS SECTION MAY NOT APPLY TO YOU.
					</p>
					<br />
					<p>
						FURTHERMORE, IN NO EVENT SHALL WE OR ANY OF OUR DIRECTORS, OFFICERS, EMPLOYEES, AGENTS,
						CONTRACTORS, AFFILIATES, SUBSIDIARIES, SUCCESSORS OR ASSIGNS BE RESPONSIBLE OR LIABLE FOR THE
						CONTENT, COMPLETENESS, ACCURACY OR LEGALITY OF INFORMATION OR MATERIAL DISPLAYED IN CONNECTION
						WITH OR ARISING OUT OF OUR SITE OR ANY CESSATION, INTERRUPTION OR DELAY IN THE PERFORMANCE OF
						OUR SITE FOR ANY REASON INCLUDING, WITHOUT LIMITATION, CAUSES BEYOND OUR REASONABLE CONTROL SUCH
						AS EARTHQUAKE, FLOOD, FIRE, STORM OR OTHER NATURAL DISASTER, ACT OF GOD, LABOR CONTROVERSY OR
						THREAT THEREOF, CIVIL DISTURBANCE OR COMMOTION, ACT OF TERRORISM, DISRUPTION OF THE PUBLIC
						MARKETS, WAR OR ARMED CONFLICT OR THE INABILITY TO OBTAIN SUFFICIENT MATERIAL, SUPPLIES, LABOR,
						TRANSPORTATION, POWER OR OTHER ESSENTIAL COMMODITY OR SERVICE REQUIRED IN THE CONDUCT OF
						BUSINESS INCLUDING INTERNET ACCESS, OR ANY CHANGE IN OR THE ADOPTION OF ANY LAW, ORDINANCE,
						RULE, REGULATION, ORDER, JUDGMENT OR DECREE. OUR TOTAL LIABILITY TO YOU FOR ANY DAMAGES, LOSSES
						AND CAUSES OF ACTION WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE) OR
						OTHERWISE ARISING OUT OF OR CONNECTED TO OUR SITE SHALL IN NO EVENT EXCEED $100.
					</p>
					<br />
					<h3>8. General Provisions</h3>
					<br />
					<br />
					<p>
						We reserve the right at any time to modify or discontinue, temporarily or permanently, the site
						(or any part thereof) with or without notice. You agree that we shall not be liable to you or to
						any third party for any modification, suspension or discontinuance of the service.
					</p>
					<br />
					<p>
						If any provision of these terms of use, for any reason, be declared void, illegal, invalid, or
						unenforceable in whole or in part, such provision will be severable from all other provisions
						herein and will not affect or impair the validity or enforceability of any other provision of
						these terms of use; provided, however, that a court having jurisdiction may revise such
						provision to the extent necessary to make such provision valid and enforceable.
					</p>
					<br />
					<p>
						The laws of the State of Arkansas, U.S.A. govern all matters arising out of these terms of use,
						without giving effect to any conflicts or choice of laws principles that would require the
						application of the laws of a different jurisdiction. Any dispute or claim arising out of or in
						relation to these terms of use, or the interpretation, making, performance, breach or
						termination thereof, will be finally settled by the courts of Faulkner County, Arkansas, U.S.A.
						and of any federal court located in the eastern district of Arkansas.
					</p>
					<br />
					<p>
						No waiver of any provision of these terms of use by us shall be deemed a further or continuing
						waiver of such provision or any other provision, and our failure to assert any right or
						provision under these terms of use shall not constitute a waiver of such right or provision. Any
						waiver of any provision of these terms of use will be effective only if in writing and signed by
						Inuvo.
					</p>
					<br />
					<p>
						We may immediately terminate these terms of use with respect to you (including your access to
						our site, or any portion thereof) without cause and without notice to you in our sole
						discretion. Upon termination, you must cease use of our site.
					</p>
					<br />
					<p>
						The provisions of these terms of use, which by their nature should survive the termination of
						these terms of use, shall so survive such termination.
					</p>
					<br />
					<p>
						These terms of use along with any other notices, policies, procedures, agreements, and terms and
						conditions on our site contain the entire understanding with respect to your use of our site and
						our relationship with you and such shall supersede all prior understandings and agreements,
						whether written or oral, and all prior dealings.
					</p>
					<br />
					<p>
						You agree that regardless of any statute or law to the contrary, any cause of action against us
						arising out of or related to our site must commence within one (1) year after the cause of
						action accrues or such cause of action shall be permanently barred.
					</p>
					<br />
					<br />
					<h3>9. Questions or Comments</h3>
					<br />
					<p>
						If you have any questions or comments regarding these terms of use, the practices of our site,
						or your dealings with our site, you may contact us at :
					</p>
					<br />
					<p>
						–&nbsp;<a href="mailto:info@sendfiles.to">info@sendfiles.to</a>
					</p>
					<br />
					<p>
						<small>Last Updated: June 3, 2021</small>
					</p>
				</div>
			}
		/>
	);
}

export default withReducer('storage', reducer)(TermOfUsePage);
