import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	const content = `
		<html>
			<head></head>
			<body>
				
				<div id="root"></div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
	res.send(content);
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
