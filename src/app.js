const express = require('express');
const path = require('path');
const app = express();
// DECLARO EL PUERTO
const PORT = 3000;
// PARA QUE FUNCIONE EL CSS
app.use(express.static(__dirname + '/public'));

// ESCUCHO EL PUERTO
app.listen(PORT, () => {
    console.log('listening on port ', PORT);
});

// LLAMO A LA VISTA
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
})
app.get('/registro.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/registro.html'))
})
app.get('/contacto.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contacto.html'))
})