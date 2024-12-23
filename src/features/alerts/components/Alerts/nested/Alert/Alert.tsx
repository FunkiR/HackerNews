import React, {FC, memo, useCallback, useEffect, useRef} from 'react';
import {AlertTitle, Slide} from '@mui/material';
import {Alert as StyledAlert} from './styled';
import {ModalProps} from './types';

export const Alert: FC<ModalProps> = ({data, onClose}) => {
	const {data: alert, id} = data;
	const {text, time = 3000, title, type} = alert;
	const timeoutIdRef = useRef<NodeJS.Timeout>(undefined);

	useEffect(() => {
		timeoutIdRef.current = setTimeout(() => onClose(id), time);

		return () => clearTimeout(timeoutIdRef.current);
	}, [id, onClose, time]);

	const handleClose = useCallback(() => onClose(id), [onClose, id]);

	const handleMouseEnter = () => clearTimeout(timeoutIdRef.current);

	return (
		<Slide direction="left" in mountOnEnter unmountOnExit>
			<StyledAlert onClose={handleClose} onMouseEnter={handleMouseEnter} severity={type} time={time / 1000} type={type}>
				{title && <AlertTitle>{title}</AlertTitle>}
				{text}
			</StyledAlert>
		</Slide>
	);
};

export default memo(Alert);
