import express from "express"
import { checkParamsCreate } from "./middlewares/generic.js"
import { userRouter } from "./routes/users-routes.js"

// guarda funciones o metodos
const app = express()

const router =express.Router()



app.use(express.json())


// app.get('/', (req, res) => {
//     console.log("nuevo objeto", usuario.users)
//     res.status(200).json({message: "hello world",
//     data:usuario.users
// })
// })


router.use('/users',userRouter)

app.use(router)

app.listen(3001, ()=>{
    console.log('Aplication is running')
})


