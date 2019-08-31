import Ember from 'ember';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Ember.Component.extend({
  tagName: 'div',

  classNames: ['nav-notification'],

  notifications: service(),

  models: computed('notifications.notificationsData', function() {
    return this.get('notifications.notificationsData');
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
