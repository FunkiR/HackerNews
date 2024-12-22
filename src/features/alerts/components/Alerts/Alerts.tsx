import React, {FC, memo, useCallback} from 'react';
import {useDispatch, useSelector} from '~/store/utils';
import {selectAlerts} from '~/features/alerts/store/selectors';
import {hideAlert} from '~/features/alerts/store/actions';
import {Container} from './styled';
import Alert from './nested/Alert';

export const Alerts: FC = () => {
	const dispatch = useDispatch();
	const alerts = useSelector(selectAlerts);

	const handleClose = useCallback((id: string) => dispatch(hideAlert(id)), []);

	return (
		<Container spacing={2}>
			{alerts.map((alert) => (
				<Alert key={alert.id} data={alert} onClose={handleClose} />
			))}
		</Container>
	);
};

export default memo(Alerts);
