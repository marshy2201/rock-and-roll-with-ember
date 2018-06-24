import Route from '@ember/routing/route';

export default Route.extend({
  // This is done by default
  // model() {
  //   return this.modelFor('bands.band');
  // }

  resetController(controller) {
    controller.set('isEditing', false);
  },

  actions: {
    willTransition(transition) {
      if (this.controller.isEditing) {
        let leave = window.confirm('Are you sure?');
        if (!leave) {
          transition.abort();
        }
      }
    }
  }
});
