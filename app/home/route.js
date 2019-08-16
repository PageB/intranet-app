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
  }
});
