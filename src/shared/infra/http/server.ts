import cors from "cors";
import express, {Request, Response} from "express";
import "dotenv/config";
import routes from "./routes";
import AppError from "@shared/errors/AppError";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.use((err: Error, res: Request, _: NextFunction)=>{
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }
});

const porta = process.env.PORT || 3333;

app.listen(porta, ()=>console.log(`Server is up! on port ${porta}`));