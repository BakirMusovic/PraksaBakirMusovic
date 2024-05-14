import express from 'express';
import { createClient } from '@supabase/supabase-js';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import headerFooter from './routes/headerFooter.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// using morgan for logs
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const supabase = createClient(
  String(process.env.SUPABASE_URL), // Project URL
  String(process.env.SUPABASE_ANON_KEY) // API Key (Anon Key)
);

app.get('/', headerFooter);

app.get('/user', async (req, res) => {
  const { data, error } = await supabase.from('user').select();
  res.send(data);
});

app.listen(3000, () => {
  console.log(`> Ready on http://localhost:3000`);
});
