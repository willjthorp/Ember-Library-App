import Controller from '@ember/controller';
import Ember from 'ember';


export default Controller.extend({
  isDisabled: Ember.computed.not('isValid'),
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  emailAddress: '',

  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  }),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {email: email});

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We've just saved your email address ${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }
  }

});
