let id = 1

let users = [
    {
       id: id++,
       name: "Carolyn"
    },
    {
        id: id++,
        name: "Mike"
     },
     {
        id: id++,
        name: "Stephen"
     },
     {
        id: id++,
        name: "Donovan"
     },
     {
        id: id++,
        name: "Rudy"
     }
]

module.exports = {
    read: ( res) => {
        res.status(200).send(users)
    },

    getUser: (req, res) => {
        let {id} = req.params
        let user = users.find(user => +user.id === +id)
        res.send(user)
    },

    create: (req, res) => {
        let newUser = req.body
        console.log(newUser)
        newUser.id = id++       
        
        users.push(newUser)
        console.log(users)

        res.send(users)
        
    },

    update: (req, res) => {
        let {name, email} = req.body
        let {id} = req.params

        let updatedUser = {
            id,
            name,
            email
        }

        let index = users.findIndex( (user) => +user.id === +id)

        users.splice( index, 1, updatedUser)

        res.send(users)
    },

    delete: (req,res) => {
        let {id} = req.params
        let index = users.findIndex((user) => +user.id === +id)

        users.splice(index, 1)

        res.send(users)
    }
}
