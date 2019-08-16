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
   The currently set instance of `organisation`.
   @property currentOrganisation
   @type OrganisationId
 */
currentOrganisation: null
});
