(function($) {
  "use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body')
    .vide({
        mp4: "http://cdn.bglad.io/vid/stock/timelapse-busy-place.mp4",
        poster: "http://cdn.bglad.io/img/stock/antwerp-central-station.jpg",
      }, {
        posterType: 'jpg',
        playbackRate: 4,
        //muted: false
      });
})(jQuery); // End of use strict