import DS from 'ember-data';
import moment from 'moment';
import { computed } from '@ember/object';

const { Model } = DS;

export default Model.extend({
 /**
  * @property firstName
  * @type {String}
  */
  firstName: DS.attr('string'),

 /**
  * @property lastName
  * @type {String}
  */
  lastName: DS.attr('string'),

 /**
  * @property password
  * @type {String}
  */
  password: DS.attr('string'),

 /**
  * @property createdAt
  * @type {String}
  */
  createdAt: DS.attr('string'),

 /**
  * @property updatedAt
  * @type {String}
  */
  updatedAt: DS.attr('string'),

 /**
  * @property isStarter
  * @type {String}
  */
  isStarter: computed('createdAt', function () {
    const date = moment(this.get('createdAt'));
    const today = moment();
    const days = Math.round(moment.duration(today - date).asDays());

    return days < 90 ? true : false;
  }),

 /**
  * @property periodInCompany
  * @type {String}
  */
  periodInCompany: computed('createdAt', function () {
    const start = moment(this.get('createdAt'));
    const today = moment();
    const asDays = Math.round(moment.duration(today - start).asDays());
    const asMonths = Math.round(moment.duration(today - start).asMonths());
    const years = asMonths < 12 ? '' : Math.floor(asMonths / 12) + ' years ';
    const months = asMonths < 12 ? asMonths + ' months ' : asMonths % 12 + ' months';
    const days = asMonths < 1 ? asDays + ' days' : '';

    if (isNaN(asMonths)) {
      return '...';
    } else if (days) {
      return days;
    } else {
      return years + months;
    }
  }),

 /**
  * @property birthday
  * @type {String}
  */
  birthday: DS.attr('string'),

 /**
  * @property isBirthday
  * @type {String}
  */
  isBirthday: computed('birthday', function () {
    const today = moment();
    const birth = moment(this.get('birthday'));
    const isBirthday = (today.month() === birth.month()) && (today.date() === birth.date());

    return isBirthday;
  }),

 /**
  * @property hasBirthday
  * @type {String}
  */
  hasBirthday: computed('birthday', function () {
    const birthDate = moment(this.get('birthday'));
    const matrix = [
      moment(),
      moment().add(1, 'days'),
      moment().add(2, 'days'),
      moment().add(3, 'days'),
      moment().add(4, 'days'),
      moment().add(5, 'days'),
      moment().add(6, 'days'),
    ];
    let hasBirthday = false;

    matrix.forEach(el => {
      if ((el.month() === birthDate.month()) && (el.date() === birthDate.date())) {
        hasBirthday = true;
      }
    })

    return hasBirthday;
  }),

 /**
  * @property image
  * @type {String}
  */
  image: DS.attr('string'),

 /**
  * @property photo
  * @type {String}
  */
  photo: DS.attr('string'),

 /**
  * @property avatar
  * @type {String}
  */
  avatar: DS.attr('string'),

 /**
  * @property education
  * @type {String}
  */
  education: DS.attr('string'),

 /**
  * @property expertise
  * @type {String}
  */
  expertise: DS.attr('string'),

 /**
  * @property skills
  * @type {String}
  */
  skills: DS.attr('string'),

 /**
  * @property languages
  * @type {String}
  */
  languages: DS.attr('string'),

 /**
  * @property hobbies
  * @type {String}
  */
  hobbies: DS.attr('string'),

 /**
  * @property song
  * @type {String}
  */
  song: DS.attr('string'),

 /**
  * @property thought
  * @type {String}
  */
  thought: DS.attr('string'),

 /**
  * @property book
  * @type {String}
  */
  book: DS.attr('string'),

 /**
  * @property pet
  * @type {String}
  */
  pet: DS.attr('string'),

 /**
  * @property skype
  * @type {String}
  */
  skype: DS.attr('string'),

 /**
  * @property email
  * @type {String}
  */
  email: DS.attr('string'),

  // /**
  //   * @property periodInCompany
  //   * @type {String}
  //   */
  // position: DS.belongsTo('position'),

  // /**
  //   @property team
  //   @type DS.PromiseObject
  // */
  // team: DS.belongsTo('team'),

  // /**
  //   @property company
  //   @type DS.PromiseObject
  // */
  // company: DS.belongsTo('company'),

  //  /**
  //    @property hobbyGroups
  //    @type DS.PromiseManyArray
  //  */
  // hobbyGroups: DS.hasMany('hobby'),

  // /**
  //   @property educationGroups
  //   @type DS.PromiseManyArray
  // */
  // educationGroups: DS.hasMany('education')
});
