//requires express package, and assign it to a variable
const express = require('express');
//define backend app and envoke express function
const app = express(); 
//IP address is the location of the device and port is a location within the device that listens for incoming requests
const PORT = 8383

//app.listen() is a method that listens to its incoming requests on specified port and runs a callback function
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)) //app is hardware running software that listens to incoming requests
