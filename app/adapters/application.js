import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  session: service(),
  
  authorize(xhr) {
    let { token } = this.session.data.authenticated;
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
  }    
});
