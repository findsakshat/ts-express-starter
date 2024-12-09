import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import environmentConfig from "./config/environment.config";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlwares();
    this.initializeRoutes();
  }

  private initializeMiddlwares(): void {
    // === MIDDLEWARES ===
    this.app.use(morgan(environmentConfig.NODE_ENV === "development" ? "dev" : "common"))

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    // === HEALTH CHECK ROUTE ===
    this.app.get("/api/health", (req: Request, res: Response): any => {
      return res.status(200).json({ status: "OK" });
    });

    // === ROUTES ===
  }

  public async start(): Promise<void> {
    try {
      // === CONNECT TO THE DATABASE ===
      const connection = await mongoose.connect(environmentConfig.MONGODB_URI);
      console.log("✅ Successfully connected to MongoDB Database");

      // === LISTEN TO A PORT NUMBER ===
      this.app.listen(environmentConfig.PORT, () => {
        console.log(`✅ Server is up and running on http://localhost:${environmentConfig.PORT}`)
      })
    } catch (error) {
      console.log("❌ Failed to start the server");
      // process.exit(1);
    }
  }
}

export default App;