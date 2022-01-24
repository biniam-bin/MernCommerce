const express = require("express")
const errorMiddleware = require("./middleware/error")

app = express();

app.use(express.json());
const product = require("./routes/productRouter");
app.use("/api/v1", product)



//middleware for errors
app.use(errorMiddleware)

module.exports = app;