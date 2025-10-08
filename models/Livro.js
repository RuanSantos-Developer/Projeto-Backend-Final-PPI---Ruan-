import LivroDAO from '../db/LivroDAO.js';

export default class Livro {

    #liv_id
    #liv_titulo
    #liv_autor
    #cli_id

    constructor(liv_id, liv_titulo, liv_autor, cli_id) {

        this.#liv_id = liv_id;
        this.#liv_titulo = liv_titulo;
        this.#liv_autor = liv_autor;
        this.#cli_id = cli_id;
    }   

    get liv_id() {
        return this.#liv_id;
    }

    set liv_id(liv_id) {
        this.#liv_id = liv_id;
    }

    get liv_titulo() {
        return this.#liv_titulo;
    }

    get liv_autor() {
        return this.#liv_autor;
    }

    get cli_id() {
        return this.#cli_id;
    }

    set cli_id(cli_id) {
        this.#cli_id = cli_id;
    }

    get liv_id() {
        return this.#liv_id;
    }

    set liv_id(liv_id) {
        this.#liv_id = liv_id;
    }

    get liv_titulo() {
        return this.#liv_titulo;
    }

    get liv_autor() {
        return this.#liv_autor;
    }

    get cli_id() {
        return this.#cli_id;
    }

    set cli_id(cli_id) {
        this.#cli_id = cli_id;
    }

    toString() {
        return `
        ID: ${this.#liv_id}\n
        Título: ${this.#liv_titulo}\n
        Autor: ${this.#liv_autor}\n
        Cliente ID: ${this.#cli_id}
        `;
    }

    toJSON() {
        return {
            id: this.#liv_id,
            titulo: this.#liv_titulo,
            autor: this.#liv_autor,
            cliente_id: this.#cli_id
        };
    }

        async gravar() {
            const livroDAO = new LivroDAO();
                await livroDAO.gravar(this);
        }

        async buscarPorId(liv_id) {
            const livroDAO = new LivroDAO();
                return await livroDAO.buscarPorId(liv_id);
        }

        async buscarTodos() {
            const livroDAO = new LivroDAO();
                return await livroDAO.buscarTodos();
        }

        async atualizar() {
            const livroDAO = new LivroDAO();
                await livroDAO.atualizar(this);
        }

        async deletar() {
            const livroDAO = new LivroDAO();
                await livroDAO.deletar(this);
        }
}