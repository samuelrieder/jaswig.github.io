---
# Dont delete this line. This main JS file needs this front matter
---
{% include_relative vendor/jquery.matchHeight.min.js %}
{% include_relative vendor/js.cookie.js %}
{% include_relative vendor/isMobile.min.js %}
{% include_relative instagram.js %}
{% include_relative scrolldesk.js %}
{% include_relative region.js %}
{% include_relative videomodal.js %}
{% include_relative cookies-warning.js %}
{% include_relative hero-background.js %}

$(document).on('ready', function() {
  $('.order-card-text').matchHeight({byRow: true});
  var cookiesWarning = new window.CookiesWarning()
});

$(document).on('click', '.hero .cta, .mobile-content .cta', function(event) {
  event.preventDefault();
  var anchor = $("#order");
  $('html,body').animate({'scrollTop' : anchor.offset().top}, 900);
});
