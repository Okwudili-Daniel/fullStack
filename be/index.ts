import express, {Application} from 'express';
import cors from "cors";

const app: Application = express();
const port: number = 4444;

app.use(express.json());
app.use(cors());

const server= app.listen(port, () =>{
    console.log("first server listening on port")
});

process.on("uncaughtException", (err: Error) =>{
    console.log("uncaughtException", err);
    process.exit(1);
})

process.on("unhandledRejection", (reason: any) =>{
    console.log("u")
})