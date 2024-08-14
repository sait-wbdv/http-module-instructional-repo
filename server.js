"use strict";

const http = require("node:http");

// Sends a simple message to the client
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello there");
    res.end();
  }
  if (req.url === "/api/numbers") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on("request", (req, res) => {
  console.log("----- HEADERS -----");
  console.log(req.headers);
  console.log("----- BODY -----");
  req.on("data", (chunk) => {
    console.log(chunk.toString("utf-8"));
  });
  res.end();
});

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
