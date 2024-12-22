export type Story = {
	id: number;
	descendants: number;
	by: string;
	kids?: number[];
	score: number;
	time: number;
	title: string;
	type: 'story';
	url?: string;
};

export type Comment = Pick<Story, 'id' | 'kids' | 'time'> & {
	by?: string;
	type: 'comment';
	parent: number;
	text?: string;
};
