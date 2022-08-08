import express from 'express';
import { checkParamsCreate } from '../middlewares/generic.js';
import UserService from '../services/User.js';

const userRouter = express.Router()
const usuario = new UserService()

userRouter.get('/',(req, res) => {
    console.log("nuevo objeto", usuario.users)
    res.status(200).json({message: "hello world",
    data:usuario.users
})
})

userRouter.post('/', checkParamsCreate, async (req,res) => {

    const {name, lastName, email }= req.body
    const objBody = {name, lastName, email}

    try{
        
            const result = await usuario.createUser(objBody)
            console.log(result)
            
                console.log("body", req.body)
                res.status(200).json( {
                    message: result,
                    data:[
                        {
                            name,
                            lastName,
                            email
                        }
                    ]
                })

    }catch (error){
        console.log(error,"error en created user")

    }
})

userRouter.delete('/:id',async(req,res) => {
    const {id} =req.params
    console.log("actualizado", id)
    try{
        const result = await usuario.deleteUser(id)
        console.log("actualizado", result)
        res.status(200).json( {
            message:result,
            data:{}
        })
        
    }catch(error){
        console.log(error,"error update user")
    }

  
})

userRouter.put('/:id',async(req,res) => {
    const {name, lastName, email}= req.body
    const {id} =req.params
    const actualizacion={name,lastName,email}
    console.log("actualizado", id)
    try{
        const result = await usuario.updateUser(id,actualizacion)
        console.log("actualizado", result)
        res.status(200).json( {
            message:result,
            data:{
                actualizacion
            }
        })
        
    }catch(error){
        console.log(error,"error update user")
    }

})

export {userRouter}