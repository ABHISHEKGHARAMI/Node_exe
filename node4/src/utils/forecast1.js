const reuest = require('request');

const forecast = (lat,long,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=eabdf96a9b399d972d310820555d7702&units=metric'
    reuest({url : url, json : true},(error,response)=>{
        if (error){
            callback('Unable to locate location.');
        }
        else if(response.body.length == 0){
         callback('Can not made connection',undefined)
        }
        else{
            callback(undefined,{
                temp : response.body.main.temp,
                feels_like : response.body.main.feels_like,
                desc : response.body.weather[0].description
            });
        }
    });

}
module.exports = forecast;
