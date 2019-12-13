// const Koa = require('koa');
// const app = new Koa();


// const Router = require('koa-router');
// const router = new Router();

// const { initController, initServer } = require('./src/loader');

// app.use(async (ctx, next) => {
//     ctx.Server = initServer();
//     // console.log(ctx.Server)
//     // console.log('333333');
//     await next();
// });

// const Controller = initController();

// router.get('/', Controller.home.test);

// app.use(router.routes()).use(router.allowedMethods());
// app.listen(9000, ()=>{
//     console.log('server is starting ... 9000');
// });



const cf = require('./src/cf');
cf.start(9000);



