import Controller from '@ember/controller';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';
import { inject as service } from '@ember/service';

export default Controller.extend(NotifyUser, ErrorHandler, {
  /**
   * Spinner service injection.
   *
   * @property spinnerService
   * @public
   */
  spinnerService: service(),

  /**
   * Store admin-form component headers configuration.
   *
   * @property headerOptions
   */
  headerOptions: null,

  /**
   * Init controller hook
   *
   * @method init
   */
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
     * Validate user for changes to popup the correct toast message.
     * anbd if user hasDirtyAttributes save it to the API.
     *
     * @method updateEmployee
     * @param {Object} employee
     */
    updateEmployee(employee) {
      if (employee.hasDirtyAttributes) {
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
          this.get('spinnerService').hideSpinner();
        });
      } else {
        this.notifyUser('Save is aborted, user has not been updated.', "warning");
      }
    },

    /**
     * Delete employee record.
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
