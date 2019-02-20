//Import
const express = require("express");
const path = require("path");
//service

const frontRouter = require("./route/front.routes");

//Config
const server = express();
const port = 5938;

server.set( "views", __dirname + '/www');
server.use( express.static(path.join(__dirname, 'www')));

server.set( 'view engine', 'ejs');

server.use( '/', frontRouter);

// Connexion à la BDD Mongo

server.listen( port, () => {
    console.log( {/*database: database,*/ server: "http://localhost:" + port} );
});


