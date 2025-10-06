import Livro from '../models/Livro.js';

export default class LivroController {

    gravar(req, res) {
        if (req.method === 'POST' && req.is('application/json')) {
            const dados = req.body;
            if (dados.liv_id && dados.liv_autor && dados.liv_titulo && dados.cli_id) {
                const livro = new Livro(
                    dados.liv_id,
                    dados.liv_autor,
                    dados.liv_titulo,
                    dados.cli_id
                );
                livro.gravar().then(() => {
                    res.status(200).json({
                        status: true,
                        "message": 'Livro gravado com sucesso'
                    });

                }).catch((err) => {
                    res.status(500).json({
                        status: false,
                        "message": 'Erro ao gravar o livro',
                        "error": err.message
                    });
                });
            }
        }
        else {
            res.status(400).json({
                status: false,
                "message": 'Requisição inválida',
                "error": err?.message
            });
        }
    };

    buscarTodos(req, res) {
        if (req.method === 'GET') {

            const id = req.params.liv_id;
            const livro = new Livro();

            if (id) {

                livro.buscarPorId(id)
                    .then((listaLivros) => {
                        if (listaLivros.length > 0) {
                            res.status(200).json({
                                status: true,
                                "message": 'Livro consultado com sucesso',
                                "livros": listaLivros
                            });
                        }
                    })

                    .catch((err) => {
                        res.status(500).json({
                            status: false,
                            "message": 'Erro ao consultar o livro',
                            "error": err.message
                        });
                    });

            }
            else {

                livro.buscarTodos()
                    .then((listaLivros) => {
                        res.status(200).json({
                            status: true,
                            "message": 'Livros consultados com sucesso',
                            "livros": listaLivros
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({
                            status: false,
                            "message": 'Erro ao consultar os livros',
                            "error": err.message
                        });
                    });

            }
        }
        else {
            res.status(400).json({
                status: false,
                "message": 'Requisição inválida',
                "error": err?.message
            });
        }
    }

    atualizar(req, res) {

        if ((req.method === 'PUT' || req.method === 'PATCH') && req.is('application/json')) {
            const dados = req.body;
            const id = req.params.liv_id;
            if (id && dados.liv_autor && dados.liv_titulo && dados.cli_id) {
                const livro = new Livro(
                    id,
                    dados.liv_autor,
                    dados.liv_titulo,
                    dados.cli_id
                );
                livro.atualizar().then(() => {
                    res.status(200).json({
                        status: true,
                        "message": 'Livro atualizado com sucesso'
                    });

                }).catch((err) => {
                    res.status(400).json({
                        status: false,
                        "message": 'Erro ao atualizar o livro',
                        "error": err.message
                    });
                });

            }
        }
        else {
            res.status(400).json({
                status: false,
                "message": 'Requisição inválida',
                "error": err?.message
            });
        }

    }

    deletar(req, res) {
        if (req.method === 'DELETE') {
            const id = req.params.liv_id;
            if (id) {
                const livro = new Livro();
                livro.buscarPorId(id)
                    .then((lista) => {
                        const livro = lista[0];
                        if (livro) {
                            livro.deletar()
                                .then(() => {
                                    res.status(200).json({
                                        status: true,
                                        "message": 'Livro deletado com sucesso'
                                    });
                                })

                        } else {
                            res.status(404).json({
                                status: false,
                                "message": 'Livro não encontrado',
                                "error": err?.message
                            });
                        }
                    })
                    .catch((err) => {
                        res.status(500).json({
                            status: false,
                            message: 'Erro ao deletar o livro',
                            "error": err.message
                        });
                    });
            }
            else {
                res.status(400).json({
                    status: false,
                    message: 'Requisição inválida\nAdicione o ID para deletar o livro',
                    "error": err?.message
                });
            }
        }
    }
};