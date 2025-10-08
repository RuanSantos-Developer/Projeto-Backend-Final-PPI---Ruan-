import { Router } from "express";
import LivroController from "../controllers/LivroController.js";

const rotaLivro = Router();
const livroController = new LivroController();

rotaLivro
.get('/', livroController.buscarTodos)

.get('/:liv_id', livroController.buscarTodos)

.post('/', livroController.gravar)

.delete('/:liv_id', livroController.deletar)

.put('/:liv_id', livroController.atualizar);

export default rotaLivro;
