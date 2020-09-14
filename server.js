const express = require('express');
const path = require('path');
const bp = require('body-parser');
const fetch = require('node-fetch');

const ngApp = express();

ngApp.use(bp.urlencoded({extended:true}))
ngApp.use(bp.json())

ngApp.use(express.static('./dist/covid-data'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/covid-data/index.html'));
});

ngApp.get('/data1', (req,res)=>{

    console.log("in data1");
    let url = "https://api.rootnet.in/covid19-in/contacts";

    let settings = { method: "Get" };

    fetch(url, settings)
    .then(res => res.json())
    .then((json) =>{
        console.log('data1: ',json);
        res.send(json)
        //res.json({"regional":json.data.contacts.regional })
    });
})

ngApp.get('/data2', (req,res)=>{

    console.log("in data2");
    let url = "https://api.rootnet.in/covid19-in/notifications";

    let settings = { method: "Get" };

    fetch(url, settings)
    .then(res => res.json())
    .then((json) =>{
        console.log("data2: ",json);
        res.send(json)
        //res.json({"notifications":json.data.notifications })
    });
})

ngApp.get('/data3a', (req,res)=>{

    console.log("in data3a");
    let url = "https://api.rootnet.in/covid19-in/hospitals/beds";

    let settings = { method: "Get" };

    fetch(url, settings)
    .then(res => res.json())
    .then((json) =>{
        console.log('data3a: ',json);
        res.send(json)
        //res.json({"summary":json.data.summary, "regional": json.data.regional})
    });
})

ngApp.get('/data3b', (req,res)=>{

    console.log("in data3b");
    let url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";

    let settings = { method: "Get" };

    fetch(url, settings)
    .then(res => res.json())
    .then((json) =>{
        console.log('data3b: ',json);
        res.send(json)
       // res.json({"medicalcolleges":json.data.medicalColleges})
    });
})

console.log("Runnning server.js");
ngApp.listen(process.env.PORT || 8080);