import {AlertState} from '~/c/features/alerts/store/types';

export type ModalProps = {
	data: AlertState;
	onClose: (type: string) => void;
};
