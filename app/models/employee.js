import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
