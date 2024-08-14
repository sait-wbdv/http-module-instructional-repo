# README

This is an instructional repo for building a server with the node http module. We will use this to practice the basics but will then move on to the [Express framework](https://expressjs.com/). Express is more robust than the HTTP module but is built using the HTTP module. A basic understanding will help you identify what's going on under the hood when you write server side code.

## Low Level Examples

- server.js is used to server content to clients. You can observe this by going to localhost:3000 in your browser after running `node server.js`.
  - open your dev tools and go to the network tab. from there you can view the response codes etc from the client server communication.
- client.js is used to make a POST request to the server. This is simulating 2 different devices (a client and server). In the client.js file, sending data to the server which the server is loggin in the console.

## Serving html files

- In this example, instead of serving json data to the client, the server will send an html file that can be read by the browser
