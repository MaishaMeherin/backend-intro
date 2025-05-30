//The address of the server connected to the network is: 
//URL -> http://localhost:8383
//IP -> 127.0.0.1:8383

//requires express package, and assign it to a variable
const express = require('express');
//define backend app and envoke express function
const app = express(); 
//IP address is the location of the device and port is a location within the device that listens for incoming requests
const PORT = 8383

//Type 1- website endpoints: sending back HTML and when a user enters a url in browser 

//ENDPOINT: HTTP verbs/methods & routes/paths(further sub directory of Port)
//the method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)
app.get('/', (req, res) => {
    //this is an endpoint
    console.log('yay i hit an endpoint', req.method)
    res.sendStatus(201)
})

app.get('/dashboard', (req, res) => {
    console.log('Oh now i hit the /dashboard endpoint')
    res.send('<h1>This is actually a website</h1>') //status code will be default 200 since the request send was successful
})


//Type 2- API endpoints: sending back JSON data, and when a user uses an API in their application 

//app.listen() is a method that listens to its incoming requests on specified port and runs a callback function
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)) //app is hardware running software that listens to incoming requests