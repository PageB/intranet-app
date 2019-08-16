import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  singInError: '',

  session: inject('session'),

  actions: {
    userSingIn(email, password) {
      this.set('email', email);
      this.set('password', password);

      const credentials = this.getProperties('email', 'password');
      const authenticator = 'authenticator:token';

      this.get('session').authenticate(authenticator, credentials).then(() => {
        this.send('onSuccesRedirectUser');
      }).catch(() => {
        this.set('singInError', 'Incorrect email or password.');
      });
    }
  }
});
