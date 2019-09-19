import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
 /**
  * The currently set of all employees.
  *
  * @property allEmployes
  * @type {Array}
  */
  allEmployes: null,

  /**
   * Init service hook
   *
   * @method init
   */
  init() {
    this._super(...arguments);

    this.allEmployes = [];
  },

 /**
  * Store only employees with bithday.
  *
  * @property employeesWithBirthday
  * @type {Array}
  */
  employeesWithBirthday: computed('allEmployes', function() {
    return this.get('allEmployes').filterBy('hasBirthday', true)
  })
});
