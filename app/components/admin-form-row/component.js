import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  // TODO: Add doc block.
  viewFormIsVisible: false,

  // TODO: Add doc block.
  editFormIsVisible: false,

  // TODO: Add doc block.
  hideAllForms() {
    this.set('editFormIsVisible', false);
  },

  actions: {
    /**
     * TODO: Call route action and navigate to employee.
     *
     * @method showEditForm
     */
    showEditForm() {
      this.set('editFormIsVisible', true);
    },

    /**
     * TODO: Call route action and navigate to employee.
     *
     * @method deleteEmployee
     * @param {Object} employee
     */
    deleteEmployee(employee) {
      this.hideAllForms();
      this.delete(employee);
    },

    /**
     * TODO: Call route action and navigate to employee.
     *
     * @method updateEmployee
     * @param {Object} employee
     */
    updateEmployee(employee) {
      this.hideAllForms();
      this.update(employee)
    },

    /**
     * TODO: Navigate to the selected employee.
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
