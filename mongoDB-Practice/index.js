const express = require("express");     //require express 
const mongoose = require("mongoose");       
const path = require("path");
const chat = require("./models/chat.js");
const app = express();

app.set("views", path.join(__dirname , "/views"));      //to set new directory path 
app.set("view engine","ejs");               //this is set for using ejs templates

main().then(()=>{
    console.log("connecting succesful")
}).catch((err) =>{
    console.log(err);
})


async function main(){          //async function is define for handeling promise,when generating connect method
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
    
let chat1 = new chat({          //create a chat1 data 
    from : "nisha",
    to : "sonali",
    msg : "hii nisha , i want a java notes so please can you send mee :)",
    created_at : new Date()
});

chat1.save().then((res)=>{      //to save this chat1
    console.log(res);
}).catch((err)=>{
    consoel.log(err);
})

app.get("/",(req,res)=>{
    res.send("this is home page.");
})

app.listen(8080, ()=>{
    console.log("server is listening on port 8080.");
})
