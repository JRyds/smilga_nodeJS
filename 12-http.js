const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our homepage")
        return
    }

    if (req.url === "/about") {
        res.end("This page is about us")
        return
    }

    res.end(`
        <h1>Page Does Not Exist. Fool</h1>
        <p>This is not an existing page dawg. Reschnizzle ya nizzle, player.</p>
        <a href="/">Click to Reschizzle</a>
        `)
})

server.listen(5000)
