import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'div',

  classNames: ['nav-notification'],

  notifications: service(),

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
    navigateToRoute(navToRoute, model) {
      this.get('notificationAction')(navToRoute, model);
    }
  }
});
