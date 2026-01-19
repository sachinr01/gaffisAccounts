require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

/* =========================
   CORS (LIVE SERVER)
========================= */
app.use(
  cors({
    origin: [
      "https://gaffis.in",
      "https://www.gaffis.in",
      "http://localhost:3000"
    ],
    credentials: true,
  })
);

/* =========================
   Middleware
========================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   Health Check (IMPORTANT)
========================= */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully 🚀",
  });
});

/* =========================
   Routes
========================= */
app.use("/api/auth", authRoutes);

/* =========================
   Server Start
========================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
