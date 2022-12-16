const { response } = require('express');
const express = require('express');
const app = express();

app.get('/projects', (require, response) => {
    return response.json([
        'Porjeto 1',
        'Projeto 2'
    ]);
});

app.listen(3000, () => {
    console.log('Server started on port 3000! 😎');
});
