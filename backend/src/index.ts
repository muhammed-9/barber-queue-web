import express from 'express';
import { config } from './config/config';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
