let express = require("express");
//const { runInNewContext } = require("vm");
const https = require('https');

const bodyParser= require("body-parser");


let app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
    
})
app.post("/", (req,res)=>{
    const query= req.body.cityName;
    const apiKey="4c65edd7a717e23ee614acd543adccec"
    const unit="metric"
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apiKey
    https.get(url,(response)=>{
        console.log(response.statusCode);

        response.on("data", (data)=>{
            const weatherData= JSON.parse(data);
            const temp = weatherData.main.temp;
            const feels_like = weatherData.main.feels_like;
            const humidity = weatherData.main.humidity;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<h1>The temperature of "+query+ " is " + temp+" degree celcius.</h1>")
            res.write("<h3>Feels like is "+ feels_like+" degree celcius.</h3>")
            res.write("<h3>Humidity is "+ humidity+"%.</h3>")
            res.write("<p>The weather is currently "+ weatherDescription+"</p>")
            res.write("<img src ="+imageURL+">")
            
            res.send()
        });

    });
    
})


    

    app.listen(process.env.PORT || 3000, ()=>{
        console.log("Server is running on port 3000");
    })