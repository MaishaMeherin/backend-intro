//The address of the server connected to the network is: 
//URL -> http://localhost:8383
//IP -> 127.0.0.1:8383

//requires express package, and assign it to a variable
const express = require('express');
//define backend app and envoke express function
const app = express(); 
//IP address is the location of the device and port is a location within the device that listens for incoming requests
const PORT = 8383
let data = {
    name: 'Medha',
    age: 22
}

//Type 1- website endpoints: sending back HTML and when a user enters a url in browser 

//ENDPOINT: HTTP verbs/methods & routes/paths(further sub directory of Port)
//the method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)
app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1>')
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>')
})

//Type 2- API endpoints: sending back JSON data, and when a user uses an API in their application 

//CRUD-method
app.get('/api/data', (req, res) => {
    console.log('This is for data')
    res.send(data)
})

//app.listen() is a method that listens to its incoming requests on specified port and runs a callback function
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)) //app is hardware running software that listens to incoming requests