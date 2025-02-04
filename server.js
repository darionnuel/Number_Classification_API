const express = require("express");
const cors = require("cors");
const classifyNumberRoute = require("./routes/classifyNumber");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", classifyNumberRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
