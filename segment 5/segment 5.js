const express = require('express');
//const session = require('express-session');
const app = express();

const getDetails = () => undefined;

app.get('/login', (req, res, next) => {
  try {
    const user = getDetails();
    if(!user){
      throw new Error("User Not Found!");
    }
    return res.status(200).json({message: true});
  } catch (error) {
    next(error);
  } 
});

app.get('/logout', (req, res, next) => {
  try {
    const user = getDetails();
    if(!user){
      throw new Error("User Not Found!");
    }
    return res.status(200).json({message: true});
  } catch (error) {
    next(error);
  } 
});

app.get('/signup', (req, res, next) => {
  try {
    const user = getDetails();
    if(!user){
      throw new Error("User Not Found!");
    }
    return res.status(200).json({message: true});
  } catch (error) {
    next(error);
  } 
});

// app.get('/logout', (req, res) => {
//   req.session.loggedIn = false;
//   res.send('You are now logged out.');
// });

app.listen(3000, () =>{
    console.log("Server Listening on Port 3000");
})

//Disclaimer: All content and material on the upGrad Campus website is copyrighted material, either belonging to upGrad Campus or its bona fide contributors and is purely for the dissemination of education.