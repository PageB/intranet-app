import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'div',

  classNames: ['employee-data'],

  property: '',

  propertyTitle: computed('property', function() {
    const titles = {
      song: 'A song for good mood',
      book: 'A favorite book',
      thought: 'A thought for inspiration'
    };

    return titles[this.property] ? titles[this.property] : this.property;
  }),

  employee: null
});
