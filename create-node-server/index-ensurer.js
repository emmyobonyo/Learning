const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        // The content-type of our response.
        // Basically it's telling the computer what kind of message
        // is in the response. In this case it's going to be JSON.
        'Content-Type': 'application/json'
    })
        // Lets end our response. We use res.end() to tell the other computer 
        // that our response is done.
        // res.end function expects a string so we need to chain it with a 
        // JSON.stringify() function to change our JSON response into a string. 
        // Not very complicated.

    res.end(JSON.stringify({
        id: 1,
        name: 'Kunta Kinte'
    }))
})

server.listen(3000, () => {
    console.log('server listening on 3000')
});