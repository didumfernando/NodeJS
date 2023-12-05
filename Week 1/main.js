var http = require("http") //required node modules

http.createServer(function (request, response) { 
	response.writeHead(200, {'Content-type' : 'text/plain'},  //return response type the https → for the response.writeHead 
    response.end('Test output')) //Content type returns the type of file format returned.
}).listen(8081) //port number to host server

console.log('http://127.0.0.1.8081')
