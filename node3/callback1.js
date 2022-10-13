setTimeout(()=>{
    console.log('Two second are up');
},2000)
//callback function 

const names = ['Abhishek','Noam','Warren'];
const shortnames = names.filter((name)=>{
    return name.length<=4;
});

const geocode = (address,callback)=>{
     setTimeout(()=>{
        const data = {
            latitude: 0 ,
            longitude : 0
        }
         callback(data); 
     },2000);
}
geocode('Halishar',(data1)=>{
   console.log(data1);
});
