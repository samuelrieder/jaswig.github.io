---
# Dont delete this line. This main JS file needs this front matter
---
{% include_relative vendor/jquery.matchHeight.min.js %}
{% include_relative instagram.js %}
{% include_relative scrolldesk.js %}
{% include_relative region.js %}
{% include_relative videomodal.js %}

$(function() {
    $('.order-card-text').matchHeight({byRow: true});

    $('.hero .cta, .mobile-content .cta').click(function() {
        var anchor = $("#order");
        $('html,body').animate({'scrollTop' : anchor.offset().top}, 900);
    });

    $('.play-video').click(function (e) {
      var video = $(this).data('video');
      modal.openModal(video);
      e.preventDefault();
    });
});
