// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
const express         = require('express'); // call express
const bodyParser      = require('body-parser'); // call body-parser
const cors = require('cors');

// call the files
require('./db'); // call db.js to connect to mongodb
const employeeRoute = require('./routes/employee.routes'); // call employee route

// initialize express
const app = express();

// MIDDLEWARE
//==========================================
// body parser middleware
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200' }));

// employee route
app.use('/employee', employeeRoute);

// START THE SERVER
//=====================================
app.listen(3000, () => console.log('Server started at port: ' + 3000));