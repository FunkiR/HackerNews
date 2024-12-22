import {keyframes} from '@emotion/react';
import {Alert as MuiAlert, styled} from '@mui/material';
import {AlertType} from '~/c/features/alerts/store';

const changeBorders = (color: string) => keyframes`
  0% {
    border: 5px solid white;
    border-left: 5px solid ${color};
  }
  25% {
    border: 5px solid white;
    border-left: 5px solid ${color};
  }
  25.02% {
    border: 5px solid white;
    border-left: 5px solid ${color};
    border-bottom: 5px solid ${color};
  }
  50% {
    border: 5px solid white;
    border-left: 5px solid ${color};
    border-bottom: 5px solid ${color};
  }
  50.02% {
    border: 5px solid white;
    border-left: 5px solid ${color};
    border-bottom: 5px solid ${color};
    border-right: 5px solid ${color};
  }
  75% {
    border: 5px solid white;
    border-left: 5px solid ${color};
    border-bottom: 5px solid ${color};
    border-right: 5px solid ${color};
  }
  75.02% {
    border: 5px solid ${color};
  }
  100% {
    border: 5px solid ${color};
  }
`;

const moveDown = keyframes`
  0% {
    height: calc(100% + 10px);
    width: 5px;
    bottom: -5px;
    left: -5px;
  }
  25% {
    height: 5px;
    width: 5px;
    bottom: -5px;
    left: -5px;
  }
  25.01% {
    height: 5px;
    width: calc(100% + 10px);
    bottom: -5px;
    left: -5px;
  }
  50% {
    height: 5px;
    width: 0;
    left: 100%;
    bottom: -5px;
  }
  50.01% {
    height: calc(100% + 10px);
    width: 5px;
    left: 100%;
    bottom: -5px;
  }
  75% {
    height: 0;
    width: 5px;
    left: 100%;
    bottom: 100%;
  }
  75.01% {
    height: 5px;
    width: calc(100% + 10px);
    left: 0;
    bottom: 100%;
  }
  99.01% {
    height: 5px;
    width: 0;
    left: 0;
    bottom: 100%;
  }
`;

export const Alert = styled(MuiAlert)<{time: number; type: AlertType}>`
	border: 5px solid ${({theme, type}) => theme.palette[type].light};
	animation: ${({theme, type}) => changeBorders(theme.palette[type].light)} ${(props) => props.time}s linear;
	position: relative;

	&::after {
		width: 5px;
		height: 0;
		background-color: white;
		position: absolute;
		bottom: 0;
		left: -5px;
		z-index: 1;
		animation: ${moveDown} ${(props) => props.time}s linear;
		animation-fill-mode: forwards;
		content: '';
		display: inline-block;
	}
`;
