import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',

  classNames: ['admin-form'],

  /**
   * Store employee data entered in the form.
   *
   * @property data
   */
  data: null,

  /**
   * Create from property.
   *
   * @property isCreateForm
   */
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
     * Create employee closure action.
     *
     * @method sendFormData
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
