const express = require('express'); //require express module
const app = express(); //invoke the imported function to create an instance
const port =  process.env.PORT || 3000; //declared a variable to hold the port ot listen, mostly using enviromental variables

// app.use("/images", express.static('images'));
app.use("/images", express.static('images2'));

//Declare configuration using a callback function
//Setting the headers like Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Credentials
app.use((req, res, next) => {
    const whitelist = [
        'http://localhost:3000',
        'http://192.168.99.100:3000'
    ];
    const origin = req.headers.origin;
    if (whitelist.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//use the listen method to asing a port and a callback function
app.listen(port, () => console.log(`App is listening on port ${port}`));