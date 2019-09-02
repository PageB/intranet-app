import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',

  classNames: ['employee-create-form'],

  data: null,

  init() {
    this._super(...arguments);

    this.set('data', {});
  },

  actions: {
    /** 
     * TODO: Call route action and navigate to employee.
     *
     * @method createEmployee
     * @param {Object} data
     */
    createEmployee() {
      // TODO: Clear all inputs/data
      // this.hideAllForms();
      this.create(this.get('data'));
    }
  }
});
