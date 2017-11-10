import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    saveMessage(newMessage) {
      newMessage.save().then((response) => {
        this.set('responseMessage', true);
        this.set('message', '');
      });
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    }
  }
});
