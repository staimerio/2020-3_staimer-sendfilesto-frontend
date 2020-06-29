import { fuseDark } from '@fuse/colors';
import { lightBlue, red } from '@material-ui/core/colors';

const themesConfig = {
	sendfiles: {
		palette: {
			type: 'light',
			primary: fuseDark,
			black: {
				main: '#000'
			},
			white: {
				main: '#fff'
			},
			secondary: {
				light: lightBlue[400],
				main: lightBlue[600],
				dark: lightBlue[700]
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7',
				blueDark: 'linear-gradient(to right, #0e2866 0%, #192d3e 100%)'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	}
};

export default themesConfig;
