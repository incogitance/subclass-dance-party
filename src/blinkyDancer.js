var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer"></span>'); <---breaks random placement
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

//var oldStep = blinkyDancer.step;

makeBlinkyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


var rgbBlinkyDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer2"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

rgbBlinkyDancer.prototype = Object.create(makeDancer.prototype);
//makeGBlinkyDancer.prototype.$node = $('<span class="dancer2"></span>');
rgbBlinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};