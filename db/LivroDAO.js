import Livro from '../models/Livro.js';
import conectar from '../db/conexao.js';

export default class LivroDAO {

    async gravar(livro) {

        if(livro instanceof Livro){

            const conexao = await conectar();

            const sql = 'INSERT INTO livros (liv_titulo, liv_autor, cli_id) VALUES (?, ?, ?)';

            const values = 
                    [livro.liv_titulo,
                    livro.liv_autor,
                    livro.cli_id];

            await conexao.execute(sql, values);
        }


    }


            async buscarPorId(liv_id) {

                liv_id = liv_id || null;

                const conexao = await conectar();

                const sql = 'SELECT * FROM livros WHERE liv_id = ?';

                const [rows] = await conexao.query(sql, [liv_id]);

                let listaLivros = [];

                for (let row of rows) {
                    const livro = new Livro(
                        row.liv_id,
                        row.liv_titulo,
                        row.liv_autor,
                        row.cli_id
                    );
                    
                    listaLivros.push(livro);
                }

                return listaLivros;



            }



            async buscarTodos() {

                const conexao = await conectar();

                const sql = 'SELECT * FROM livros';

                const [rows] = await conexao.query(sql);

                let listaLivros = [];

                for (let row of rows) {
                    const livro = new Livro(
                        row.liv_id,
                        row.liv_titulo,
                        row.liv_autor,
                        row.cli_id
                    );

                    listaLivros.push(livro);
                }

                return listaLivros;
            }

            async atualizar(livro) {
                if(livro instanceof Livro){

                    const conexao = await conectar();

                    const sql = 'UPDATE livros SET liv_titulo = ?, liv_autor = ?, cli_id = ? WHERE liv_id = ?';

                    const values = 
                            [livro.liv_titulo,
                            livro.liv_autor,
                            livro.cli_id,
                            livro.liv_id];

                    await conexao.execute(sql, values);

                    conexao.release();
                }
            }

            async deletar(livro) {
                if(livro instanceof Livro){

                    const conexao = await conectar();

                    const sql = 'DELETE FROM livros WHERE liv_id = ?';

                    const parametros = [livro.liv_id];

                    await conexao.execute(sql, parametros);
                    conexao.release();
                }
            }


};