const express = require('express');
const router = require('./routes/route'); // Certifique-se de que o caminho está correto

const app = express();
const PORT = 40000;

app.use(express.json());
app.use(router); // Usando o roteador que você exportou do arquivo 'routes/route.js'

app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});
