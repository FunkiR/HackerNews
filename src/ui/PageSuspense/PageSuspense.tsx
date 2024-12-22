import {Backdrop, CircularProgress} from '@mui/material';
import {Suspense, ReactNode} from 'react';

export default ({children}: {children: ReactNode}) => (
	<Suspense
		fallback={
			<Backdrop open>
				<CircularProgress color="inherit" />
			</Backdrop>
		}
	>
		{children}
	</Suspense>
);
