import Route from '@ember/routing/route';
import NotifyUser from '../../mixins/notify-user';
import ErrorHandler from '../../mixins/handle-errors';

export default Route.extend(NotifyUser, ErrorHandler, {
  actions: {
    /**
      Create and save employee to the API.
      @method createEmployee
      @param {Object} employee
      @return {DS.PromiseManyArray}
    */
    createEmployee(data) {
    const employee = this.store.createRecord('employee', data); 
      employee.save()
      .then(() => {
        data = {};
        this.notifyUser('Member has been saved successfully', "success");
      })
      .catch((error) => {
        console.log(error)
        this.handleErrors(error);
      });
    }
  }
});
