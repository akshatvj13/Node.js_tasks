require("dotenv").config();
const express = require("express");
const mongoose = require ('mongoose');

const User = require("./Model/users")

const PORT = process.env.PORT || 2003;

const path = require("path");

const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('mongodb connected');
})

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/form",(req,res)=>{
    res.render('form')
});

app.post("/form",async(req,res)=>{

    const body = req.body;

    await User.create({
        firstName: body.firstName,
        lastName : body.lastName,
        mobileNumber : body.mobileNumber,
        email : body.email,
        street : body.street,
        city : body.city,
        state : body.state,
        country : body.country,
        password : body.password,
        loginId : body.loginId
    });

    return res.render('form');


});

app.get("/data",async(req,res)=>{

    const all_users = await User.find({});

    return res.render("data",{
        user: all_users,
    });
}
);




app.listen(PORT,()=>{
    console.log("server started");
})
