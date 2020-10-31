import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 *
 * @param loading disable the button and show a loading icon
 * @param loadingText text to show when the loading is true
 *
 */

const useStyles = makeStyles(theme => ({
	fab: {
		
	},
	loading: {
		pointerEvents: 'none'
	},
	progress: {
		color: theme.palette.primary
	},
	progressExtended: {
		marginRight: theme.spacing(1)
	},
	btnContainer: {
		position: 'absolute',
		right: 16,
		bottom: 16,
		[theme.breakpoints.up('sm')]: {
			right: 24,
			bottom: 24
		},
		[theme.breakpoints.up('md')]: {
			right: 32,
			bottom: 32
		},
		zIndex: 9999
	}
}));

const MainLayoutFab = ({ loading, loadingText, onClick, children, ...props }) => {
	const classes = useStyles();

	return (
		<div className={classes.btnContainer}>
			<Fab
				className={clsx(classes.fab, {
					[classes.loading]: loading
				})}
				color="secondary"
				onClick={loading ? undefined : onClick}
				{...props}
			>
				{!loading ? (
					children
				) : props.variant === 'extended' ? (
					<React.Fragment>
						<CircularProgress size={24} className={clsx(classes.progress, classes.progressExtended)} />
						{loadingText}
					</React.Fragment>
				) : (
					<CircularProgress size={24} className={classes.progress} />
				)}
			</Fab>
		</div>
	);
};

MainLayoutFab.defaultProps = {
	loading: false,
	loadingText: '...'
};

MainLayoutFab.propTypes = {
	loading: PropTypes.bool,
	loadingText: PropTypes.string,
	onClick: PropTypes.func
};

export default MainLayoutFab;
