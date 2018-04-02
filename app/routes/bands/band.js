import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.modelFor('bands').findBy('slug', params.slug); // params.slug is now 'pearl-jam'
  }
});
