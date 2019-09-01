import Service from '@ember/service';
import { computed } from '@ember/object';

/**
  * Provides a mechanism to get/set of all employees.
  @class NotificationService
  @extends Ember.Service
  @module Services
*/
export default Service.extend({
  /**
    The currently set of all employees.
    @property allEmployes
    @type {Array}
  */
  allEmployes: null,

  /**
    Store only employees with bithday.
    @property employeesWithBirthday
    @type {Array}
  */
  employeesWithBirthday: computed('allEmployes', function() {
    return this.get('allEmployes').filterBy('hasBirthday', true)
  })
});
