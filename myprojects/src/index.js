const express = require('express');
const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    const {title, owner, page} = request.query;
    console.log(title, owner, page);

    return response.json([
        'Porjeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    const {name, owner} = request.body;
    console.log(name, owner);

    return response.json([
        'Porjeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {name, owner} = request.body;
    console.log(id, name, owner);

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
