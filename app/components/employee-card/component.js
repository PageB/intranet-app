import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',

  classNames: ['employee-card'],

  actions: {
    visitEmployee(employee) {
      console.log('This button is going to visit: ' + employee);
    }
  }
});
