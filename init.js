const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successful");
})
.catch(err=>{
    console.log(err);
})


//created connection with DB name whatsapp
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



let allChats = [
    {
    from: "Aman",
    to: "Neha",
    msg: "Hey How are you",
    created_at: new Date(),
    },
    {
  from: "Rahul",
  to: "Priya",
  msg: "Did you finish the assignment?",
  created_at: new Date(),
},
{
  from: "Priya",
  to: "Rahul",
  msg: "Almost done, will submit soon",
  created_at: new Date(),
},
{
  from: "Karan",
  to: "Simran",
  msg: "Movie plan tonight?",
  created_at: new Date(),
},
{
  from: "Simran",
  to: "Karan",
  msg: "Yes, let's book tickets",
  created_at: new Date(),
},
{
  from: "Vikram",
  to: "Anjali",
  msg: "Meeting is rescheduled to 4 PM",
  created_at: new Date(),
},
{
  from: "Anjali",
  to: "Vikram",
  msg: "Okay, noted 👍",
  created_at: new Date(),
},
{
  from: "Rohit",
  to: "Sneha",
  msg: "Can you share the notes?",
  created_at: new Date(),
}

];


Chat.insertMany(allChats);