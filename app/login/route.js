import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    onSuccesRedirectUser() {
      this.transitionTo('home');
    }
  }
});
