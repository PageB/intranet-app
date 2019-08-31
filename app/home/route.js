import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  notifications: service(),

  /**
    Fetches all `employee` and 'news' from the store.

    @method model
    @return {DS.PromiseManyArray}
  */
  model() {
    return hash({
      employees: this.store.findAll('employee')
    });
  },

  afterModel(model) {
    if (model.employees.length) {
      this.get('notifications').set('notificationsData', model.employees)
    }
  },
  
  actions: {
    /**
     * Navigate to the selected employee.
     *
     * @method visitEmployee
     * @param {Object} employee
     */
    visitEmployee(employee) {
      this.transitionTo('employees.employee', employee.id);
    }
  }
});
