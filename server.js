"use strict";

const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');

const upload = multer({dest: 'upload/'})
const VIEWS = path.join(__dirname, 'public');

app.use(express.static(VIEWS));

app.post('/form', upload.single('file'),(req,res)=>{
  return res.json(req.file);
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("server is running");
});
