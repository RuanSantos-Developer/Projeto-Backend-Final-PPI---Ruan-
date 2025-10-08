import Cliente from '../models/Cliente.js';
import conectar from '../db/conexao.js';

export default class ClienteController {

            gravar = (req, res) => {
                if(req.method === 'POST' && req.is('application/json')){
                    const dados = req.body;
                    if(dados.cli_cpf && dados.cli_nome && dados.cli_email && dados.cli_telefone){
                        const cliente = new Cliente(
                            dados.cli_cpf,
                            dados.cli_nome,
                            dados.cli_email,
                            dados.cli_telefone
                        );
                        cliente.gravar().then(()=>{
                            res.status(200).json({
                                status: true,
                                "message": 'Cliente gravado com sucesso'
                            });
            
                        }).catch((err)=>{
                            res.status(500).json({
                                status: false,
                                "message": 'Erro ao gravar o cliente',
                            });
                        });
                    }
                }
                else {
                    res.status(400).json({
                        status: false,
                        "message": 'Requisição inválida',
                    });
                }
            };



            buscarTodos = (req, res) => {
            if (req.method === 'GET') {

            const id = req.params.cli_id;
            const cliente = new Cliente();

            if (id){

                cliente.buscarPorId(id)
                .then((listaclientes)=>{
                    if(listaclientes.length > 0){

                    res.status(200).json({
                        status: true,
                        "message": 'Cliente consultado com sucesso',
                        "Clientes": listaclientes
                    });
                    }
                })

                .catch(()=>{
                    res.status(500).json({
                        status: false,
                        "message": 'Erro ao consultar o cliente',
                    });
                });

            }
            else{

                cliente.buscarTodos()
                .then((listaClientes)=>{
                    res.status(200).json({
                        status: true,
                        "message": 'Clientes consultados com sucesso',
                        "clientes": listaClientes
                    });
                })
                .catch(()=>{
                    res.status(500).json({
                        status: false,
                        "message": 'Erro ao consultar os clientes',
                    });
                });

            }  
        }
        else{
            res.status(400).json({
                status: false,
                "message": 'Requisição inválida',
            });
        }
        }


            atualizar = (req, res) => {

            if((req.method === 'PUT' || req.method === 'PATCH' ) && req.is('application/json')){
                const dados = req.body;
                const id = req.params.cli_id;
                if(id && dados.cli_nome && dados.cli_email && dados.cli_telefone){
                    const cliente = new Cliente(
                        id,
                        dados.cli_nome,
                        dados.cli_email,
                        dados.cli_telefone
                    );
                    cliente.atualizar().then(()=>{
                        res.status(200).json({
                            status: true,
                            "message": 'Cliente Atualizado com sucesso'
                        });

                    }).catch(()=>{
                        res.status(400).json({
                            status: false,
                            "message": 'Erro ao Atualizar o cliente',
                        });
                    });

                }
            }
            else {
                res.status(400).json({
                    status: false,
                    "message": 'Requisição inválida',
                });
            }

        }


            deletar = (req, res) => {
                if(req.method === 'DELETE'){
                const id = req.params.cli_id;
                if(id){
                    const cliente = new Cliente();
                    cliente.buscarPorId(id)
                    .then((lista) => {
                        const cliente = lista[0];
                        if (cliente) {
                            cliente.deletar()
                                .then(() => {
                                    res.status(200).json({
                                        status: true,
                                        "message": 'Cliente deletado com sucesso'
                                    });
                                })

                        } else {
                            res.status(404).json({
                                status: false,
                                "message": 'Cliente não encontrado',
                            });
                        }
                    })
                    .catch(() => {
                        res.status(500).json({
                            status: false,
                            "message": 'Erro ao deletar o cliente',
                        });
                    });
                }
                else {
                    res.status(400).json({
                        status: false,
                        "message": 'Requisição inválida\nAdicione o ID para deletar o cliente',
                    });
                }
            }
        }



};      
