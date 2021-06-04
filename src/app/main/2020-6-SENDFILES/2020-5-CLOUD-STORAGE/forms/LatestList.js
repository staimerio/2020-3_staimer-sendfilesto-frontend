import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';

import * as Actions from '../store/actions';
import { getSizeFromBytes, getAvatarFromStr } from 'app/utils';
import CardSuccessFile from '@components/cardList/CardSuccessFile';
import { useHistory } from 'react-router';

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
		},
		latestFiles: {
			margin: theme.spacing(4, 0, 2),
			color: '#000'
		}
	};
});

const LatestList = props => {
	const { t } = useTranslation('homePage');
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const filesList = useSelector(({ storage }) => storage.uploader.filesList);

	useEffect(() => {
		dispatch(Actions.getLatestFiles());
	}, [dispatch]);

	const showFolderAction = item => {
		return [
			{
				key: `delete-${item.file}`,
				'data-value': `Download: ${item.filename}`,
				icon: 'folder_24px',
				to: `/`,
				edge: 'end',
				'aria-label': 'delete',
				component: Link,
				onClick: () => showFolder(item)
			}
		];
	};

	const showFolder = file => {
		history.push(`/downloads/${file.code}`);
	};

	const getSuccessFiles = files => {
		const filesList = files.map(file => {
			const createdAt = file.created_at ? `${file.created_at} |` : '';
			const item = {
				key: `success-${file.code}`,
				title: file.filename,
				subtitle: `${createdAt} ${getSizeFromBytes(file.size)}`,
				avatar: getAvatarFromStr(file.extension),
				actions: showFolderAction(file)
			};
			return item;
		});
		return filesList;
	};

	const propsFiles = {
		successList: getSuccessFiles(filesList)
	};

	return (
		<>
			<Typography variant="h4" className={classes.latestFiles}>
				{t('LATEST_FILES')}
			</Typography>
			<Paper elevation={1} className={classes.contentCard}>
				<List className={classes.overflow}>
					{propsFiles.successList.map(file => (
						<CardSuccessFile {...file} />
					))}
				</List>
			</Paper>
		</>
	);
};
export default LatestList;
