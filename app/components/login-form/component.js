import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  username: '',

  password: '',

  validateUsername(email) {
    return email.length >= 8;
  },

  validatePassword(password) {
    return password.length >= 8 && !password.includes('password');
  },

  actions: {
    closeError() {
      this.set('error', '');
    },
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
