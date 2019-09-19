import Controller from '@ember/controller';
import { inject } from '@ember/service';
import NotifyUser from '../mixins/notify-user';

export default Controller.extend(NotifyUser, {
  /**
   * Session service injection.
   *
   * @property session
   */
  session: inject('session'),

  /**
   * Default error message.
   *
   * @property singInError
   */
  singInError: '',

  actions: {
    /**
     * Sing in user.
     *
     * @method userSingIn
     * @param {String} email
     * @param {String} password
     */
    userSingIn(email, password) {
      this.set('email', email);
      this.set('password', password);

      const credentials = this.getProperties('email', 'password');
      const authenticator = 'authenticator:token';

      this.get('session').authenticate(authenticator, credentials).then(() => {
        this.notifyUser('Successfully login', "success");
        this.send('onSuccesRedirectUser');
      }).catch(() => {
        this.set('singInError', 'Incorrect email or password.');
      });
    }
  }
});
