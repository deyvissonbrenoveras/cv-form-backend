import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_ADDRESS}/cv-form?authSource=admin`,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (error) => {
        if (error) {
          console.log('Error while connecting database');
        }
      }
    );
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
