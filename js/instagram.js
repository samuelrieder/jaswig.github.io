Vue.config.delimiters = ['{', '}'];

var instagram = new Vue({
  el: '#vue-instagram',
  data: {
    photos: false,
  },

  methods: {
    getRandomPhoto: function(){
      return Math.floor(Math.random()*this.photos.length);
    }
  },

  created: function () {
    setInterval(function(){
      if(this.photos) {
        this.photos.$set(
          Math.floor(Math.random()*this.photos.length),
          this.photos[Math.floor(Math.random()*this.photos.length)]
        );
      }
    }.bind(this), 10000);
  }
});

function flickrPhotoUrl(photo, size) {
  return "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_"+size+".jpg";
}

function jsonFlickrApi(response) {
  photos = response.photos.photo;
  urls = [];
  for (var i = 0; i < photos.length; i++) {
    urls.push(flickrPhotoUrl(photos[i], "z"));
  }
  instagram.photos = urls;
}

// Fetch fotos
$.get("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&user_id=140453763@N07&api_key=f0b84fba1c00631410b85b90720f52ba&format=json");
