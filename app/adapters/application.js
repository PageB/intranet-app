import DS from 'ember-data';
import { inject as service } from '@ember/service';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';
import config from 'intranet-app/config/environment';

export default DS.RESTAdapter.extend(TokenAuthorizerMixin, {
  /**
   * Session service injection.
   *
   * @property session
   */
  session: service(),

  /**
   * Store host url.
   *
   * @property host
   */
  host: config.host
});
