# NodeJS Learning progress & Notes

## Week 1
Learnt how to set-up environment & create a server for nodejs

### What is NodeJS and why is it used for backend?
NodeJS is a server-side language built upon javascript
NodeJS is used when theres stack based application, large data processing.
For node unlike React it is running on a node server but for nodejs we need to create our own server. (main.js is where the server should be created)

### Setting up environment
1. Checking environment setting up first using nodejs
2. To check whether installed type ```node -v``` in terminal. 
3. Create an index.js and a main.js in the folder first. → to run file run ```node <filename>```

### Creation of Server (```main.js```)
```
var http = require("http") //required node modules

http.createServer(function (request, response) { 
	response.writeHead(200, {'Content-type' : 'text/plain'},  //return response type the https → for the response.writeHead 
    response.end('Test output')) //Content type returns the type of file format returned.
}).listen(8081) //port number to host server

console.log('http://127.0.0.1.8081')
```
### Output on browser
<img width="1138" alt="Screenshot 2023-12-05 at 11 07 26 PM" src="https://github.com/didumfernando/NodeJS/assets/118650079/729b9340-edaf-402f-aa40-d75acaae6a67">
