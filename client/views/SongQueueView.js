// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize() {
    this.render();
  },

  render() {
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map((song) => {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    //return this.$el;
  }

});
