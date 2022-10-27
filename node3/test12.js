const  request = require('request');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=eabdf96a9b399d972d310820555d7702&units=metric';

request( {url : url},(error,response)=>{
    if(error){
        console.log('error');
    }
    else{
        const data = JSON.parse(response.body);
        console.log('temp is : ',data.main.temp);
        console.log('Feels like : ',data.main.feels_like);
        console.log('Description is : ',data.weather[0].description);
    }
})