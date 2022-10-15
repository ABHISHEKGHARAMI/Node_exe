const express = require('express');
const path = require('path');


const app = express();
const public_path = path.join(__dirname,'../public');
app.use(express.static(public_path));


app.get('/help',(req,res)=>{
    res.send('Help channel')
});

app.get('/weather',(req,res)=>{
    res.send('<h1>Serving weather data</h1>')
})

app.listen(3000,()=>{
    console.log('running 3000!!!!!');
});