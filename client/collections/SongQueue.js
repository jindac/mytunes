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
      debugger;
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', () => {
      this.shift();
    }, this);

    this.on('enqueue', (song) => {
      
      this.push(song);
      // this.trigger('enqueue'); 
    }, this);
  },

  playFirst() {
    this.at(0).play();
  },


});