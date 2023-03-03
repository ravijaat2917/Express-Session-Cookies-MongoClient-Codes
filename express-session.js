const express = require('express')
const session = require('express-session')

const app = express()

// Enable sessions
app.use(session({
  secret: 'myKey', // A secret key used to sign the session ID cookie
  resave: false, // Don't save the session if it hasn't been modified
  saveUninitialized: false, // If true, a new sessionID is created every time the user logs in
  cookie: {
    maxAge: 1000 * 60 * 60 // The session will expire after one hour.
  }
}))

app.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.send('Welcome back! You are logged in.');
  } else {
    res.send('You are not logged in.');
  }
});

app.get('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  req.session.loggedIn = true;
  res.send('You are now logged in.');
});

app.get('/logout', (req, res) => {
  req.session.loggedIn = false;
  res.send('You are now logged out.');
});

app.listen(3000, ()=>{
  console.log("Server listening on port 3000.");
})

//Disclaimer: All content and material on the upGrad Campus website is copyrighted material, either belonging to upGrad Campus or its bona fide contributors and is purely for the dissemination of education.