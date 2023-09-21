const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/youtubeRegistration",{

}).then(()=>{
    console.log("sucessful");


}).catch((e)=>{
console.log("failed")
})
