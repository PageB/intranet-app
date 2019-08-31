import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  viewFormIsVisible: false,

  showFormIsVisible: false,

  hideAllForms() {
    this.set('viewFormIsVisible', false);
    this.set('showFormIsVisible', false);
  },
  
  actions: {
    /** 
     * TODO: Call route action and navigate to employee.
     *
     * @method showViewForm
     */
    showViewForm() {
      this.set('viewFormIsVisible', true);
      this.set('showFormIsVisible', false);
    },

    /** 
     * TODO: Call route action and navigate to employee.
     *
     * @method showEditForm
     */
    showEditForm() {
      this.set('viewFormIsVisible', false);
      this.set('showFormIsVisible', true);
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
