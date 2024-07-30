import express from 'express';
import cors from 'cors';
import multer from 'multer';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';
const upload = multer({ dest: 'uploads/' });

app.use(cors({ optionsSuccessStatus: 200 }));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
	const response = {
		name: req.file.originalname,
		type: req.file.mimetype,
		size: req.file.size
	}
	res.json(response);
});

app.listen(port, host, () => console.log(`The app is listening on ${host}:${port}`));
