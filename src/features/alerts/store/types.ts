export enum AlertType {
	SUCCESS = 'success',
	INFO = 'info',
	WARNING = 'warning',
	ERROR = 'error'
}

export type Alert = {
	time?: number;
	type: AlertType;
	text: string;
	title?: string;
};

export type AlertState = {
	id: string;
	data: Alert;
};

export type AlertsState = AlertState[];
