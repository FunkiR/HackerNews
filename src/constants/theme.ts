import {createTheme} from '@mui/material';

const THEME = createTheme({
	palette: {
		mode: 'dark'
	},
	components: {
		MuiSvgIcon: {
			defaultProps: {
				fontSize: 'small'
			}
		},
		MuiIconButton: {
			defaultProps: {
				size: 'small'
			}
		}
	},
	typography: {
		fontSize: 12
	}
});

export default THEME;
