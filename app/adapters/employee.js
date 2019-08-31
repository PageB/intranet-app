import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  /**
   * Builds a URL for `engine-taxrate` model
   *
   * @method buildURL
   * @param {String} modelName
   * @param {String|Array|Object} id
   * @param {DS.Snapshot|Array} snapshot
   * @param {String} requestType
   * @param {Object} query
   * @returns {String} url
   */
  buildURL(modelName, id, snapshot, requestType, query) {
    const organisationId = this.get('session.data.authenticated.user.organisation');
    
    if (id) {
      return `${this.host}/organisations/${organisationId}/employees/${id}`
    } else {
      return `${this.host}/organisations/${organisationId}/employees`
    }
  }
});
