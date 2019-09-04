import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',

  classNames: ['admin-form'],

  data: null,

  isCreateForm: true,

  init() {
    this._super(...arguments);

    if (this.data === null) {
      this.set('data', {})
    }
  },

  actions: {
    /** 
     * TODO: Call route action and navigate to employee.
     *
     * @method createEmployee
     * @param {Object} data
     */
    sendFormData() {
      this.getData(this.get('data'));
    }
  }
});
