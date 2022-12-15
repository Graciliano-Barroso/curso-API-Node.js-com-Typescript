const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (require, response) => {
    return response.json({
        message: 'Olá Dev! Brm vindo ao curso!'
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000! 😎');
});
