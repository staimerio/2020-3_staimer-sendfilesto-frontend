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

function DMCAPage(props) {
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
					<Typography variant="body2">{t('DMCA')}</Typography>
				</div>
			}
			content={
				<div className="p-24">
					<p>
						<strong>SendFiles.to</strong> respects the intellectual property of others.{' '}
						<strong>SendFiles.to</strong> takes matters of Intellectual Property very seriously and is
						committed to meeting the needs of content owners while helping them manage publication of their
						content online.
					</p>
					<br />
					<p>
						It should be noted that <strong>SendFiles.to</strong> is a simple search engine of videos
						available at a wide variety websites.
					</p>
					<br />
					<p>
						If you believe that your copyrighted work has been copied in a way that constitutes copyright
						infringement and is accessible on this site, you may notify our copyright agent, as set forth in
						the Digital Millennium Copyright Act of 1998 (DMCA). For your complaint to be valid under the
						DMCA, you must provide the following information when providing notice of the claimed copyright
						infringement:
					</p>
					<br />
					<p>
						A physical or electronic signature of a person authorized to act on behalf of the copyright
						owner Identification of the copyrighted work claimed to have been infringed
					</p>
					<p>
						Identification of the material that is claimed to be infringing or to be the subject of the
						infringing activity and that is to be removed{' '}
					</p>
					<p>
						Information reasonably sufficient to permit the service provider to contact the complaining
						party, such as an address, telephone number, and, if available, an electronic mail address
					</p>
					<p>
						A statement that the complaining party “in good faith believes that use of the material in the
						manner complained of is not authorized by the copyright owner, its agent, or law”
					</p>
					<p>
						A statement that the “information in the notification is accurate”, and “under penalty of
						perjury, the complaining party is authorized to act on behalf of the owner of an exclusive right
						that is allegedly infringed”
					</p>
					<br />
					<p>
						The above information must be submitted as a written, faxed or emailed notification to the
						following Designated Agent:
					</p>
					<br />
					<p>Attn: DMCA Office.</p>
					<p>Contact Us : http://www.watchdogsecurity.online</p>
					<br />
					<p>
						WE CAUTION YOU THAT UNDER FEDERAL LAW, IF YOU KNOWINGLY MISREPRESENT THAT ONLINE MATERIAL IS
						INFRINGING, YOU MAY BE SUBJECT TO HEAVY CIVIL PENALTIES. THESE INCLUDE MONETARY DAMAGES, COURT
						COSTS, AND ATTORNEYS FEES INCURRED BY US, BY ANY COPYRIGHT OWNER, OR BY ANY COPYRIGHT OWNER’S
						LICENSEE THAT IS INJURED AS A RESULT OF OUR RELYING UPON YOUR MISREPRESENTATION. YOU MAY ALSO BE
						SUBJECT TO CRIMINAL PROSECUTION FOR PERJURY.
					</p>
					<br />
					<p>
						This information should not be construed as legal advice, for further details on the information
						required for valid DMCA notifications, see 17 U.S.C. 512(c)(3).
					</p>
				</div>
			}
		/>
	);
}

export default withReducer('storage', reducer)(DMCAPage);
