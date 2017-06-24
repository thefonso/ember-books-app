import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',


  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  isValidForm: Ember.computed.and('isValidEmail','isMessageEnoughLong'),

  isDisabled: Ember.computed.not('isValidForm'),


  actions: {
    sendMessage(){
      var emailAddress = this.get('emailAddress');
      var message = this.get('message');

      alert('Sending your message in progress... ');

      var responseMessage = 'To: ' + emailAddress + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
