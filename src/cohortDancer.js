var cohortDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="cohortDancer"></span>');
  this.$headNode = $('<span class="cohortHead"></span>');
  this.body = 0;
  this.head = 0;
  this.z = 12;
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
  this.body = Math.ceil(Math.random() * 9);
  if (this.body < 10) {
    this.body = '0' + this.body;
  }
  this.z = Math.floor(Math.abs(this.top)) - 200;
  //TODO set headNode to appropriate location based on the body
  this.$node.css('z-index', this.z);
  this.$node.css('background-image', `url("./assets/bodies/dancer${this.body}.gif")`);

  this.placeHead(this.top, this.left);
};

cohortDancer.prototype.placeHead = function (top, left) {
  this.head = Math.ceil(Math.random() * 28);
  if (this.head < 10) {
    this.head = '0' + this.head;
  }
  top = top - 20;
  left = left + 50;
  var styleSettings = {
    top: top,
    left: left

  };
  this.z = this.z + 2;
  this.$headNode.css(styleSettings);
  this.$headNode.css('background-image', `url("./assets/heads/head${this.head}.png")`);
  this.$headNode.css('z-index', this.z + 2);
  $('body').append(this.$headNode);
  console.log(this.body);
};

cohortDancer.prototype.move = function () {
// Make them move while dancing but only for certain gifs. 00-04ish
// when moving towards the scree increase size and affect z
// when moving left and right ensure boundaries are met
//


};

cohortDancer.prototype.resize = function () {


};