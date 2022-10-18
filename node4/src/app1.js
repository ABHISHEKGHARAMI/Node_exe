const express = require('express');
const path = require('path');
const hbs = require('hbs'); 


 
//serving static src(javascript,html,css)
const app = express();
const public_path = path.join(__dirname,'../public');
const partialpath = path.join(__dirname,'../src/partials');
app.use(express.static(public_path));
///serving dynamic src(javascript,html,css)
app.set('view engine','hbs');

// if you want to set costomized views then use
//pathview = path.join(__dirname,'../folder_name');
//use set method for setting the value
//app.set('views',pathview)
hbs.registerPartials(partialpath);
app.get('',(req,res)=>{
  res.render('index',{
    title: "weather app",
    name : "Abhishek Gharami"
  })
});

//fixing about page
app.get('/about',(req,res)=>{
    res.render('about',{
        name : "Mr x",
        title : "Mr y"
    })
}); 
app.get('/help',(req,res)=>{
    res.render('help',{
     title : 'help',
     name : 'Vishal'
    })
});

app.get('/weather',(req,res)=>{
    res.send('<h1>Serving weather data</h1>')
})

app.listen(3000,()=>{
    console.log('running 3000!!!!!');
});