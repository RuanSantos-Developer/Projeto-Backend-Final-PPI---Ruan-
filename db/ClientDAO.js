import Cliente from '../models/Cliente.js';
import conectar from '../db/conexao.js';

export default class ClienteDAO {

    async gravar(cliente) {
        if(cliente instanceof Cliente){

            const conexao = await conectar();

            const sql = 'INSERT INTO cliente (cli_cpf, cli_nome, cli_email, cli_telefone) VALUES (?, ?, ?)';

            const values = [cliente.cli_cpf,cliente.cli_nome, cliente.cli_email, cliente.cli_telefone];

            await conexao.execute(sql, values);
        }
    }

    async buscarPorId(cli_id) {

        const conexao = await conectar();

        const sql = 'SELECT * FROM cliente WHERE cli_id = ?';

        const [rows] = await conexao.query(sql, [cli_id]);

        let listaClientes = [];

        for (let row of rows) {
            const cliente = new Cliente(
                row.cli_id,
                row.cli_cpf,
                row.cli_nome,
                row.cli_email,
                row.cli_telefone
            );
            listaClientes.push(cliente);
        }

        return listaClientes;
    }

    async buscarTodos() {

        const conexao = await conectar();

        const sql = 'SELECT * FROM cliente';

        const [rows] = await conexao.query(sql);

        let listaClientes = [];

        for (let row of rows) {
            const cliente = new Cliente(
                row.cli_id,
                row.cli_cpf,
                row.cli_nome,
                row.cli_email,
                row.cli_telefone
            );

            listaClientes.push(cliente);
        }

        return listaClientes;
    }

    async atualizar(cliente) {
        if(cliente instanceof Cliente){

            const conexao = await conectar();

            const sql = 'UPDATE cliente SET cli_nome = ?, cli_email = ?, cli_telefone = ? WHERE cli_id = ?';

            const values = [cliente.cli_nome, cliente.cli_email, cliente.cli_telefone, cliente.cli_id];

            await conexao.execute(sql, values);

            conexao.release();
        }
    }

    async deletar(cliente) {
        if(cliente instanceof Cliente){

            const conexao = await conectar();

            const sql = 'DELETE FROM cliente WHERE cli_id = ?';

            const parametros = [cliente.cli_id];

            await conexao.execute(sql, parametros);
            conexao.release();
        }
    }
};