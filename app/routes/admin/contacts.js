import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('contact');
  },
  actions: {

    deleteContact(contact) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        contact.destroyRecord();
      }
    },

    sendMessage() {
      const email = this.get('emailAddress');
      const message = this.get('textMessage');

      const newContact =  this.store.createRecord('contact',{
        email: email,
        message: message
      });

      newContact.save().then((response) => {
        this.set('responseMessage', `Thank you! ${this.get('emailAddress')} We've just saved your message: ${this.get('textMessage')}`);
        alert(`Saving of the following message is in progress: ${this.get('responseMessage')}`);
        this.set('emailAddress', '');
        this.set('textMessage', '');
      });
    }

  }
});
