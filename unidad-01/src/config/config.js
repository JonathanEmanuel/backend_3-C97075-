import dotenv from 'dotenv'

const environmet = 'PRODUCTION';


dotenv.config({        // operador ternario 
    path:environmet==="DEVELOPMENT" ? './.env.development'  : './.env.production'
});


export default {
    port: process.env.PORT,
    mongoURL: process.env.MONGO_URL,
    secret_key: process.env.SECRET_KEY
    //secretKey: 'MiClaveMuySecreta'  // No se hace asi
}

/*
dotenv.config();

export default {
    port: process.env.PORT,
    mongoURL: process.env.MONGO_URL,
    secret_key: process.env.SECRET_KEY
    //secretKey: 'MiClaveMuySecreta'  // No se hace asi
}
*/