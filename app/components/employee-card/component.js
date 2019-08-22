import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',

  classNames: ['employee-card'],

  actions: {
    /** 
     * Call route action and navigate to employee.
     *
     * @method visitEmployee
     * @param {Object} employee
     */
    visitEmployee(employee) {
      this.visit(employee)
    }
  }
});
