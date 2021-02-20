# API development using NodeJs and ExpressJS
## Introduction
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
## ExpressJS
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
## Setup
Download LTS NodeJS from [here](https://nodejs.org/en/download/)
## Basic API
Create a index.js file and write following code in there
```javascript
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3000, () => {
  console.log(`Listening on port ${3000}`);
});
```