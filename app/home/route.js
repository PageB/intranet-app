import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
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
