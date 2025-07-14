import express from "express";
import {
  login,
  register,
  resetPassword,
} from "../controllers/authController.js";

// Acá se crea el router
const router = express.Router();

// Acá se crean las rutas del router

// www.example.com/api/auth/login
// www.facebook.com/api/auth/login
router.post("/login", login);

// www.example.com/api/auth/register
// www.facebook.com/api/auth/resgister
router.post("/register", register);

// www.example.com/api/auth/reset-password
// www.facebook.com/api/auth/reset-password
router.post("/reset-password", resetPassword);

//exportar el router
export default router;
