// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize() {
    
    this.on('add', () => { 
      if (this.length === 1) {
        this.playFirst(); 
      }
    }, this);
    
    this.on('ended', () => {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },


  playFirst() {

  },


});