(function($) {
  "use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body')
    .vide({
        mp4: "http://cdn.bglad.io/vid/stock/timelapse-busy-place.mp4",
        poster: "https://cdn.britannica.com/668x448/11/91611-004-C997AF25.jpg",
      }, {
        posterType: 'jpg',
        playbackRate: 4,
        //muted: false
      });

})(jQuery); // End of use strict
//<iframe class="embed-responsive embed-responsive-16by9" width="560" height="315" src="https://www.youtube.com/embed/J7F6KVWzjr8?autohide=1&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>