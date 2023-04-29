const express = require('express');
const app = express();
const port =3000;
const {router} = require('./routes/route');

app.use(express.json());

app.use('/api/v3/app', router);


app.listen(port,()=>{
    console.log("Server is working");
})