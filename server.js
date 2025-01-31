const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


//dotenv config
dotenv.config()

//test object
const app = express();

//middlewares
app.use(cors())
app.use(express.json())



//routes
app.use("/api/v1/portfolio", require('./routes/portfolioRoute'))



const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})