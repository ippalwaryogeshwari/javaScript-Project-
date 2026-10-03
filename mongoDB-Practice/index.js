const express = require("express");     //require express 
const mongoose = require("mongoose");       
const path = require("path");
const Chat = require("./models/chat.js");
const { read } = require("fs");
const app = express();

app.set("views", path.join(__dirname , "/views"));      //to set new directory path 
app.set("view engine","ejs");               //this is set for using ejs templates
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({entended : true}));     //for parsing data 

main().then(()=>{
    console.log("connecting succesful")
}).catch((err) =>{
    console.log(err);
})


async function main(){          //async function is define for handeling promise,when generating connect method
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
    
let chat1 = new Chat({          //create a chat1 data 
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

app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})

//new rout
app.get("/chats/new",(req,res)=>{
    // res.send("this is new page route");
    // console.log("connected to new route");
    res.render("new.ejs");
})

//create route
app.post("/chats",(req,res)=>{
    // console.log("again back to chat page");
    let {from, to ,msg}= req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg: msg,
        created_at: new Date(),
    })
    newChat
        .save()
            .then((res)=>{
                console.log("chat was saved");
            }).catch((err)=>{
                console.log(err);
            })
    console.log(newChat);
    res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("this is home page.");
})

app.listen(8080, ()=>{
    console.log("server is listening on port 8080.");
})
