const express = require('express');
const app =  express();
const PORT = 8080;


app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).send({
        message: 'Welcome to the chatback api'
    })
})