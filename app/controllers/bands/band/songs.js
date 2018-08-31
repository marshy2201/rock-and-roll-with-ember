import Controller from '@ember/controller';
import { empty, sort } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: {
    sortBy: 'sort',
    searchTerm: 's'
  },

  isAddingSong: false,
  newSongTitle: '',
  sortBy: 'ratingDesc',
  searchTerm: '',

  isAddButtonDisabled: empty('newSongTitle'),

  sortProperties: computed('sortBy', function() {
    let options = {
      ratingDesc: ['rating:desc', 'title:asc'],
      ratingAsc: ['rating:asc', 'title:asc'],
      titleDesc: ['title:desc'],
      titleAsc: ['title:asc']
    };

    return options[this.sortBy];
  }),
  
  sortedSongs: sort('matchingSongs', 'sortProperties'),

  matchingSongs: computed('model.songs.@each.title', 'searchTerm', function() {
    let searchTerm = this.searchTerm.toLowerCase();

    return this.model.get('songs').filter(song => song.get('title').toLowerCase().includes(searchTerm));
  }),

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
