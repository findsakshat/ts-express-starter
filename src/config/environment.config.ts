import dotenv from "dotenv";

class EnvironmentConfig {
  private static instance: EnvironmentConfig;

  private constructor() {
    dotenv.config({ path: ".env" })
  }

  public static getInstance(): EnvironmentConfig {
    if (!EnvironmentConfig.instance) {
      EnvironmentConfig.instance = new EnvironmentConfig();
    }

    return EnvironmentConfig.instance;
  }

  public get PORT(): number {
    return parseInt(process.env.PORT || "8080");
  }

  public get MONGODB_URI(): string {
    if (!process.env.MONGODB_URI) {
      throw new Error("MongoDB URI is not defined");
    }

    return process.env.MONGODB_URI
  }

  public get NODE_ENV(): string {
    return process.env.NODE_ENV || "development";
  }
}

export default EnvironmentConfig.getInstance();
