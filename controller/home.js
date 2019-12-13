class home{

    async home(ctx, next){
        //console.log('home');
        const res = await ctx.Server.server.userInfo();
        ctx.body = res;
    }

    async test(ctx, next){
        const res =  await ctx.Server.server.userInfo();
        console.log(res);
        ctx.body = res;
    }

}

module.exports = home;