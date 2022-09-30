import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarSevidorNoBD } from "./config/db"

/*
cria a aplicação
*/

export const app = express();
/*
libera o acesso aos serviços
*/
app.use(cors());

/*
permite receber e enviar JSON
*/
app.use(express.json());

/*
Configura os logs
*/
app.use(logger('dev'));

/*
Conecta no BD
*/
conectarSevidorNoBD();