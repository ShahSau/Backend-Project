const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

//DB config
const db = require("./config/keys").MongoURI;

//connect to mongo
mongoose.connect(db, {useNewUrlParser:true,useUnifiedTopology: true ,useFindAndModify: false})
    .then(()=> console.log("Mongodb connected ...."))
    .catch(err=> console.log(err));




//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");



const PORT= process.env.PORT || 3000;

//Routes
app.use("/", require("./routes/index"))
app.use("/users", require("./routes/users"))


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});