// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },


  playCount: function(){
    this.set('count',this.get('count') + 1 );
    console.log("this is ", this);
  },
  getPlayCount:function(){
      return this.get('count');
  },

  playFirst: function() {
    this.at(0).play();
    console.log("this.at(0) is ", this.at(0));
    this.playCount.bind(this.at(0));
    // this.playCount.bind(this);
    console.log("this.at(0) is ", this.at(0));
  },

  dequeue: function(song){
      if(this.at(0) === song){
        this.playNext();
      }
      else{
        this.remove(song);
      }
  },

  enqueue:function(song) {
    if (this.length === 1) {
        this.playFirst();
    }
  },

  playNext:function(){
    this.shift();

    if(this.length>=1){
      this.playFirst();
    }
    else{
      this.trigger('stop');
    }
  }

});

