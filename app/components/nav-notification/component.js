import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'div',

  classNames: ['nav-notification'],

  /**
   * Notifications service injection.
   *
   * @property session
   */
  notifications: service(),

  /**
   * Load models with bithday.
   *
   * @property models
   */
  models: computed('notifications.employeesWithBirthday', function() {
    return this.get('notifications.employeesWithBirthday');
  }),

  actions: {
    /**
     * Navigate to route.
     *
     * @method navigateToRoute
     * @param model
     * @param route
     */
    navigateToRoute(model) {
      this.get('notificationAction')('employees.employee', model);
    }
  }
});
