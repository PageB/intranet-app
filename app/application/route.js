import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  /**
   * Session service injection.
   *
   * @property session
   */
  session: service(),

 /**
  * Router afterModel hook.
  * @method afterModel
  * @method afterModel
  */
  afterModel() {
    const isAuthenticated = this.get('session.isAuthenticated');

    if (isAuthenticated) {
      this.transitionTo('home');
    } else {
      this.transitionTo('login');
    }
  },

  actions: {
   /**
    * Navigate to specific route.
    * @method visitRoute
    * @param {Object} model
    * @param {String} route
    */
    visitRoute(navToRoute, model) {
      this.transitionTo(navToRoute, model.get('id'));
    },

   /**
    * Sign out user.
    * @method signOut
    */
    signOut() {
      // TODO: API call for signout.
      this.get('session').invalidate();
      this.refresh();
    }
  }
});
