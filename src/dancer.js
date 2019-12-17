// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  //this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.randomColor();
};
//makeDancer.prototype.$node = $('<span class="dancer"></span>');<--breaks random placement
makeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.randomColor = function () {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  this.$node.css('border-color', `rgb(${red}, ${green}, ${blue})`);
};

makeDancer.prototype.move = function () {

};