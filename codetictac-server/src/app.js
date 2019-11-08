import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes";

class AppController {
    constructor() {
        this.express = express();
        this.connectMongo();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(cors());
    }

    async connectMongo() {
        try {
            await mongoose.connect(
                `mongodb://${process.env.MONGO_URL}/${process.env.MONGO_NAME}`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            );
        } catch (err) {
            console.log(err);
        }
    }

    routes() {
        this.express.use(routes);
    }
}

export default new AppController().express;
