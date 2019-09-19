import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    /**
     * Redirect user ot home route on success.
     *
     * @method onSuccesRedirectUser
     */
    onSuccesRedirectUser() {
      this.transitionTo('home');
    }
  }
});
