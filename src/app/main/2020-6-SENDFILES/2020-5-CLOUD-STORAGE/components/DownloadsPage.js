import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';

import reducer from '../store/reducers';
import FolderList from '../forms/FolderList';
import * as Actions from '../store/actions/';
import { Typography } from '@material-ui/core';
import FooterFile from '../Ads/FooterFile';
// import RegisterAds from '../Ads/RegisterAds';
import LatestList from '../forms/LatestList';
import SkeletonForm from '@fuse/components/skeleton/SkeletonForm';
// import LosPollos from '../Ads/LosPollos';

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

const propsStyleContainer = {
	textAlign: 'center',
	maxWidth: '1000px',
	width: '100%'
};
function DownloadsPage(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('homePage');
	const params = useParams();
	const dispatch = useDispatch();
	const location = useLocation();

	const { code } = params;

	const noads = Boolean(new URLSearchParams(location.search).get('ads'));
	// const propsContent = {
	// 	description: folderList.description
	// };
	const folderList = useSelector(({ storage }) => storage.uploader.folder);
	const loadingFiles = useSelector(({ storage }) => storage.uploader.loadingFiles);
	useEffect(() => {
		if (!folderList.code) dispatch(Actions.getFolder(code));
	}, [dispatch, folderList.code, code]);

	useEffect(() => {
		return () => dispatch(Actions.clearFolder());
	}, [dispatch]);

	return (
		<FusePageSimple
			classes={{
				root: classes.root,
				wrapper: classes.wrapper
			}}
			header={
				<div className="p-24">
					<Typography variant="body2">{folderList.description || t('NO_DESCRIPTION')}</Typography>
				</div>
			}
			content={
				<>
					<div id="outstreamexo"></div>
					<div className="p-24 sm:m-auto" style={propsStyleContainer}>
						{/*  Ads*/}
						{!noads && (
							<div id="adstop" className={classes.row}>
								{/* <LosPollos /> */}
								<FooterFile />
							</div>
						)}
						{/* <CardOverview {...propsContent} /> */}
						{loadingFiles ? (
							<SkeletonForm />
						) : (
							<>
								<FolderList />
								{/* <RegisterAds /> */}
								<LatestList />
							</>
						)}
					</div>
				</>
			}
		/>
	);
}

export default withReducer('storage', reducer)(DownloadsPage);
