// HTTP is an inbuilt model that comes bundled with node.
const http = require('http');

// Initialise a server called server
const server = http.createServer((req, res) => {
  // req is listening to data coming in from other computers, the clients. It's siting there waiting to hear what the other computers want to tell it. For example we can get a 'message' containing the client URL using req.url

  // res is the server response. We got a request from the server and now we need to respond. We can add special messages called headers to our response to help the other computer understand our message better.

  // We can write these extra messages using the writeHead method which takes a status code and a content-type among other parameters.

  res.writeHead(200, {
    // The content-type of our response. Basically it's telling the computer what kind of message is in the response. In this case it's going to be JSON.
    'Contemt-Type': 'application/json'
  });

  // Lets end our response. We use res.end() to tell the other computer that our response is done.
  // res.end function expects a string so we need to chain it with a JSON.stringify() function to change our JSON response into a string. Not very complicated.

  res.end(JSON.stringify({
    id: 1,
    name: 'Emmanuel Obonyo',
  }))
})

// Start your server. Without this your server will not start. It's like opening shop for business.
server.listen(3000, () => {
  console.log('server listening on 3000')
});