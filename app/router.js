import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pages', { path: '/' });
  this.route('insights');
  this.route('patients');
});

export default Router;
