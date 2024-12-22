import {Global, css} from '@emotion/react';
import {Theme} from '@mui/material';
import {memo} from 'react';

export const GlobalStyles = ({theme}: {theme: Theme}) => (
	<Global
		styles={css`
			body {
				height: 100%;
				padding: 10px;
				margin: 0;
			}

			html,
			#root {
				height: 100%;
			}

			a:link {
				color: ${theme.palette.primary.main};
				background-color: transparent;
			}
		`}
	/>
);

export default memo(GlobalStyles);
