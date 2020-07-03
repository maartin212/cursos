import express, { Application } from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index.router';
import postsRouter from './routes/posts.router';

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', process.env.PORT || this.port || 3000);
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', indexRouter);
    this.app.use('/posts', postsRouter);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server running on port:', this.app.get('port'));
  }
}
