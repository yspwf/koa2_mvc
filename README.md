# koa2_mvc
基于koa2的mvc
之前使用了基于koa2的MVC结构的 egg 框架，大概理解是egg的使用规范。所以这里我们也简单的实现基于koa2的MVC结构。

目录结构：

![images](https://user-gold-cdn.xitu.io/2019/12/13/16efed1fe29b0a2c?w=331&h=261&f=png&s=3142)
mvc的基本加载流程为：

```
koa2 --> app --> 引入config ---> 引入model ---> 引入server ---> 引入controller ---> 实列化 ---> 挂载到ctx ---> ctx全局使用
```

对以上mvc的应用。

```
//controller/home.js
class home{    
    async home(ctx, next){        
        const res = await ctx.Server.server.userInfo();        
        ctx.body = res;    
}}
module.exports = home;

//server/server.js
class server{    
        constructor(model){        
            this.model = model;   
         }

    async userInfo(){        
        try{            
            return this.model.User.findAll();        
        }catch(error){            
            console.log(error);        
        }    
}}
module.exports = server;

//model/user.js
module.exports = app => {    
    const { sequelize, Sequelize } = app;     
    const User = sequelize.define('user',{        
        id: {            
            type: Sequelize.INTEGER,            
            autoIncrement: true,            
            allowNull: false,            
            primaryKey: true,            
            unique: true        
        },       
        username: {            
            type: Sequelize.STRING,            
            field: 'username'         
        },        
        email:{            
            type: Sequelize.STRING        
        }    
   },{        
        freezeTableName: true    
   });    
    return User;
};
```

![](https://user-gold-cdn.xitu.io/2019/12/13/16efeecd62abf9f4?w=763&h=441&f=jpeg&s=22345)
