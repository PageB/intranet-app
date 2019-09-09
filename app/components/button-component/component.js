import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',

  type: 'button',

  attributeBindings: [
    'type',
    'disabled'
  ],

  classNames: ['btn-default'],

  classNameBindings: [
    'isVisit:btn-visit',
    'isView:btn-view',
    'isCreate:btn-create',
    'isDelete:btn-delete',
    'isEdit:btn-edit',
    'isModal:btn-modal',
    'addClassNames'
  ],

  /**
   * Adds custom classes passed to the component
   *
   * @property addClassNames
   * @type {String}
   * @default ''
   */
  addClassNames: '',

  /**
   * The property can be passed where the component is used.
   * If the property has a value of `true`, the component enables
   * a css class to add styles and color of the button.
   *
   * @property isVisit
   * @type {Boolean}
   * @default false
   * @public
   */
  isVisit: false,

  /**
   * The property can be passed where the component is used.
   * If the property has a value of `true`, the component enables
   * a css class to add styles and color of the button.
   *
   * @property isView
   * @type {Boolean}
   * @default false
   * @public
   */
  isView: false,

  /**
   * The property can be passed where the component is used.
   * If the property has a value of `true`, the component enables
   * a css class to add styles and color of the button.
   *
   * @property isCreate
   * @type {Boolean}
   * @default false
   * @public
   */
  isCreate: false,

  /**
   * The property can be passed where the component is used.
   * If the property has a value of `true`, the component enables
   * a css class to add styles and color of the button.
   *
   * @property isDelete
   * @type {Boolean}
   * @default false
   * @public
   */
  isDelete: false,

  /**
   * The property can be passed where the component is used.
   * If the property has a value of `true`, the component enables
   * a css class to add styles and color of the button.
   *
   * @property isEdit
   * @type {Boolean}
   * @default false
   * @public
   */
  isEdit: false,

  /**
   * The property can be passed where the component is used.
   * If the property has a value of `true`, the component enables
   * a css class to add styles and color of the button.
   *
   * @property isEdit
   * @type {Boolean}
   * @default false
   * @public
   */
  isModal: false,

  /**
   * Handles the method which is passed to the component
   *
   * @method click
   */
  click() {
    this.btnAction();
  }
});