import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  /**
    Fetches all `employee` from the store.

    @method model
    @return {DS.PromiseManyArray}
  */
  model(params) {
    return hash({
      employee: this.get('store').findRecord('employee', params.employee_id)
    });
  }
});
