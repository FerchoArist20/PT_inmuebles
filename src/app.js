import express from "express";
import inmueblesRoutes from "./routes/inmuebles.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use(inmueblesRoutes)

export default app;
