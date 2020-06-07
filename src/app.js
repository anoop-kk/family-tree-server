import express from 'express';
import cors from 'cors';
import path from 'path';
import indexRoutes from './routes/indexRoutes';

const app = express();
const PORT = process.env.PORT | 4000;

app.use(express.json()) 
app.use(cors());
app.use(express.static(path.join(__dirname, '../pubilc')));
app.use(indexRoutes);
app.listen(PORT, () => {
    console.log(`Application is runnig on port ${PORT}`);
});

export default app