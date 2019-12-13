module.exports = app => {
//   schema: {
//     name: Sequelize.STRING(30)
// }, options: {
//     timestamps: false
//   }
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
    // schema: {
    //     id: {
    //         type: Sequelize.INTEGER,
    //         autoIncrement: true,
    //         allowNull: false,
    //         primaryKey: true,
    //         unique: true,
    //     },
    //     username: {
    //         type: Sequelize.STRING,
    //         field: 'username' 
    //     },
    //     email:{
    //         type: Sequelize.STRING
    //     },
    // },
    // options: {
    //     freezeTableName: true
    // }
};
// const Sequelize = require("sequelize");
// module.exports = app => {
//     schema:{
//         id: {
//             type: Sequelize.INTEGER;
//             autoIncrement: true;
//             allowNull: false,
//             primaryKey: true,
//             unique: true,
//         },
//         username: {
//             type: Sequelize.STRING;
//             field: 'username' 
//         };
//         email:{
//             type: Sequelize.STRING
//         };
//     };
//     options:{
//         freezeTableName: true
//     };
// };