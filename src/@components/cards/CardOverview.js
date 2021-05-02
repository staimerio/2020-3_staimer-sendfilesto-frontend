import React from 'react';
// import { useTranslation } from 'react-i18next';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => {
	return {
		contentCard: {
			borderRadius: 8,
			width: '100%',
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
		}
	};
});

const CardOverview = props => {
	// const { t } = useTranslation('homePage');
	const classes = useStyles();

	return (
		<Paper elevation={1} className={clsx(classes.contentCard, "m-4")}>
			<p>{props.description}</p>
		</Paper>
	);
};
export default CardOverview;
