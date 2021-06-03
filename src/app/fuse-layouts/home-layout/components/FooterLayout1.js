import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function FooterLayout1(props) {
	const footerTheme = useSelector(({ fuse }) => fuse.settings.footerTheme);

	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar id="fuse-footer" className="relative z-10" color="default">
				<Toolbar className="px-16 py-0 flex items-center">
					<NavLink to="/pages/cookie-policy" className={'m-6'}>
						<Typography className="normal-case font-600 flex">Cookie Privacy</Typography>
					</NavLink>

					<NavLink to="/pages/dmca" className={'m-6'}>
						<Typography className="normal-case font-600 flex">DMCA</Typography>
					</NavLink>

					<NavLink to="/pages/privacy-policy" className={'m-6'}>
						<Typography className="normal-case font-600 flex">Privacy Privacy</Typography>
					</NavLink>

					<NavLink to="/pages/term-of-use" className={'m-6'}>
						<Typography className="normal-case font-600 flex">Term of use</Typography>
					</NavLink>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(FooterLayout1);
