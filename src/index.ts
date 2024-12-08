import App from "./app";

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error.message);
});

const app = new App();
app.start();
