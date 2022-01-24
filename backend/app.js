const express = require("express")
app = express();

app.use(express.json());
const product = require("./routes/productRouter");
app.use("/api/v1", product)


module.exports = app;