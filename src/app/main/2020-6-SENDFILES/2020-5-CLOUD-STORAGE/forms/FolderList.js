import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Paper, Divider, Link, Typography, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';
import LinearProgressWithLabel from '@components/LinearProgressWithLabel';
import CardErrorFile from '@components/cardList/CardErrorFile';

import * as Actions from '../store/actions/';
import { getSizeFromBytes, getAvatarFromStr } from 'app/utils';
import CardSuccessFile from '@components/cardList/CardSuccessFile';
import Timer from '@components/time/Timer';

const useStyles = makeStyles(theme => {
	// console.log(theme.palette)
	return {
		contentCard: {
			borderRadius: 8,
			width: '100%'
		},
		header: {
			display: 'flex',
			justifyContent: 'center',
			borderBottom: `1px solid ${theme.palette.border}`,
			padding: 8
		},
		input: {
			display: 'none'
		},
		chip: {
			margin: theme.spacing(1)
		},
		content: {
			padding: theme.spacing(1),
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(2)
			}
		},
		typography: {
			color: theme.palette.primary
		},
		root: {
			flexGrow: 1,
			maxWidth: 950
		},
		demo: {
			backgroundColor: theme.palette.background.paper
		},
		title: {
			margin: theme.spacing(4, 0, 2)
		},
		overflow: {
			flexGrow: 1,
			maxWidth: 950,
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			marginRight: '2rem'
		}
	};
});

const FolderList = props => {
	const { errorList, successList } = props;

	const { t } = useTranslation('homePage');
	const classes = useStyles();
	const dispatch = useDispatch();

	const [progress, setProgress] = React.useState(0);
	const [checking, setChecking] = React.useState(false);
	const [timer, setTimer] = React.useState(false);

	const getDownloadAction = item => {
		return [
			{
				key: `delete-${item.code}`,
				'data-value': `Download: ${item.filename}`,
				icon: 'cloud_download_24px',
				to: '/',
				edge: 'end',
				'aria-label': 'delete',
				component: Link,
				onClick: () => downloadFile(item)
			}
		];
	};

	const downloadFile = file => {
		setTimer(true);
		dispatch(Actions.downloadFile(file, setProgress, setChecking, setTimer));
	};

	const getSuccessFiles = files => {
		const filesList = files.map(file => {
			const createdAt = file.created_at ? `${file.created_at} |` : '';
			const item = {
				key: `success-${file.code}`,
				title: file.filename,
				subtitle: `${createdAt} ${getSizeFromBytes(file.size)} | ${file.mimetype}`,
				avatar: getAvatarFromStr(file.extension),
				actions: getDownloadAction(file)
			};
			return item;
		});
		return filesList;
	};
	const getErrorFiles = files => {
		const filesList = files.map(file => {
			const item = {
				key: `error-${file.code}`,
				title: file.filename,
				subtitle: file.msg,
				avatar: getAvatarFromStr('error')
			};
			return item;
		});
		return filesList;
	};

	const propsFiles = {
		successList: getSuccessFiles(successList),
		errorList: getErrorFiles(errorList)
	};
	const propsTimer = {
		secs: 5,
		status: true,
		handleFinish: setChecking
	};

	const clearProgress = progress => {
		if (progress === 100) setProgress(0);
		return null;
	};

	return (
		<Paper elevation={1} className={classes.contentCard}>
			{timer ? <Timer {...propsTimer}></Timer> : null}
			{checking ? (
				<Fragment>
					<Typography className="p-4">{t('CHECKING_LINK')}</Typography>
					<LinearProgress />
				</Fragment>
			) : null}
			{progress && progress !== 100 ? (
				<Fragment>
					<Typography className="p-4">{t('DOWNLOADING')}</Typography>
					<LinearProgressWithLabel value={progress} />
				</Fragment>
			) : (
				clearProgress(progress)
			)}
			<List className={classes.overflow}>
				{propsFiles.successList.map(file => (
					<CardSuccessFile {...file} />
				))}
			</List>
			{propsFiles.successList.length && propsFiles.errorList.length ? <Divider /> : null}
			<List className={classes.overflow}>
				{propsFiles.errorList.map(file => (
					<CardErrorFile {...file} />
				))}
			</List>
		</Paper>
	);
};
export default FolderList;
