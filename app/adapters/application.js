import DS from 'ember-data';
import { inject as service } from '@ember/service';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.RESTAdapter.extend(TokenAuthorizerMixin, {
  session: service(),

  host: 'http://localhost:3000'
});
