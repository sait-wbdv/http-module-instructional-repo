"use strict";

const http = require("node:http");

// Sends a simple message to the client
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello there");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
