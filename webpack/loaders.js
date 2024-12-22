export default {
	rules: [
		{
			exclude: /node_modules/,
			test: /\.tsx?$/,
			loader: 'ts-loader',
			options: {
				transpileOnly: true
			}
		},
		{
			test: /\.(js|ts)x?$/,
			exclude: [/node_modules/],
			use: {
				loader: 'babel-loader',
			}
		}
	]
};
