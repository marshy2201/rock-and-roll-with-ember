import Route from '@ember/routing/route';
import wait from 'rock-and-roll-with-ember/utils/wait';

export default Route.extend({
  // This is done by default
  async model() {
    await wait(4000);
    return this.modelFor('bands.band');
  },

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
