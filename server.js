const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const product = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", product);

app.listen(8000, console.log("server started on port 3000"));
