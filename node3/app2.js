//making http request to the api
const  request = require('request');
const fs = require('fs');
let lat =0 ;
let long =0;
/*
const url = "http://api.weatherstack.com/current?access_key=1d2c0ef28050254b8192ef89de2a69d0&query=22.9295,88.4249";
request({url: url},(error,response)=>{
    const data = JSON.parse(response.body);
    console.log('tempareture is :',data.current.temperature,' but feels like :',data.current.feelslike);
    const jdata = JSON.stringify(data);
    fs.writeFileSync('./weather.json',jdata,'utf8'); 
    //console.log(data.current);
    console.log('prediction is  :',data.current.weather_descriptions);

});
*/
//http://api.weatherstack.com/current?access_key=1d2c0ef28050254b8192ef89de2a69d0&query=22.9295,88.4249&units=f
//https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJoaXNoZWtnaGFyYW1pIiwiYSI6ImNsOTVneTN3bjAxaTUzc2xrNHlvYmloNWgifQ.uJbiJV_GI7zi80MwFXEtRA
const curl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJoaXNoZWtnaGFyYW1pIiwiYSI6ImNsOTVneTN3bjAxaTUzc2xrNHlvYmloNWgifQ.uJbiJV_GI7zi80MwFXEtRA";
request({url : curl},(error,response)=>{
    const data1 = JSON.parse(response.body);
    lat = data1.features[0].center[0];
    long = data1.features[0].center[1]
    console.log(long);
});
const url = 'http://api.weatherstack.com/current?access_key=1d2c0ef28050254b8192ef89de2a69d0&query='+lat+','+long;
request({url: url},(error,response)=>{
    /*
    const data = JSON.parse(response.body);
    console.log('tempareture is :',data.current.temperature,' but feels like :',data.current.feelslike);
    const jdata = JSON.stringify(data);
    fs.writeFileSync('./weather.json',jdata,'utf8'); 
    //console.log(data.current);
    console.log('prediction is  :',data.current.weather_descriptions);
    */
    if(error){
        console.log('No connection to weather app!!');
    }
    else{
        const data = JSON.parse(response.body);
        console.log('tempareture is :',data.current.temperature,' but feels like :',data.current.feelslike);
    }

});


//Now have to automate the user choice city to collect and turn into geocode 
//and then receive the Api data into predictions


