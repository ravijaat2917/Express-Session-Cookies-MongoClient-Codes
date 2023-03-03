const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/login', (req, res)=>{
  const username = req.query.username;
  const password = req.query.password;
  res.cookie('sessionID', '123456');
  res.send(`Welcome, ${username}! You are now logged in.`);
})

app.listen(3000, ()=>{
  console.log("Server listening on port 3000!");
});