import express from 'express';
import { createClient } from '@supabase/supabase-js';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

// using morgan for logs
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabase = createClient(
  'https://logojaerhofyvybmnxvm.supabase.co', // Project URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvZ29qYWVyaG9meXZ5Ym1ueHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MzYwMjksImV4cCI6MjAzMTIxMjAyOX0.zUYra9CmwYNeOmI9ih3uLOXMsntByiOvNReNyg6wXVc' // API Key (Anon Key)
);

app.get('/user', async (req, res) => {
  const { data, error } = await supabase.from('user').select();
  res.send(data);
});


app.listen(3000, () => {
  console.log(`> Ready on http://localhost:3000`);
});
