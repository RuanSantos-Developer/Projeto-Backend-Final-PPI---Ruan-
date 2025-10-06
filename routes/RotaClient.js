import { Router } from "express";
import ClienteController from "../controllers/ClienteController.js";

const rotaCliente = Router();
const clienteController = new ClienteController();

rotaCliente
.get('/clientes', clienteController.buscarTodos)

.get('/clientes/:cli_id', clienteController.buscarPorId)

.post('/clientes', clienteController.gravar)

.delete('/clientes/:cli_id', clienteController.deletar)

.put('/clientes/:cli_id', clienteController.atualizar);

export default rotaCliente;