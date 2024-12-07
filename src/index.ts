import App from "./App";

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error.message);
});

const app = new App();
app.start();
