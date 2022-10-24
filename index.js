const express = require("express");
const connectDb = require("../config/db");
const config = require("config");

const app = express();

connectDb();

app.use(express.json({ extended: false }));
app.use("/", require("../Routes/url"));


const port = config.get("port");
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
