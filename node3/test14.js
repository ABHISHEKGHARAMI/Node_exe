const forecast = require('./fore12');


forecast(22.920967,88.436833,(error,data)=>{
    console.log('Temp is : ',data.temp);
    console.log('Feels like :',data.feels_like);
    console.log('Description is :',data.desc);
});