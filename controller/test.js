class test{
   

    
    // test(ctx, next){
    //     ctx.body = "hhhh test";
    // }

    // testpost(ctx, next){
    //     ctx.body = "post test";
    // }

    async demo(ctx, next){
        //console.log(ctx.Service);
        
        //  const res = await ctx.Service.server.userInfo();
        //  console.log(res);
        
         //const result = JSON.stringify(res);

         //console.log(this.Service);
         
         //const res = await ctx.Model.User.findAll({raw:true});

        // let body; 
        // let obj = {};
        // for(let r of res){
        //        // console.log(r.username +'------'+ r.email);
        //        obj.name = r.username;
        //        obj.email =  r.email;
        //  }
        //  console.log(obj);
        //  console.log(body);
        
        ctx.body = res;
        
    }

}


module.exports = test;