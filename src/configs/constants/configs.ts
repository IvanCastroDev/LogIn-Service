import { ConnectOptions } from "mongoose";
import MongoConnectionOptions from "../../interfaces/mongo.interfaces";
import expressConfigs from "../../interfaces/express.interfaces";
import * as dotenv from 'dotenv';

dotenv.config()

// Mongo DB configurations
const MONGO_DB = process.env.MONGO_DB || "localhost";
const MONGO_USERNAME = process.env.MONGO_USERNAME || "root";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "password";

export const MONGO_OPTIONS: ConnectOptions = {
    socketTimeoutMS: 30000,
    maxPoolSize: 50,
    autoIndex: false,
    dbName: MONGO_DB
};

export const MONGO: MongoConnectionOptions = {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DB}.fd0fgzn.mongodb.net/?retryWrites=true&w=majority`
};

// Express server configuration
const port = parseInt(process.env.PORT || "8080");

export const EXPRESS: expressConfigs = {
    port: port
};