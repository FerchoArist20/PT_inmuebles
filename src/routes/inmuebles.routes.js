import {Router} from "express";
import { getinmuebles, createinmueble, updateinmueble, deleteinmueble, getinmueble } from "../controllers/inmuebles.controller.js";
const router =   Router();

router.get("/inmuebles", getinmuebles); //obtener inmuebles
router.post("/inmuebles", createinmueble); //crear inmueble
router.put("/inmuebles/:id", updateinmueble); // actualizar inmueble
router.delete("/inmuebles/:id", deleteinmueble); //eliminar un inmueble
router.get("/inmuebles/:id", getinmueble); // obtener un solo inmueble

export default router;