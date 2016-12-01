import * as express from 'express';
var app = express();

import dbProvider = require('./db');
var db = dbProvider.db;

// Note that we implement only GET handlers here, because:
// 1. This demo is to be tested by typing URL-s manually in the browser;
// 2. The demo's focus is on a proper database layer, not a web server.

//////////////////////////////////////////////
// Users Web API
//////////////////////////////////////////////
// create table Users:
GET('/users/create', () => db.users.create());
// add some initial records:
GET('/users/init', () => db.users.init());
// remove all records from the table:
GET('/users/empty', () => db.users.empty());
// drop the table:
GET('/users/drop', () => db.users.drop());
// add a new user with name:
GET('/users/add/:name', (req:any) => db.users.add(req.params.name));
// find a user by id:
GET('/users/find/:id', (req:any) => db.users.find(+req.params.id));
// remove a user by id:
GET('/users/remove/:id', (req:any) => db.users.remove(+req.params.id));
// get all users:
GET('/users/all', () => db.users.all());
// count all users:
GET('/users/total', () => db.users.total());

//////////////////////////////////////////////
// Products Web API
//////////////////////////////////////////////
// create table Products:
GET('/products/create', () => db.products.create());
// drop the table:
GET('/products/drop', () => db.products.drop());
// remove all products:
GET('/products/empty', () => db.products.empty());
// add a new product with user Id and name:
GET('/products/add/:userId/:name', (req:any) => db.products.add({
    userId: +req.params.userId,
    name: req.params.name
}));
// find a product by id:
GET('/products/find/:id', (req:any) => db.products.find(+req.params.id));
// remove a product by id:
GET('/products/remove/:id', (req:any) => db.products.remove(+req.params.id));
// get all products:
GET('/products/all', () => db.products.all());
// count all products:
GET('/products/total', () => db.products.total());

//////////////////////////////////////////////
// Bsclient Web API
//////////////////////////////////////////////
// create table Bsclient:
GET('/bsclient/create', () => db.bsclient.create());
// get all bsclient:
GET('/bsclient/all', () => db.bsclient.all());

//////////////////////////////////////////////
// bssaldocard Web API
//////////////////////////////////////////////
// create table bssaldocard:
GET('/bssaldocard/create', () => db.bssaldocard.create());
// get all bssaldocard:
GET('/bssaldocard/all', () => db.bssaldocard.all());

//////////////////////////////////////////////
// bsservice Web API
//////////////////////////////////////////////
// create table bsservice:
GET('/bsservice/create', () => db.bsservice.create());
// get all bsservice:
GET('/bsservice/all', () => db.bsservice.all());

//////////////////////////////////////////////
// bsservint Web API
//////////////////////////////////////////////
// create table bsservint:
GET('/bsservint/create', () => db.bsservint.create());
// get all bsservint:
GET('/bsservint/all', () => db.bsservint.all());

//////////////////////////////////////////////
// bsservrollback Web API
//////////////////////////////////////////////
// create table bsservrollback:
GET('/bsservrollback/create', () => db.bsservrollback.create());
// get all bsservrollback:
GET('/bsservrollback/all', () => db.bsservrollback.all());

/////////////////////////////////////////////
// Express/server part;
/////////////////////////////////////////////

// Generic GET handler;
function GET(url:string, handler:(req:any)=>any) {
    app.get(url, (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        handler(req)
            .then((data:any) => {
                res.json({
                    success: true,
                    data
                });
            })
            .catch((error:any) => {
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    });
}

/*app.get('/bsclient/all', function(req, res, next){
 console.log("writing headers only");
 res.header("Access-Control-Allow-Origin", "*");
 res.header('Access-Control-Allow-Headers', 'content-type');
 res.end('');
 next();
 });*/

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    /*res.setHeader('Access-Control-Allow-Origin', req.headers.origin);*/
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    /* console.log(res);*/
    return next();
});

var port = 3000;

app.listen(port, () => {
    console.log('\nReady for GET requests on http://localhost:' + port);
});
