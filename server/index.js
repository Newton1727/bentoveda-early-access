const express = require("express");
const { getConnect } = require("./Db/mongoDb");
const subscriberRouter = require("./routes/subscribe");

const cors = require("cors");

require("dotenv").config();


const app = express();
app.use(cors());






app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/subscribe" , subscriberRouter);
const PORT = process.env.PORT || 3000;
getConnect();
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
    
})