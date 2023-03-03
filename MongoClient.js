const express = require('express');
 
// create an instance of the express app
const app = express();

// connect to the MongoDB database
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://Roshan:password123@cluster0.zqkkr87.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, client){
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db('mydatabase');
})

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})

//Disclaimer: All content and material on the upGrad Campus website is copyrighted material, either belonging to upGrad Campus or its bona fide contributors and is purely for the dissemination of education.