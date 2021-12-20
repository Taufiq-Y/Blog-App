import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

//Components Import
import Router from './routes/route.js';
import ConnectDB from './DB/ConnectDB.js';

const app = express();
app.use(cors())
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Router);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is up and listening to Port ${PORT}`));



ConnectDB();