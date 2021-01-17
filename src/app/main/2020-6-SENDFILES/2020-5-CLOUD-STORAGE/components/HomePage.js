import React from 'react';
import Uploader from 'app/main/2020-6-SENDFILES/2020-5-CLOUD-STORAGE/forms/Uploader';
import withReducer from 'app/store/withReducer';

import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';

import reducer from '../store/reducers';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
	root: {
		color: '#FFF'
	},
	dark: {
		color: '#000'
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
	}
}));

// const propsStyleTile = {
// 	fontSize: '5.6rem',
// 	fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
// 	fontWeight: '300'
// 	// lineHeight: '0.5'
// };
const propsStyleContainer = {
	textAlign: 'center',
	maxWidth: '860px',
	width: '100%'
};
function HomePage(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('homePage');

	return (
		<FusePageSimple
			classes={{
				root: classes.root,
				wrapper: classes.wrapper
			}}
			// header={
			// 	<div className="p-24">
			// 		<h1>{t('TITLE')}</h1>
			// 	</div>
			// }
			content={
				<div className="p-24 sm:m-auto" style={propsStyleContainer}>
					<img
						src="/assets/images/logos/sendfiles-wallpaper-minify.png"
						alt="Send Files Online"
						title="Send Files Online"
						style={{
							// maxWidth: '110px',
							width: '80%',
							display: 'block',
							marginLeft: 'auto',
							marginRight: 'auto'
							// marginBottom: '5rem'
						}}
					/>
					<h1 style={{ color: '#000' }}>{t('HOME_SUBTITLE')}</h1>
					<Uploader />
				</div>
			}
		/>
	);
}

export default withReducer('storage', reducer)(HomePage);
