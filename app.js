import express from "express";
import mainRouter from "./routes/index.js";

const app = express();
const port = 3000;

app.use(express.json());

// Todas las rutas estarán bajo /api
// www.example.com/api
// www.facebook.com/api
app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res.send("Hola amigos de AzulSchool");
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto ${port}`);
});
