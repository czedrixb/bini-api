require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const memberRoute = require("./routes/memberRoute");
const albumRoute = require("./routes/albumRoute");
const cors = require('cors');
const app = express();

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

// var corsOptions = {
//     origin: ['http://localhost:9000', 'http://example.com'],
//     optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/members', memberRoute);
app.use('/api/albums', albumRoute);

app.get("/", (req, res) => {
    res.send("Hello Bini API! :3");
});

mongoose.set('strictQuery', false);
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log('connected to database')
        app.listen(PORT, () => {
            console.log(`Node API running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
