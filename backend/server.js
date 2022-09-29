import express from "express";
import { config } from "dotenv";
config();

import * as routes from './routes/index.js'
import {errorMiddleware} from "./middleware/index.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', routes.goalRoutes.router);

app.use(errorMiddleware.errorHandler);

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server started on port: ${port}.`);
});
