import Controller from '@ember/controller';

export default Controller.extend({
  singInError: '',
  
  actions: {
    userSingIn(username, password) {
      console.log(username)
      console.log(password)
      console.log('Sign in.')
    }
  }
});
