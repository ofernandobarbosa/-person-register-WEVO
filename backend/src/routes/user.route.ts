import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router();

// lista todos os usuarios
router.get('/all-users', userController.getAll);
// cria usuario
router.post('/user', userController.create);
// atualiza usuário
router.put('/user/:id', userController.update);
// deleta usuario
router.delete('/user/:id', userController.delete);

export default router;