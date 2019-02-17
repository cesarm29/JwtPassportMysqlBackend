//libs
import Sequelize from 'sequelize';
import UserModel from './models/user';
//data server
const sequelize = new Sequelize('db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
//create table
const User = UserModel(sequelize, Sequelize);
//sync
sequelize.sync().then(() => {
  console.log(`Users db and user table have been created`);
});

module.exports = User;
