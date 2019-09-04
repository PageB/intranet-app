import Controller from '@ember/controller';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';

export default Controller.extend(NotifyUser, ErrorHandler, {
  showModal: false,
  
  employee: null,

  headerOptions: null,

  init() {
    this._super(...arguments);

    this.set('headerOptions', [
      { name: 'Image', size: 's'},
      { name: 'First name', size: 's'},
      { name: 'Last name', size: 's'},
      { name: 'Team', size: 's'},
      { name: 'Controls', size: 'm'}
    ])
  },
  
  actions: {
    /**
     * TODO: Navigate to the selected employee.
     *
     * @method updateEmployee
     * @param {Object} employee
     */
    updateEmployee(employee) {
      debugger;
      employee.save()
      .then(() => {
        this.notifyUser('The employee has been successfully updated.', "success");
        this.set('employee', null);
      })
      .catch((error) => {
        this.handleErrors(error);
        this.set('employee', null);
      });
    },

    /**
     * TODO: Navigate to the selected employee.
     *
     * @method deleteEmployee
     * @param {Object} employee
     */
    deleteEmployee(employee) {
      employee.deleteRecord();
      employee.save()
      .then(() => {
        this.notifyUser('The employee has been successfully deleted.', "success");
        this.set('employee', null);
      })
      .catch((error) => {
        this.handleErrors(error);
        this.set('employee', null);
      });
    }
  }

});
