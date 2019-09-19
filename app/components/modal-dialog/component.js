import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  /**
   * Text label for OK button.
   *
   * @property okBtnText
   * @type String
   * @default "OK"
   */
  okBtnText: computed('', function() {
    return 'OK'
  }),

  /**
   * Text label for Cancel button.
   *
   * @property cancelBtnText
   * @type String
   * @default "Cancel"
   */
  cancelBtnText: computed('', function() {
    return 'Cancel'
  }),

  /**
   * Show button.
   *
   * @property showOKBtn
   * @type Boolean
   * @default true
   */
  showOKBtn: true,

  /**
   * Show button.
   *
   * @property showCancelBtn
   * @type Boolean
   * @default true
   */
  showCancelBtn: true,

  /**
   * Default modal header.
   *
   * @property modalHeader
   * @type String
   * @default ''
   */
  modalHeader: '',

  actions: {
    /**
     * Confirm closure action.
     * TODO
     * @method ok
     * @param {DOM event} event
     */
    ok(event) {
      this.sendAction('ok', event);
    },

    /**
     * Close closure action.
     * TODO
     * @method closeModal
     */
    close() {
      this.sendAction('close');
    },

    /**
     * Cancel closure action.
     * TODO
     * @method cancel
     * @param {DOM event} event
     */
    cancel(event) {
      this.sendAction('cancel', event);
    }
  }
});
