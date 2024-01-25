const express = require("express")
const app = express()

app.use(express.urlencoded())
app.use(express.json())
let users = []
app.get('/', (req, res) => {
    res.send(users)
})
app.get('/:id', (req, res) => {
    const { id } = req.params
    const user = users.find(obj => obj.id === id)
    if (!user) {
        res.status(404).send("User Not Found")
    }
    res.send(users.find(obj => obj.id === id))

})
app.post("/", (req, res) => {
    const { body } = req
    if (users.find(obj => obj.email.toLowerCase() === body.email.toLowerCase())) {
        res.status(400).send("User Already Exists")
    }
    else {
        users.push({ id: users.length.toString(), ...body, })
        res.send(users)
    }
})

app.listen(8000, () => {
    console.log("Server is running at 8000")
})