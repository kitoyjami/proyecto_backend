const express = require('express')

// guarda funciones o metodos
const app = express()


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "hello world",
    data:[
        {
            "id" :1,
            "name" : "eddy",
            "lastName": "Urbano Ramos",
            "email": "eddyuga@gmail.com"
        },
        {
            "id" :2,
            "name" : "Keyko",
            "lastName": "Cruz Zegarra",
            "email": "kekito@gmail.com"
        }
    ]
})
})

app.post ('/', (req,res) => {
    const {name, lastName, email }= req.body
    console.log("body", req.body)
    res.status(200).json( {
        message: 'user created succesfully',
        data:[
            {
                "name":name,
                "lastName":lastName,
                "email":email
            }
        ]
    })

})

app.delete ('/:id', (req,res) => {
    res.status(200).json({
        message:"User deleted succesfully",
        data:""
    })
})

app.put ('/', (req,res) => {
    
})


app.listen(3001, ()=>{
    console.log('Aplication is running')
})


