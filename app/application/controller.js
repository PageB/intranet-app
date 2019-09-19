import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  /**
   * Session service injection.
   *
   * @property session
   */
  session: service(),

  /**
   * Session authentication.
   *
   * @property isAuthenticated
   */
  isAuthenticated: alias('session.isAuthenticated')
});
