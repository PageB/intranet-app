import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('home', { path: '' });

  this.route('employees', { resetNamespace: true }, function() {
    this.route('employee', { path: '/:employee_id' });
  });
});

export default Router;
