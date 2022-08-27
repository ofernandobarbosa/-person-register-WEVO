import { Request, Response } from 'express';
import userModel from '../models/user.model';

class UserController {

    public async create(req: Request, res: Response): Promise<Response>{
        const user = await userModel.create(req.body);
        const resposta ={
            message: 'Usuário cadastrado com sucesso!',
            _id: user._id,
            nome: user.nome,
        }
        return res.json(resposta);
    }
    public async getAll(req: Request, res: Response): Promise<Response>{
        const user = await userModel.find({ });
        return res.send(user);
    }
    public async update(req: Request, res: Response): Promise<Response>{
        const user = await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {userModel.findOne({ _id: req.params.id })})
        return res.send(user);
    }
    public async delete(req: Request, res: Response): Promise<Response>{
        const user = await userModel.findOneAndDelete({ _id: req.params.id })
        return res.send(user);
    }
}

export default new UserController();