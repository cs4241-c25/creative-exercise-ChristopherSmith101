const express = require( 'express' );
//const req = require("express/lib/request");
const app = express();

app.use('/', (req, res, next) => {
    console.log('Request URL: ' + req.url);
    next(); // go to the next middleware for this route
})

app.use(express.static('public'))
app.use(express.json());

async function run(){
    app.get("/", (req,res)=>{
        res.send("/public/index.html");
    })

    console.log("Program Running");
}

const runApp = run();


app.listen(process.env.PORT || 3000);