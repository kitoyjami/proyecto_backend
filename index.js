const express = require('express')

// guarda funciones o metodos
const app = express()

app.get('/', (req, res) => {
    console.log('req',req)
    console.log('res',res)
})

