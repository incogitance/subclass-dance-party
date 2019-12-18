var screenChanger = function () {
  this.timer = 6420;
  this.toggle = 0;
  this.pause = 0;
};

screenChanger.prototype.remote = function (pause) {

  if (!pause) {
    this.mem = setInterval(function screenChanger() {
      var newGIF = giphy.getURL();

      //change screen one
      $('.screen1').css('background-image', `url("${newGIF}")`);


      //change screen two
      $('.screen2').css('background-image', `url("${newGIF}")`);


    }, this.timer);
  } else {
    clearTimeout(this.mem);
  }

};