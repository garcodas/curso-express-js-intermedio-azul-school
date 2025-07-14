import express from "express";
import { login, register } from "../controllers/authController.js";

// Acá se crea el router
const router = express.Router();

// Acá se crean las rutas del router

// www.example.com/api/auth/login
// www.facebook.com/api/auth/login
router.post("/login", login);

// www.example.com/api/auth/register
// www.facebook.com/api/auth/resgister
router.post("/register", register);

//exportar el router
export default router;
