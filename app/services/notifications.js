import Service from '@ember/service';

/**
  * Provides a mechanism to get/set the current `organisation` that is being viewed.
  * Inject service into target route and adapters.
  @class OrganisationService
  @extends Ember.Service
  @module Services
*/
export default Service.extend({
  /**
   The currently set notification data.
    @property notificationsData
    @type {Array}
  */
  notificationsData: null
});
