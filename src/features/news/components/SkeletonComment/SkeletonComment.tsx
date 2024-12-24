import {Skeleton, Box} from '@mui/material';
import {memo} from 'react';

export const SkeletonComment = () => (
	<Box mt={1}>
		<Skeleton variant="text" />
		<Skeleton height={60} variant="rounded" />
	</Box>
);

export default memo(SkeletonComment);
