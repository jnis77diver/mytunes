// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

    playFirst:function(){
        this.trigger('playFirst',this);
    },

  enqueue: function(){
      // Triggering an event here will also trigger the event on the collection
      this.trigger('enqueue', this);
   //   console.log("songQueue ", songQueue);
      // context.model.push(this);
  },
  dequeue: function(){
      // Triggering an event here will also trigger the event on the collection
      this.trigger('dequeue', this);
  },
  ended: function(){
      // Triggering an event here will also trigger the event on the collection
      this.trigger('ended', this);
  }

});
