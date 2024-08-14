"use strict";

const http = require("node:http");
const fs = require("node:fs/promises");
// Sends a simple message to the client
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // read the html file
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>HI</h1>");
  }
  if (req.url === "/html") {
    fs.readFile(__dirname + "/index.html")
      .then((content) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(content);
      })
      .catch((err) => {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      });
  }

  if (req.url === "/api/numbers") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
