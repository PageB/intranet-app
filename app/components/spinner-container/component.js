import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  /**
   * Handling spinner status
   *
   * @property spinnerService
   * @public
   */
  spinnerService: service(),

  /**
   * Show spinner component
   *
   * @property showSpinner
   * @type {Boolean}
   */
  showSpinner: alias('spinnerService.status')
});
