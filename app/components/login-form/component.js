import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  /**
   * Username default value.
   *
   * @property username
   */
  username: '',

  /**
   * Password default value.
   *
   * @property password
   */
  password: '',

  /**
   * Validate username.
   *
   * @method validateUsername
   * @param {String} email
   */
  validateUsername(email) {
    return email.length >= 8;
  },

  /**
   * Validate password.
   *
   * @method validatePassword
   * @param {String} password
   */
  validatePassword(password) {
    return password.length >= 8 && !password.includes('password');
  },

  actions: {
    /**
     * Reset error message on close.
     *
     * @method closeError
     */
    closeError() {
      this.set('error', '');
    },

    /**
     * Send username and password to login closure action.
     *
     * @method sendCredentials
     */
    sendCredentials() {
      const email = this.email;
      const password = this.password;
      const isValidUser = this.validateUsername(email)
      const isValidPass = this.validatePassword(password)

      if (isValidUser && isValidPass) {
        this.userSingIn(email, password)
      } else {
        this.set('error', 'Incorrect email or password.')
      }
    }
  }
});
