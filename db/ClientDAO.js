import Cliente from '../models/Cliente.js';
import conectar from '../db/conexao.js';

export default class ClienteDAO {

    async gravar(cliente) {
        if(cliente instanceof Cliente){

            const conexao = await conectar();

            const sql = 'INSERT INTO clientes (cli_nome, cli_email) VALUES (?, ?)';

            const values = [cliente.cli_nome, cliente.cli_email];

            await conexao.execute(sql, values);
        }
    }

    async buscarPorId(cli_id) {

        const conexao = await conectar();

        const sql = 'SELECT * FROM clientes WHERE cli_id = ?';

        const [rows] = await conexao.query(sql, [cli_id]);

        let listaClientes = [];

        for (let row of rows) {
            const cliente = new Cliente(
                row.cli_id,
                row.cli_nome,
                row.cli_email
            );
            listaClientes.push(cliente);
        }

        return listaClientes;
    }

    async buscarTodos() {

        const conexao = await conectar();

        const sql = 'SELECT * FROM clientes';

        const [rows] = await conexao.query(sql);

        let listaClientes = [];

        for (let row of rows) {
            const cliente = new Cliente(
                row.cli_id,
                row.cli_nome,
                row.cli_email
            );

            listaClientes.push(cliente);
        }

        return listaClientes;
    }

    async atualizar(cliente) {
        if(cliente instanceof Cliente){

            const conexao = await conectar();

            const sql = 'UPDATE clientes SET cli_nome = ?, cli_email = ? WHERE cli_id = ?';

            const values = [cliente.cli_nome, cliente.cli_email, cliente.cli_id];

            await conexao.execute(sql, values);

            conexao.release();
        }
    }

    async deletar(cliente) {
        if(cliente instanceof Cliente){

            const conexao = await conectar();

            const sql = 'DELETE FROM clientes WHERE cli_id = ?';

            const parametros = [cliente.cli_id];

            await conexao.execute(sql, parametros);
            conexao.release();
        }
    }
};