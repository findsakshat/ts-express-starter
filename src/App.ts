import express, { Application, Request, Response } from "express";
import environmentConfig from "./config/environment.config";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlwares();
    this.initializeRoutes();
  }

  private initializeMiddlwares(): void {

    // Body parsing middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {

    // Health check route
    this.app.get("/api/health", (req: Request, res: Response): any => {
      return res.status(200).json({ status: "OK" });
    });
  }

  public async start(): Promise<void> {
    try {
      // Database connection

      // Listen to a PORT
      this.app.listen(environmentConfig.PORT, () => {
        console.log(`✅ Server is up and running on PORT: ${environmentConfig.PORT}`)
      })
    } catch (error) {
      console.log("❌ Failed to start the server");
      process.exit(1);
    }
  }
}

export default App;