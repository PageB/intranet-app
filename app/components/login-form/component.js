import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  username: '',

  password: '',

  validateUsername(username) {
    return username.length >= 8;
  },

  validatePassword(password) {
    return password.length >= 8 && !password.includes('password');
  },

  actions: {
    closeError() {
      this.set('error', '');
    },
    sendCredentials() {
      const username = this.username;
      const password = this.password;
      const isValidUser = this.validateUsername(username)
      const isValidPass = this.validatePassword(password)

      if (isValidUser && isValidPass) {
        this.userSingIn(username, password)
      } else {
        this.set('error', 'Incorrect username or password.')
      }
    }
  }
});
