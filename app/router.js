import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('home');

  this.route('employees', { resetNamespace: true }, function() {
    this.route('employee', { path: '/:employee_id' });
  });

  this.route('articles', { resetNamespace: true }, function() {
    this.route('article', { path: '/:article_id' });
  });
  this.route('admin');
});

export default Router;
