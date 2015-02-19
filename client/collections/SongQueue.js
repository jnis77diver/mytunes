// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){


  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function() {

  }
   /*add: function(song) {
      this.model.push(song);
    }*/
});
 /* remove: function() {

  },
   //we addded these
  enqueue: function() {
    this.songsArray(this);
  },
  dequeue: function() {

  },
  ended: function() {

  },
  playFirst: function() {

  }
});
songData1 = {
    artist: 'data',
    url: '/test/testsong.mp3',
    title:'test song'
};
songData2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title:'test song 2'
};
var songQueue1 = new SongQueue();
songQueue1.add(songData1);

*/
