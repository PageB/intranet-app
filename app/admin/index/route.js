import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
 /**
  * Router model hook.
  * @method model
  * @return {DS.PromiseManyArray}
  */
  model() {
    return hash({
      employees: this.store.findAll('employee')
    });
  }
});
