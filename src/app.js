import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import SchoolRoutes from './routes/school.routes.js';

config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', SchoolRoutes);

export default app;
