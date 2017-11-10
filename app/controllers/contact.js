import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  isDisabled: Ember.computed.not('bothFields'),
  bothFields: Ember.computed.and('isValid', 'messageValid'),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('message.length', 5),
  emailAddress: '',
  message: '',

  actions: {
    saveInvitation() {
      this.set('responseMessage', `Thank you! We've got your message and will be in touch soon.`);
      this.set('emailAddress', '');
    }
  }

});
