const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');

function load(dir, fn){
    const url = path.resolve(__dirname, dir);
    const files = fs.readdirSync(url);

    files.forEach(file => {
        if(file.endsWith('.js')){
            const filename = file.replace('.js', '');
            const fileModel = require(url+'/'+filename);
            fn(filename, fileModel);
        }
    });
}



function initController(app){
    app.controllers = {};
    load('../controller', (filename, controller)=>{
        app.controllers[filename] = new controller();
    });
    return app;
}


function initServer(app){
    app.servers = {};
    load('../server', (filename, server)=>{
        app.servers[filename] = new server(app.models);
    });
    return app;
}


function initModel(app){
    load('../config', (filename, config) => {
        app.models = {};
        load('../model', (filename, model)=>{
            const sequelize = new Sequelize(config.db);
            app.models[filename] = model({ sequelize, Sequelize });
        });
        return app;
    })
   
}



module.exports = { initController, initServer, initModel };






