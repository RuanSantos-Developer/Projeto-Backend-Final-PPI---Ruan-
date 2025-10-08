import { Router } from "express";
import ClienteController from "../controllers/ClienteController.js";

const rotaCliente = Router();
const clienteController = new ClienteController();

rotaCliente
.get('/', clienteController.buscarTodos)

.get('/:cli_id', clienteController.buscarTodos)

.post('/', clienteController.gravar)

.delete('/:cli_id', clienteController.deletar)

.put('/:cli_id', clienteController.atualizar);

export default rotaCliente;