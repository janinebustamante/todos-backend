const express = require('express');
const app = express();
const mongoose = require('mongoose'); //connects mongodb
const cors = require('cors');
require('dotenv').config();

app.use(cors());

mongoose.connection.once('open', () => console.log('Connected to MongoDB Atlas'));
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/healthcheck', (req, res) => res.send('OK'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API is now online on port ${port}`);
}) 