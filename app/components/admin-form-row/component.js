import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  /**
   * Hide edit form.
   *
   * @property editFormIsVisible
   */
  editFormIsVisible: false,

  actions: {
    /**
     * Show edit form action.
     *
     * @method showEditForm
     */
    showEditForm() {
      this.set('editFormIsVisible', true);
    },

    /**
     * Delete employee closure action.
     *
     * @method deleteEmployee
     * @param {Object} employee
     */
    deleteEmployee(employee) {
      this.delete(employee);
    },

    /**
     * Update employee closure action.
     *
     * @method updateEmployee
     * @param {Object} employee
     */
    updateEmployee(employee) {
      this.hideAllForms();
      this.update(employee)
    },

    /**
     * Confirm deletion of employee.
     *
     * @method confirmEmployeeDelete
     */
    confirmEmployeeDelete() {
      this.set('showModal', true);
    },

    /**
     *  Close modal dialog.
     *
     * @method closeModalDialog
     */
    closeModalDialog() {
      this.set('showModal', false);
    }
  }
});
