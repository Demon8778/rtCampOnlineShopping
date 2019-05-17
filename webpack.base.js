module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{ targets: { browsers: ['last 2 versions'] } }
							],
							'@babel/preset-react'
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: ['isomorphic-style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
};
