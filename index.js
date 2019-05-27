const express = require('express')
const app = express()
const port = 3000
const userCtrl = require('./controllers/users')

app.use(express.json())

app.get('', (req, res) =>{
    res.status(200).send("<h1>Welcome to my Node Server</h1>")
})

app.get('/api/users', userCtrl.read)
app.get('/api/users/:id', userCtrl.getUser)
app.post('/api/users', userCtrl.create)
app.put('/api/users/:id', userCtrl.update)
app.delete('/api/users/:id', userCtrl.delete)


app.listen(port, () => console.log(`Listening on port: ${port}`))