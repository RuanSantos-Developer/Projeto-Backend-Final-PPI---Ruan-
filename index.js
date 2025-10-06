import express from 'express';
import rotaCliente from './routes/RotaClient.js';
import rotaLivro from './routes/RotaLivro.js';
import cors from 'cors';

const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

app.use('/clientes', rotaCliente);

app.use('/livros', rotaLivro);

app.listen(port, host, () => {
    console.log(`Servidor rodando na porta ${host}:${port}`);
});
