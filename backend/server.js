const app = require('./app')
const dotenv = require('dotenv');
const connectDatabase = require("./config/database")


//Config
dotenv.config({path: "backend/config/config.env"})

//connect db
connectDatabase();

//listen to port
app.listen(process.env.PORT, () => {
    console.log(`server running on http://localost:${process.env.PORT}`)
})