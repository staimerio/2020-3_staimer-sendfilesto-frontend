import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		marginLeft: 'auto',
		marginTop: '1rem'
	}
}));

function RegisterAds(props) {
	const classes = useStyles(props);
	return (
		<a href="https://see.kmisln.com/offer?prod=2&ref=5299668" target="_blank" rel="noopener noreferrer">
			<img
				src="/assets/images/register.png"
				alt="Sign up for fast downloads"
				title="Sign up for fast downloads"
				className={classes.root}
			/>
		</a>
	);
}

export default RegisterAds;
