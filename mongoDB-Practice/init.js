const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then((res)=>{
        console.log("connecting succesful");
    }).catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allchats =[
    {
        from : "neha",
        to : "sunil",
        msg : "hii sunil",
        created_at : new Date(),
    },
    {
        from : "sonali",
        to : "payal",
        msg : "happy birthday paylee",
        created_at : new Date(),
    },
    {
        from : "nisha",
        to : "to herself",
        msg : "don't harm yourself by others word",
        created_at : new Date(),
    },
    {
        from : "durga",
        to : "balaji",
        msg : "where are you balaji",
        created_at : new Date(),
    },
    {
        from : "swati",
        to : "nisha",
        msg : "hii yogee, are you free on weekend",
        created_at : new Date(),
    },
    {
        from : "sir",
        to : "student",
        msg : "you are infomed to pay your fees before sunday",
        created_at : new Date(),
    }
];

Chat.insertMany(allchats);
    
