const checkParamsCreate =(req,res,next)=>{
    console.log("body", req.body)
    const {name,lastName, email} =req.body

    if(
        req.body.hasOwnProperty("name") && 
        req.body.hasOwnProperty("lastName") && 
        req.body.hasOwnProperty("email") 
    ){
        next()
    }else{
        res.status(400).json({
            message :"error missing body", data:{}
        })
    }

}

export {checkParamsCreate}