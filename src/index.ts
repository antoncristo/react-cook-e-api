import express from 'express';
import { config as envConfig } from 'dotenv';
import cors from 'cors';

import { appRouter } from 'api';

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 3300;

envConfig();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', appRouter);

// not found/bad request/error handling section
app.use('*', (req, res) => {
	res.send('Not Found').status(404);
});

app.listen(SERVER_PORT, '0.0.0.0', () =>
	console.log('[Server][Connection]: listening on port', SERVER_PORT)
);
