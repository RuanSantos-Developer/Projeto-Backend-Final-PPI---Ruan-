import ClienteDAO from '../db/ClientDAO.js';

export default class Cliente {

    #cli_id
    #cli_cpf
    #cli_nome
    #cli_email
    #cli_telefone

    constructor(cli_id, cli_cpf, cli_nome, cli_email, cli_telefone) {

        this.#cli_id = cli_id;
        this.#cli_cpf = cli_cpf;
        this.#cli_nome = cli_nome;
        this.#cli_email = cli_email;
        this.#cli_telefone = cli_telefone;
    }   

    get cli_id() {
        return this.#cli_id;
    }

    set cli_id(cli_id) {
        this.#cli_id = cli_id;
    }

    get cli_cpf() {
        return this.#cli_cpf;
    }

    set cli_cpf(cli_cpf) {
        this.#cli_cpf = cli_cpf;
    }

    get cli_nome() {
        return this.#cli_nome;
    }

    set cli_nome(cli_nome) {
        this.#cli_nome = cli_nome;
    }

    get cli_email() {
        return this.#cli_email;
    }

    set cli_email(cli_email) {
        this.#cli_email = cli_email;
    }

    get cli_telefone() {
        return this.#cli_telefone;
    } 

    set cli_telefone(cli_telefone) {
        this.#cli_telefone = cli_telefone;
    }

    toString() {
        return `
        ID: ${this.#cli_id}\n
        CPF: ${this.#cli_cpf}\n
        Nome: ${this.#cli_nome}\n
        Email: ${this.#cli_email}\n
        Telefone: ${this.#cli_telefone}
        `;
    }

    toJSON() {
        return {
            id: this.#cli_id,
            cpf: this.#cli_cpf,
            nome: this.#cli_nome,
            email: this.#cli_email,
            telefone: this.#cli_telefone
        };
    }

        async gravar() {
            const clienteDAO = new ClienteDAO();
                await clienteDAO.gravar(this);
        }

        async buscarPorId(cli_id) {
            const clienteDAO = new ClienteDAO();
                return await clienteDAO.buscarPorId(cli_id);
        }

        async buscarTodos() {
            const clienteDAO = new ClienteDAO();
                return await clienteDAO.buscarTodos();
        }

        async atualizar() {
            const clienteDAO = new ClienteDAO();
                await clienteDAO.atualizar(this);
        }

        async deletar() {
            const clienteDAO = new ClienteDAO();
                await clienteDAO.deletar(this);
        }
}