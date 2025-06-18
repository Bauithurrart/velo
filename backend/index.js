import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './authroutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Prefijo /api para las rutas auth
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

