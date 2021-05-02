import { makeStyles } from '@material-ui/core';
import React from 'react';
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
	},
	images:{
		margin: '10px 0px 0px 20px'
	}
}));
function LosPollos(props) {
	const classes = useStyles(props);
	return (
		<div>
			<a href="/tiktok/sendfiles-download" target="_blank">
				<img
					src="/assets/images/ads/tiktok.gif"
					alt="Tiktok Sendfiles"
					title="Tiktok Sendfiles"
					className={classes.images}
				/>
			</a>
			{/* <a href="/tinder/sendfiles-download" target="_blank">
				<img
					src="/assets/images/ads/tinder.gif"
					className="img-fluid"
					alt="Tinder Sendfiles"
					title="Tinder Sendfiles"
				/>
			</a>
			<a href="/dating/sendfiles-download" target="_blank">
				<img
					src="/assets/images/ads/dating.gif"
					className="img-fluid"
					alt="Dating Sendfiles"
					title="Dating Sendfiles"
				/>
			</a> */}
		</div>
	);
}

export default LosPollos;
