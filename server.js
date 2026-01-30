import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.set("trust proxy", true); // poprawne IP za proxy
app.use(express.json());      // obsługa JSON w body

// Middleware logujący IP
app.use((req, res, next) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  console.log("Request IP:", ip);
  next();
});

// Routing
app.get("/", (req, res) => {
  res.json({ message: "API działa" });
});

app.post("/data", (req, res) => {
  res.json({
    received: req.body,
    status: "OK"
  });
});

// Start serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});