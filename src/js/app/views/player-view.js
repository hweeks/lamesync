define(['jquery', 'underscore', 'backbone', 'Marionette',
  'stache!../templates/player-view',
  'FireBase',
  'yt'],
  function ($, _, Backbone, Marionette, PlayerTemplate, Firebase, YT) {
    return PlayerView = Marionette.LayoutView.extend({
      template: PlayerTemplate,
      events: {
        'click .submit-song' : 'addSong'
      },
      currentVideo: 0,
      onDomRefresh: function(){
        var self = this;
        this.songs = new Firebase('https://blazing-fire-6849.firebaseio.com/');
        this.songs.on('value', function(dataSnapshot) {
          var allSongs = dataSnapshot.val();
          var listOutput = [];
          for (var song in allSongs){
            listOutput.push(allSongs[song].song);
          }
          self.addToPlayer(listOutput);
          $('.new-song').val('');
        });
      },
      addSong: function(){
        var songInput = $('.new-song').val();
        this.songs.push({song: songInput});
      },
      addToPlayer: function(songs){
        var self = this;
        var player;
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: songs[this.currentVideo],
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        function onPlayerReady(event) {
          event.target.playVideo();
        }
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data === 0){
            $('.player').html('<div id="player"></div>');
            self.currentVideo = self.currentVideo+1;
            if (songs[self.currentVideo] === undefined) {
              self.currentVideo = 0;
            }
            self.addToPlayer(songs);
          }
        }
        function stopVideo() {
          player.stopVideo();
        }
      }
    });
  }
);