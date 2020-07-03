const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const hbsHelpers = require('./helpers/hbsHelpers');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const customerRouter = require('./routes/customer.router');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs({
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: hbsHelpers,
  }),
);
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  myConnection(
    mysql,
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      port: 3306,
      database: 'nodemysql',
    },
    'single',
  ),
);

// Routes
app.use('/', customerRouter);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting server
app.listen(app.get('port'), () => {
  console.log('Server running on port:', app.get('port'));
});
