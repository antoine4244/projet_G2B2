import express from 'express';
import createRoutes from './routes';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static('src/public'));
app.use('/connect',createRoutes());
app.use((req, res) => {res.status(404).send("Page non trouvée !")});

app.listen(port,()=> console.log(`Port = ${port}`));