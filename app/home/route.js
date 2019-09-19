import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  /**
   * Notification service injection.
   *
   * @property notifications
   */
  notifications: service(),

  /**
   * Spinner service injection.
   *
   * @property spinnerService
   */
  spinnerService: service(),

 /**
  * Router model hook.
  *
  * @method model
  * @return {DS.PromiseManyArray}
  */
  model() {
    return hash({
      employees: this.store.findAll('employee')
    });
  },

 /**
  * Router afterModel hook.
  *
  * @method afterModel
  */
  afterModel(model) {
    if (model.employees.length) {
      this.get('notifications').set('allEmployes', model.employees)
    }
  },

 /**
  * Router setupController hook.
  *
  * @method setupController
  */
  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      'randomEmployees': this._findRandomRecords(model.employees, 3),
      'lastEmployees': this._findLastRecords(model.employees, 3)
    });
  },

 /**
  * Find and return specific count of records
  * @method _findLastRecords
  * @param {Object} model
  * @param {Integer} step
  * @return {Array}
  * @private
  */
  _findLastRecords(model, step) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;

    if (modelLen > step) {
      return modelArr.slice(modelLen - 3, modelLen);
    } else {
      return modelArr;
    }
  },

 /**
  * Find and return specific count of records
  * @method _findFirstRecords
  * @param {Object} model
  * @param {Integer} step
  * @return {Array}
  * @private
  */
  _findFirstRecords(model, step) {
    const modelArr = model.toArray();

    return modelArr.slice(0, step);
  },

 /**
  * Find and return specific count of random records
  * @method _findRandomRecords
  * @param {Object} model
  * @param {Integer} step
  * @return {Array}
  * @private
  */
  _findRandomRecords(model, step) {
    const modelArr = model.toArray();
    const modelLen = modelArr.length;

    return this._shuffleArray(modelArr.slice(0, modelLen-step)).slice(0, step);
  },

 /**
  * Shuffle array
  * @property array
  * @return {Array}
  */
  _shuffleArray(array) {
  var m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
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
