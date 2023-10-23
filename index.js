const express = require('express');
const appRoute = require('./routes/route.js')
const cors = require("cors");
const { connectDB } = require('./config/database.js');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,}))
app.use('/tedx/lnmiit', appRoute);

app.get('/', (req, res) => {
    res.send("TEDxLNMIIT2k23 server running!!!");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
