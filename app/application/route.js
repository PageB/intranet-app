import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  afterModel() {
    const isAuthenticated = this.get('session.isAuthenticated');

    if (isAuthenticated) {
      this.transitionTo('home');
    } else {
      this.transitionTo('login');
    }
  },

  setupController(controller, model) {
    this._super(controller, model);

    const isAuthenticated = this.get('session.isAuthenticated');

    this.controllerFor('application').set('isAuthenticated', isAuthenticated);
  },


  actions: {
    /**
      Navigate to specific route.
      TO DO: Add check if model is empty!
      @method visitRoute
      @param {Object} model
      @param {String} route
    */
    visitRoute(navToRoute, model) {
      this.transitionTo(navToRoute, model.get('id'));
    }
  }
});
