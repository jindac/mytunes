// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play() {
    // Triggering an event here will also trigger the event on the collection
    debugger;
    this.trigger('play', this);
  },

  enqueue() {
    this.trigger('enqueue', this);
  },

  dequeue() {
    debugger;
    this.trigger('dequeue', this);
  },

  ended() {
    this.trigger('ended', this);
  },
});
