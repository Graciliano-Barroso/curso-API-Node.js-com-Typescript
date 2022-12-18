const { response, request } = require('express');
const express = require('express');
const app = express();

app.get('/projects', (request, response) => {
    const {title, owner, page} = request.query;
    console.log(title, owner, page);

    return response.json([
        'Porjeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (require, response) => {
    return response.json([
        'Porjeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects/:id', (require, response) => {
    return response.json([
        'Porjeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects/:id', (require, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.listen(3000, () => {
    console.log('Server started on port 3000! 😎');
});
