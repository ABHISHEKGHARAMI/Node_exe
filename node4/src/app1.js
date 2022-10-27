const express = require('express');
const path = require('path');
const hbs = require('hbs'); 
const geocode = require('./utils/geocode1');
const forecast =require('./utils/forecast1');



 
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
    title: "Weather app",
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




//intregating the query string
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error : 'provide address'
        })
    }
    console.log(req.query);
   geocode(req.query.address,(error,data1)=>{
    const lat = data1.long;
    const long = data1.lat;
    forecast(lat,long,(error,data2)=>{
         console.log("Real temparature is :",data2.temp);
        console.log('Feellike :',data2.feels_like);
        console.log('Prediction is :',data2.desc);
        console.log("Location :",data1.location);
    res.send({
        temp : data2.temp,
        Feellike : data2.feels_like,
        Prediction : data2.desc,
        Location :  data1.location
    });
    })
});
console.log(req.query);
    /*res.send({
        forecast : 'Its raining',
        location : 'Halisahar',
        address : req.query.address
    });
    */ 
});


//for non generic errors


app.get('/help/*',(req,res)=>{
    res.render('error',{
        error : '404',
        text : 'Error 404 non generic...'
    })
});
//error 404 page showing for generic error
app.get('*',(req,res)=>{
    res.render('error',{
        error : '404',
        text : 'My 404 Page...'
    })
});



app.listen(3000,()=>{
    console.log('running 3000!!!!!');
});