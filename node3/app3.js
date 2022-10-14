// first call the mapapi for the geocode and after that using the latitude and longtitude cal the weather api to fetch the 
//current data of the location.
const geocode = require('./utils/geocode1');
const forecast = require('./utils/forecast1');
/** */
const address = process.argv[2];

if(!address){
    console.log('Please provide an address');
}
else{

 geocode(address,(error,data1)=>{
    const lat = data1.long;
    const long = data1.lat;
    forecast(lat,long,(error,data2)=>{
        console.log("Real temparature is :",data2.temp);
        console.log('Feellike :',data2.feel_temp);
        console.log('Prediction is :',data2.des);
        console.log("Location :",data1.location);
    })
});
}
/*
//chaining callback
geocode('Kolkata',(error,data1)=>{
    if(error){
        console.log(error);
    }
    else{
        forecast(data1.lat,data1.long,(error,data2)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(data2.temp,data2.feel_temp,data2.des);
                console.log(data1.location);
            }
        });
    }
});
*/
