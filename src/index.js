import mongoose  from "mongoose";
import express from 'express';
import connect_DB from "./db/index.js";

const app = express()

connect_DB();