class UserService {
    constructor(){
        this.users =[]
        this.createFakeUsers()
    }

    createFakeUsers ()
    {
        this.users=[
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
    }

    createUser(body){
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                const copyUsers = [...this.users]
                const fakeId = this.users.length +1
                    copyUsers.push(body)
                    copyUsers[fakeId-1].id=fakeId
                    console.log("id del nuevo usuario",copyUsers[fakeId-1].id)
                    this.users = copyUsers
                    resolve("User created and ID added")
            }, 1000 )

        } )

    }

    updateUser(id, newInfoUser){

        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                const indice = this.users.findIndex(element => element.id === parseInt(id)
                )
                console.log("indice hallado", indice)
                let user = this.users[indice]
                if (user)
                {        
                    user = {...user,...newInfoUser}
                    this.users[indice] = user
                    resolve("User is update")
                } else{
                    reject("User id not found")
                }
            },1000)
        })

    }

    deleteUser(id){
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                const indice = this.users.findIndex(element => element.id === parseInt(id)
                )
                console.log("indice hallado", indice)
                let user = this.users[indice]
                if (user)
                {        
                    this.users.splice(indice, 1);
                    resolve("User is deleted")
                } else{
                    reject("User id not found")
                }
            },1000)
        })

    }
}

export default UserService

