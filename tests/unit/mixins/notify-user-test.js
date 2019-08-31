import EmberObject from '@ember/object';
import NotifyUserMixin from 'intranet-app/mixins/notify-user';
import { module, test } from 'qunit';

module('Unit | Mixin | notify-user', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let NotifyUserObject = EmberObject.extend(NotifyUserMixin);
    let subject = NotifyUserObject.create();
    assert.ok(subject);
  });
});
