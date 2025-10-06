import { Router } from "express";
import LivroController from "../controllers/LivroController.js";

const rotaLivro = Router();
const livroController = new LivroController();

rotaLivro
.get('/livros', livroController.buscarTodos)

.get('/livros/:liv_id', livroController.buscarPorId)

.post('/livros', livroController.gravar)

.delete('/livros/:liv_id', livroController.deletar)

.put('/livros/:liv_id', livroController.atualizar);

export default rotaLivro;
