var getGiphy = function (tags, rating, stickers) {
  this.giphyAPIkey = 'cvZQ0TXj8HIJgxOAak9JNapmDNpWE4Xp';
  this.tags = 'dancing';
  this.rating = 'pg-13';
  this.result = '';
  this.output = '';
  //this.output = '';
  if (stickers) {
    this.requestURL = `https://api.giphy.com/v1/stickers/random?api_key=${this.giphyAPIkey}&tag=${this.tags}&rating=${this.rating}`;
  } else {
    this.requestURL = `https://api.giphy.com/v1/gifs/random?api_key=${this.giphyAPIkey}&tag=${this.tags}&rating=${this.rating}`;
  }
};

getGiphy.prototype.getURL = function () {

  var result = null;
  var scriptUrl = this.requestURL;
  $.ajax({
    url: scriptUrl,
    type: 'get',
    dataType: 'json',
    async: false,
    success: function (data) {
      result = data.data.id;
    }
  });
  this.output = `https://i.giphy.com/media/${result}/giphy.gif`;
  return this.output;
};




