const app = require('./app')
const dotenv = require('dotenv');
const connectDatabase = require("./config/database")


process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server");
    process.exit(1);
})

//Config
dotenv.config({path: "backend/config/config.env"})


//connect db
connectDatabase();

//listen to port
const server = app.listen(process.env.PORT, () => {
    console.log(`server running on http://localost:${process.env.PORT}`)
})


process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server");
    server.close(() => {
        process.exit(1);
    })
})