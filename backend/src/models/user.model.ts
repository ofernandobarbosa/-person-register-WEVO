import { model, Schema } from "mongoose";
import { UserInterface } from "../interfaces/usuario.interface";

interface UserModel extends UserInterface, Document{}

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required: true,
    },
    sexo:{
        type: String,
        required: true,
    },
    dataNascimento:{
        type: Date,
        required: true,
    }
});

export default model<UserModel>('User', UserSchema);