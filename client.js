"use strict";

const http = require("node:http");

const agent = new http.Agent({ keepAlive: true });

const request = http.request({
  agent: agent,
  hostname: "localhost",
  port: 3000,
  method: "POST",
  path: "/post",
  headers: {
    "Content-Type": "application/json",
  },
});

request.on("response", (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });
});
request.write(JSON.stringify({ message: "General Kenobi!" }));
request.end(JSON.stringify({ message: "So uncivilized, message ended!" }));
