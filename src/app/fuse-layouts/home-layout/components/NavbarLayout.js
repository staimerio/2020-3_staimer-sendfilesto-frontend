import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Logo from 'app/fuse-layouts/shared-components/Logo';
const useStyles = makeStyles(theme => ({
	link: {
		textDecoration: 'none !important',
		color: '#000 !important',
		fontWeight: '500'
	}
}));

function NavbarLayout(props) {
	const classes = useStyles(props);

	return (
		<div className="flex flex-1 mx-8">
			<NavLink to="/" className={classes.link}>
				<Logo />
			</NavLink>
		</div>
	);
}

export default React.memo(NavbarLayout);
