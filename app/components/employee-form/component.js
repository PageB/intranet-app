import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',

  classNames: ['admin-form'],

  // TODO: Add doc block.
  data: null,

  // TODO: Add doc block.
  isCreateForm: true,

  /**
   * Init component hook
   *
   * @method init
   */
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
    },

    /**
     * Update date and set birthday date.
     *
     * @method updateBirthday
     * @param {String} value
     */
    updateBirthday(value) {
      this.set('data.birthday', value);
    }
  }
});
