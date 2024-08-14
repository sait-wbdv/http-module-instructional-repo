"use strict";

const http = require("node:http");
const fs = require("node:fs/promises");

const server = http.createServer(async (req, res) => {
  // serve a simple html string
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Hello There</h1>");
  }
  // serve an html file
  else if (req.url === "/html") {
    try {
      const data = await fs.readFile(__dirname + "/index.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  }
  // serve an array of json data
  else if (req.url === "/api/numbers") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
  // serve 404 error handling
  else {
    try {
      const data = await fs.readFile(__dirname + "/404.html");
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(data);
    } catch (err) {
      // for if there is no 404 page
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  }
});

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
