const Koa = require('koa');
const Router = require('koa-router');

//const router = new Router();

const routerModel = require('./router');

const { initController, initServer, initModel } = require('./loader');

class cf{

    constructor(){
        this.app = new Koa();

        initModel(this);
        initServer(this);
        initController(this);
        const Server = this.servers;
        const Controller = this.controllers;

        this.app.use(async (ctx, next) => {
            ctx.Server = Server;
            await next();
        });

        const router = new Router();
        const routerObj = routerModel({ Server, Controller, router });
        
        this.app.use(routerObj.routes()).use(routerObj.allowedMethods());
    }


    start(port){
        this.app.listen(port, ()=>{
            console.log('server is starting........!');
        });
    }



}

module.exports = new cf();
