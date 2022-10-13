const request = require('request');

const forecast = (lat,long,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=1d2c0ef28050254b8192ef89de2a69d0&query='+lat+','+long;
    request({ url : url, json : true},(error,response)=>{
       if(error){
        callback('Unable to location service!');
       }else if(response.body.current.length == 0){
        callback('Unable to find the location try another search!!!',undefined);
       }
       else{
         callback(undefined,{
            temp : response.body.current.temperature,
            feel_temp : response.body.current.feelslike,
            des : response.body.current.weather_descriptions
         });
       }
    });
}

module.exports = forecast;