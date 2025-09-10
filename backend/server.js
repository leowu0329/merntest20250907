import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import products from './data/products.js';
const port = process.env.PORT || 5000;

const app = express();

// 簡化 CORS 設定 - 允許所有來源
app.use(cors());

// 或者更安全的設定
app.use(cors({
  origin: true, // 允許所有來源
  credentials: true
}));


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
