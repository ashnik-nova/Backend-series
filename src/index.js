import mongoose  from "mongoose";
import express from 'express';
import connect_DB from "./db/index.js";

const app = express()

connect_DB()
.then( () => {
    console.log("MONGODB connection successful.");
    app.listen( process.env.PORT || 8000 , () => {
        console.log(`The Server is runnung on the ${process.env.PORT}`);
    })
} )
.catch(
    (error) => {
        console.log(error);
    }
);