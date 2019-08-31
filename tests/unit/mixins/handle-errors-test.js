import EmberObject from '@ember/object';
import HandleErrorsMixin from 'intranet-app/mixins/handle-errors';
import { module, test } from 'qunit';

module('Unit | Mixin | handle-errors', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let HandleErrorsObject = EmberObject.extend(HandleErrorsMixin);
    let subject = HandleErrorsObject.create();
    assert.ok(subject);
  });
});
