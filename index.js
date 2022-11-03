const express = require('express');
const app = express();
const DataBase = require('./DataBase/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./Routes/UserRoutes');
const userModel = require('./Schemas/UserSchema');
const env=require("dotenv")
env.config({path:"./config.env"})

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', userRoutes);

app.listen(5000, () => {
  console.log('Server is running at port 5000');
});
