import { Sequelize, DataTypes } from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

export class Database {

    constructor() {
        Database.database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: "mysql"
        })

        this.initializeDatabase()
    }

    initializeDatabase() {

        Database.database.authenticate().then(() => {
            console.log('Database connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });

        Database.animal = Database.database.define("animal", {
            name:{
                type: DataTypes.STRING,
                allownull: false
            },
            characteristics: {
                type: DataTypes.TEXT('long'),
                allownull: true
            },
            pixelArtContent: {
                type: DataTypes.TEXT('long'),
                allownull: false
            },
            imageContent: {
                type: DataTypes.TEXT('long'),
                allownull: false
            },
            description: {
                type: DataTypes.TEXT('long'),
                allownull: false
            },
            region: {
                type: "VARCHAR(250)",
                allownull: true
            }
        })

        Database.plant = Database.database.define("plant", {
            name:{
                type: DataTypes.STRING,
                allownull: false
            },
            characteristics: {
                type: DataTypes.TEXT('long'),
                allownull: true
            },
            pixelArtContent: {
                type: DataTypes.TEXT('long'),
                allownull: false
            },
            imageContent: {
                type: DataTypes.TEXT('long'),
                allownull: false
            },
            description: {
                type: DataTypes.TEXT('long'),
                allownull: false
            },
            region: {
                type: "VARCHAR(250)",
                allownull: true
            }
        })

        Database.database.sync().then(() => {
            console.log('Tables created successfully!');
         }).catch((error) => {
            console.error('Unable to create tables: ', error);
         });
    }
}