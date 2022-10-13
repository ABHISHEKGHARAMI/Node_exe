// first call the mapapi for the geocode and after that using the latitude and longtitude cal the weather api to fetch the 
//current data of the location.
const geocode = require('./utils/geocode1');
const forecast = require('./utils/forecast1');

const address = 'Halisahar';
geocode(address,(error,data)=>{
    const lat = data.long;
    const long = data.lat;
    forecast(lat,long,(error,data1)=>{
        console.log("Real temparature is :",data1.temp);
        console.log('Feellike :',data1.feel_temp);
        console.log('Prediction is :',data1.des);
    })
});
