import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export class App {
    private express: express.Application;
    private port = 3000;
    private PASSWD = '6OZCk6UuyCDoHuhs';

    constructor(){
        this.express = express();
        this.listen();
        this.middlewares();
        this.database();
    }

    public getApp(): express.Application{
        return this.express;
    }

    private middlewares(): void{
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen(): void{
        this.express.listen(this.port, () => {
            console.log(`server listen on http://localhost:${this.port}`)
        });
    }

    private database(): void{
        mongoose.connect(`mongodb+srv://admin:${this.PASSWD}@users.zbh1igk.mongodb.net/?retryWrites=true&w=majority`)
        .then(()=>{
            console.log("database conectado!")
        }).catch((error)=>{
            console.error(error)
        })
    }
}