import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  /**
   * Notification service injection
   *
   * @property notifications
   * @type NotificationsService
   */
  notifications: service('notification-messages'),

 /**
  * Notifies the user.
  *
  * @method notifyUser
  * @param {String} errorMessage
  * @param {String} typeOfMessage
  * @private
  */
  notifyUser(errorMessage, typeOfMessage) {
    this.get('notifications').clearAll();

    if (typeOfMessage === "success") {
      this.get('notifications').success(errorMessage, {
        autoClear: true,
        clearDuration: 3000
      });
    }

    if (typeOfMessage === "info") {
      this.get('notifications').info(errorMessage, {
        autoClear: true,
        clearDuration: 3000
      });
    }

    if (typeOfMessage === "error") {
      this.get('notifications').error(errorMessage, {
        autoClear: true,
        clearDuration: 3000
      });
    }

    if (typeOfMessage === "warning") {
      this.get('notifications').warning(errorMessage, {
        autoClear: true,
        clearDuration: 3000
      });
    }
  }
});
