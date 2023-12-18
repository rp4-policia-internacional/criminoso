import { Router } from "express";
import CriminosoController from "../controllers/CriminosoController";
import multer from "multer";
import path from 'path';

const criminosoRoutes =Router();

const controller = new CriminosoController;

criminosoRoutes.get("/h", controller.exibirHistorico);
criminosoRoutes.get("/h/:id", controller.getMemento);
criminosoRoutes.post("/", controller.create);
criminosoRoutes.delete("/:id", controller.delete);
criminosoRoutes.get("/:id", controller.getOne);
criminosoRoutes.get("/", controller.getAll);
criminosoRoutes.put("/", controller.update);



const upload = multer({dest: path.join(__dirname, '../../../uploads')});
criminosoRoutes.post('/upload', upload.single('imagem'), (request, response) =>{
    try {
        console.log('Arquivo carregado:', request.file);
        response.status(200).send('Upload bem-sucedido');
    } catch (error) {
        console.error('Erro durante o upload:', error);
        response.status(500).send('Erro durante o upload do arquivo');
    }
})

export default  criminosoRoutes;