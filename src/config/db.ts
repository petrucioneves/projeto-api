import  {createConnection} from 'typeorm'

export const conectarSevidorNoBD = async () =>{
    const conexao = await createConnection();
    console.log(`App conectado ao database ${conexao.options.database}`);
    process.on('SIGINT', () => {
        conexao.close().then(() => {
            console.log('Conexao com o DB fechada');
        });
    });
};