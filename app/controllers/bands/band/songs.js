import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',

  isAddButtonDisabled: empty('newSongTitle'),

  actions: {
    addSong() {
      this.set('isAddingSong', true);
    },

    cancelAddSong() {
      this.set('isAddingSong', false);
    },

    async saveSong(band, event) {
      event.preventDefault();

      const newSong = this.store.createRecord('song', { 
        title: this.newSongTitle,
        band
      });

      await newSong.save();
      this.set('newSongTitle', '');
    },

    updateRating(song, rating) {
      song.set('rating', song.get('rating') === rating ? rating - 1 : rating);
      song.save();
    }      
  }
});
