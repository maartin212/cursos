import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';
import indexRoutes from './routes/index';
import tasksRoutes from './routes/tasks';

const app: express.Application = express();

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main.hbs',
    extname: '.hbs',
  }),
);
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoutes);
app.use('/tasks', tasksRoutes);

app.listen(app.get('port'), () =>
  console.log('Server running on port:', app.get('port')),
);
