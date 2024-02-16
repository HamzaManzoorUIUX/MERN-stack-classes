import { Sequelize,DataTypes } from "sequelize";
const sequelize = new Sequelize('softicera', 'root', 'ali', {
    host: 'localhost',
    dialect: "mariadb"
});
const User = sequelize.define('User', {
    // Model attributes are defined here
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profilePicture:{
        type:DataTypes.STRING,
        allowNull:true
    },
    userPhoneNumber:{
        type:DataTypes.STRING,
        allowNull:true
    }
});
// (async () => {
//     await sequelize.sync({ force: true });
//     // Code here
//   })();
export default User;