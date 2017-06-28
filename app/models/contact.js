import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  firstComputedProperty: Ember.computed.match('email', /^.+@.+\..+$/),
  secondComputedProperty: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('firstComputedProperty','secondComputedProperty'),
  isNotValid: Ember.computed.not('isValid'),
});
