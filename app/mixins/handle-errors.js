import Mixin from '@ember/object/mixin';
import NotifyUser from '../mixins/notify-user';

export default Mixin.create(NotifyUser, {
  /**
   * Handle and process error, show toast message.
   *
   * @method handleErrors
   * @param {Object} error
   */
  handleErrors: function (error) {
    if (error) {
      error.errors.forEach((error)=> {
        if (error.title !== undefined && error.title !== '') {
          this.notifyUser('Your request has been rejected.' + error.title + '. Please try again.', "error");
        }

        // trigger invalide method if token is being expired
        if (error.invalidate) {
          this.get('session').invalidate();
        }
      });
    }
  }
});
