import Service from '@ember/service';

export default Service.extend({
  /**
   * Current spinner status
   *
   * @property status
   * @type {Boolean}
   * @default false
   */
  status: false,

  /**
   * Set spinner status to visible
   *
   * @method showSpinner
   */
  showSpinner() {
    this.set('status', true);
  },

  /**
   * Set spinner status to hidden
   *
   * @method hideSpinner
   */
  hideSpinner() {
    this.set('status', false);
  }
});
