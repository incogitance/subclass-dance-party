var cohortDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="cohortDancer"></span>');
  this.$headNode = $('<span class="cohortHead"></span>');
  this.body = 0;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.randomBody();
  //this.placeHead(top, left);
};

cohortDancer.prototype = Object.create(makeDancer.prototype);

cohortDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};

cohortDancer.prototype.randomBody = function () {
  this.body = Math.ceil(Math.random() * 4);
  if (this.body < 10) {
    this.body = '0' + this.body;
  }
  this.$node.css('background-image', `url("./assets/bodies/dancer${this.body}.gif")`);

  this.placeHead(this.top, this.left);
};

cohortDancer.prototype.placeHead = function (top, left) {

  top = top - 20;
  left = left + 58;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$headNode.css(styleSettings);
  this.$headNode.css('background-image', 'url("./assets/heads/head01.png")');
  $('body').append(this.$headNode);
  console.log(this.body);
};

cohortDancer.prototype.move = function () {

};