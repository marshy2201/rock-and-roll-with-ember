import Route from '@ember/routing/route';
import wait from 'rock-and-roll-with-ember/utils/wait';

export default Route.extend({
  async model() {
    await wait(1500);
    return this.store.findAll('band');
  },

  actions: {
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    }
  }
});
