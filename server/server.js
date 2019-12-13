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
    }

}

module.exports = server;