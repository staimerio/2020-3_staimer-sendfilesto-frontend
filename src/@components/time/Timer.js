import React, { useState, useEffect } from 'react';
import { /*CircularProgress, */makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => {
	return {
		app: {
			textAlign: 'center',
			alignItems: 'center',
			justifyContent: 'center',
		},
		time: {
			fontSize: '2rem',
			// padding: '2rem'
		}
	};
});

const Timer = props => {
	const classes = useStyles();

	const { secs, status, handleFinish } = props;
	const [seconds, setSeconds] = useState(secs);
	const [isActive, setIsActive] = useState(status);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds - 1);
			}, 1000);
		}
		if (seconds < 1) {
			clearInterval(interval);
			setIsActive(false);
			handleFinish(true);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds, handleFinish]);

	return (
		isActive && (
			<div className={clsx(classes.app)}>
				<div className={clsx(classes.time)}>{seconds}</div>
				{/* <CircularProgress /> */}
			</div>
		)
	);
};

export default Timer;
