import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  songs: hasMany(),

  isGreatBand: computed('songs.[].rating', function() {
    let goodSongs = this.get('songs').filter(song => song.rating >= 4);
    return goodSongs.length >= 2;
  })    
});