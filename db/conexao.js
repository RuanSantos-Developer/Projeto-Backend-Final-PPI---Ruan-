import mysql from 'mysql2/promise';

export default async function conectar() {

    if(global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }

    else {
        global.poolConexoes = mysql.createPool({
            host: 'localhost',
            user: 'root',
            database: 'servico_cadastro',
            password: 'ruan1593572846+',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
        });
        return await global.poolConexoes.getConnection();
    }
}