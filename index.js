var express = require('express');
var app = express();

app.get("/h1",(req,res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end("hello")
});


module.exports = app;
