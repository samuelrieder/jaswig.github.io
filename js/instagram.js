Vue.config.delimiters = ['{', '}'];

var instagram = new Vue({
  el: '#vue-instagram',
  data: {
    title: 'http://placehold.it/10x10',
    photos: [
      'https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11379302_968060666618228_2045381212_n.jpg?ig_cache_key=MTIxMTA4NTU0NTA0NjQzNzk5Nw%3D%3D.2',
      'https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12424936_177501069307829_2010337847_n.jpg?ig_cache_key=MTIxNDY3ODcyODA1NzcxMjgxMw%3D%3D.2',
      'https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11930955_135967876761681_328026501_n.jpg?ig_cache_key=MTExMTA1NzkzMTM1MTc4MjMwNg%3D%3D.2',
      'https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12224277_883923038355418_167651062_n.jpg?ig_cache_key=MTEyMjY0NTkxODgwODE3NTM4Ng%3D%3D.2',
      'https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c180.0.720.720/12256793_559801474176550_1229734148_n.jpg?ig_cache_key=MTEzNDMxNDAyODE5MTYwOTc4NQ%3D%3D.2.c',
      'https://scontent-amt2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c179.0.721.721/12547678_985671571515577_128322351_n.jpg?ig_cache_key=MTE3MTI0ODU2MzY3NjE0ODEwOA%3D%3D.2.c'
    ]
  },

  methods: {
    getRandomPhoto: function(){
      return Math.floor(Math.random()*this.photos.length)
    }
  },

  created: function () {
    setInterval(function(){
      this.photos.$set(
        Math.floor(Math.random()*this.photos.length),
        this.photos[Math.floor(Math.random()*this.photos.length)]
      );
    }.bind(this), 10000);
  }
})
