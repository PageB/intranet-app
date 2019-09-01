import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
 /**
   Text label for OK button.
   @property okBtnText
   @type String
   @default "OK"
 */
okBtnText: computed('', function() {
  return 'OK'
}),

/**
   Text label for Cancel button.
  @property cancelBtnText
  @type String
  @default "Cancel"
*/
cancelBtnText: computed('', function() {
  return 'Cancel'
}),

/**
  @property showOKBtn
  @type Boolean
  @default true
*/
showOKBtn: true,

/**
  @property showCancelBtn
  @type Boolean
  @default true
*/
showCancelBtn: true,

/**
  @property modalHeader
  @type String
  @default ''
*/
modalHeader: '',

actions: {

  /**
    ok action, called when the `ok` button is pressed, will call through
    to a `ok` action passed in as an attribute
    @method ok
  */
  ok(event) {
   this.sendAction('ok', event);
  },

  /**
    Send a close action
    @method closeModal
  */
  close() {
    this.sendAction('close');
  },

  /**
    Cancel action, called when the `cancel` button is pressed, will call through
    to a `cancel` action passed in as an attribute
    @method cancel
  */
  cancel(event) {
   this.sendAction('cancel', event);
  }
}
});
