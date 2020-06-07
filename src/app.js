import express from 'express';
import cors from 'cors';
import path from 'path';
import indexRoutes from './routes/indexRouter';
import familyRoutes from './routes/familyRouter';

const app = express();
const PORT = process.env.PORT | 4000;

app.use(express.json()) 
app.use(cors());
app.use(express.static(path.join(__dirname, '../pubilc')));
app.use(indexRoutes);
app.use("/family", familyRoutes);
app.listen(PORT, () => {
    console.log(`Application is runnig on port ${PORT}`);
});

export default app