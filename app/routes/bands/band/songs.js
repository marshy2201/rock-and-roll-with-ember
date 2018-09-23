import Route from '@ember/routing/route';

export default Route.extend({
  // This is done by default
  // model() {
  //   return this.modelFor('bands.band');
  // },

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  },

  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    }
  }
});
