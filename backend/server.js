let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
const createError = require('http-errors');

// Express Route
const usersRoute = require('../backend/routes/users.routes');
const categoriesRoute = require('../backend/routes/category.routes');
const employeesRoute = require('../backend/routes/employees.routes');
const userPhotoUploadRoute = require('../backend/routes/userPhoto.routes');
const categoryPhotoUploadRoute = require('../backend/routes/categoryPhoto.routes');
const employeePostRoute = require('./routes/employeeposts.routes');
const finderPostRoute = require('../backend/routes/finderposts.routes');
const homescreenRoute = require('../backend/routes/homescreen.routes');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
// app.use(express.json());
app.use(usersRoute);
app.use(categoriesRoute);
app.use(employeesRoute);
app.use(userPhotoUploadRoute);
app.use(categoryPhotoUploadRoute);
app.use(employeePostRoute);
app.use(finderPostRoute);
app.use(homescreenRoute);

// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});