const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; 

app.use(bodyParser.json());

app.use((req, res, next) => {
    const whitelist = [
        'http://localhost:3001'
    ];
    const origin = req.headers.origin;
    if (whitelist.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


let id = 1;
let array = [
    {
        username: 'Arcayus',
        level: 78,
        type: 'Warrior',
        id: 0
    }
];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', function(req, res) {
    // console.log(req.body);
    res.send({res: 'GET', items: array});
});

app.post('/api', function(req, res) {
    // console.log(req.body);
    array.push({...req.body, id: id++});
    res.send({res: 'POST'});
});

app.delete('/api', function(req, res) {
    console.log(req.body);
    const id = req.body.id;

    array.forEach((item, index) => {
        if(item.id == id){
            array.splice(index, 1);
            return;
        }
    });
    console.log(array);
    res.send({res: 'DELETE'});
});

app.patch('/api', function(req, res) {
    console.log(req.body);
    res.send({res: 'PATCH'});
});

//use the listen method to asing a port and a callback function
app.listen(port, () => console.log(`App is listening on port ${port}`));

