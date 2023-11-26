import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import express, {Request, Response,NextFunction} from "express";
import "dotenv/config";
import routes from "./routes";
import AppError from "@shared/errors/AppError";

import "@shared/container/providers";

import "@shared/infra/prisma";

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '@shared/infra/http/routes/swagger.json';


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.use((err: Error, req: Request,res:Response, _: NextFunction)=>{
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }

    console.log(err);

    
});




app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument)); 

const porta = process.env.PORT || 8080;

app.listen(porta, ()=>console.log(`Server is up! on port ${porta}`));