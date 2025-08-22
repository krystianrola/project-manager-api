const {Sequelize} = require("sequelize");
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    "postgresql://postgres:mysecretpassword@db:5432/projectmanager_db?schema=public",
    {
        dialect: "postgres",
        logging: false
    }
);

module.exports = sequelize;