import Controller from '@ember/controller';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';
import { inject as service } from '@ember/service';

export default Controller.extend(NotifyUser, ErrorHandler, {
  /**
   * Handling spinner status
   *
   * @property spinnerService
   * @public
   */
  spinnerService: service(),

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
      this.get('spinnerService').showSpinner();

      employee.save()
      .then(() => {
        this.notifyUser('The employee has been successfully updated.', "success");
        this.set('employee', null);
      })
      .catch((error) => {
        this.handleErrors(error);
        this.set('employee', null);
      })
      .finally(() => {
        // this.get('spinnerService').hideSpinner();
      });
    },

    /**
     * TODO: Navigate to the selected employee.
     *
     * @method deleteEmployee
     * @param {Object} employee
     */
    deleteEmployee(employee) {
      this.get('spinnerService').showModal();

      employee.deleteRecord();
      employee.save()
      .then(() => {
        this.notifyUser('The employee has been successfully deleted.', "success");
        this.set('employee', null);
      })
      .catch((error) => {
        this.handleErrors(error);
        this.set('employee', null);
      })
      .finally(() => {
        this.get('spinnerService').hideModal();
      });
    }
  }

});
