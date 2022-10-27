const  request = require('request');
const geocode = (address,callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYWJoaXNoZWtnaGFyYW1pIiwiYSI6ImNsOTVneTN3bjAxaTUzc2xrNHlvYmloNWgifQ.uJbiJV_GI7zi80MwFXEtRA'
    request({ url : url, json : true},(error,response)=>{
       if(error){
        callback('Unable to location service!');
       }else if(response.body.features.length == 0){
        callback('Unable to find the location try another search!!!',undefined);
       }else{
        callback(undefined,{
            lat : response.body.features[0].center[0],
            long : response.body.features[0].center[1],
            location : response.body.features[0].place_name
        })
       }
    })
}


//exporting that files
module.exports = geocode;