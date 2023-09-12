import cors from "cors";
import express, {Request, Response} from "express";
import "dotenv/config";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

const porta = process.env.PORT || 3333;

app.listen(porta, ()=>console.log(`Server is up! on port ${porta}`));