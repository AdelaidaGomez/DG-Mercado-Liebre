// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
const publicFolderPath = path.resolve(__dirname, "./public")
app.use(express.static(publicFolderPath));

// Ponemos a escuchar el servidor
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:${port}")
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"))
})
//register
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"))
})
app.post("/register", (req, res) => {
     // Manejo de la info de formularios
    res.sendFile(path.resolve(__dirname, "views/home.html"))
})
//LogIn
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"))
})
app.post("/login", (req, res) => {
    // Manejo de la info de formularios
    res.sendFile(path.resolve(__dirname, "views/home.html"))
})