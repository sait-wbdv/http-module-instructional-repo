# README

This is an instructional repo for building a server with the node http module. We will use this to practice the basics but will then move on to the [Express framework](https://expressjs.com/). Express is more robust than the HTTP module but is built using the HTTP module. A basic understanding will help you identify what's going on under the hood when you write server side code.

## Stages of Demo

### 1. Serve text content

- Add the http module to a javascript file
- Set it to serve content on a port (we'll use 3000)
- Serve a string of text

### 2. Serve multiple routes

- Create another route called /api/numbers
- Serve an array of numbers
- Also try logging information about the client

### 3. POST request from a client

- Create a new javascript file called client.js
- Add user agent information and header information
- Set the HTTP method to POST
- Send a message to the server and give it instructions to log the information
- Run both client and server files and to see how it works

### 4. Serve HTML content

- Serve html content directly
  - pass an html string to res.end()
- Serve an html file
  - use the fs module and readFile
  - with promise syntax, pass the information from the html file into the res.end()
  - don't forget to pass header information with writeHead()

### 5. Add error handling

- Use if/else if/else for different routes
- as the else statement, send 404 information

### 6. Optimize

- Change the promise syntax to async await
- Add try/catch blocks for async content
- Create a 404 page with a button to take you back to '/'
- Serve the 404 error page just like the html page
- Keep your other 404 as a fallback
- Clean up your code
