const express = require('express')
const add = express()
const port = 3000
add.get('/', function(req, res){
    res.send("Hello world")
})
add.get('/users', function(req, res){
    res.json(["user1", "user2", "user3"])
})
add.post('/users', function(req, res){
    res.send("юзер добавлен")
})
add.delete('/users/:id', function(req, res){
    res.json(`юзер c ID ${req.params.id} удален`)
})
add.patch('/users/:id', function(req, res){
    res.json(`юзер c ID ${req.params.id} изменен`)
})
add.listen(port, function(){
    console.log(`Example app listening at http://localhost:${port}`)
})