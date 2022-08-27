import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router();

// TODO: listar pontos de interesse da BD
router.get('/all-users', userController.getAll);
// TODO: adicionar novo ponto de interesse
router.post('/user', userController.create);
// TODO: atualizar ponto de interesse
router.put('/user/:id', userController.update);
// TODO: apagar ponto de interesse
router.delete('/user/:id', userController.delete);

export default router;