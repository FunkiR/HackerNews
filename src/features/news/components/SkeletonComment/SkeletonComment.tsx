import {Skeleton, Box} from '@mui/material';
import {memo} from 'react';

export const SkeletonComment = () => (
	<Box mt={1}>
		<Skeleton variant="text" />
		<Skeleton variant="rounded" height={60} />
	</Box>
);

export default memo(SkeletonComment);
