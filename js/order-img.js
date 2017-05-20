var check;
var naming=1;

$("input:radio").on('click', function() {
  $radio = $(this);
  if(check == $(this).attr("id")) {
      check = false;
      $radio.prop("checked", false);
      var u1 = $(this).parent();
      var u2 = $(u1).parent();
      var u3 = $(u2).prev();
      var img_src = $(u3).children().find("img").attr("data-image");
      $(u3).children().find("img").attr("src",img_src);
    }

  if ($radio.is(":checked")) {
    check = $(this).attr("id");
    var group = "/images/" + $radio.attr("value");
    var u1 = $(this).parent();
    var u2 = $(u1).parent();
    var u3 = $(u2).prev();
    var img_src = $(u3).children().find("img").attr("src");
    var attr = $(u3).children().find("img").attr("data-image");
    if (typeof attr == typeof undefined || attr == false) {
        $(u3).children().find("img").attr("data-image",img_src);
    }
    // var attr2 = $(this).attr("name");
    // if (typeof attr2 == typeof undefined || attr2 == false) {
    //   $(this).siblings("input").attr("name","all"+naming);
    //   $(this).attr("name","all"+naming);
    //   naming++;
    //   console.log("we here")
    // }
    $(u3).children().find("img").attr("src",group);
    if($( window ).width() < 768){
      var ww = 66.07*($( window ).width())/100;
      $(u3).children().find("img").attr("height",ww+"px");
    } else{
    if($( window ).width() < 992){
      $(u3).children().find("img").attr("height","535.7px");
    } else {
      if($( window ).width() < 1200) {
    $(u3).children().find("img").attr("height","173.2px");
    } else {
      $(u3).children().find("img").attr("height","208.922px");
    }
    }
  }
}
});

$( window ).resize(function() {
  if($( window ).width() < 768){
    var ww = 66.07*($( window ).width())/100;
    $(".order-card-image img").attr("height",ww+"px");
  } else{
  if($( window ).width() < 992){
    $(".order-card-image img").attr("height","535.7px");
  } else {
    if($( window ).width() < 1200) {
    $(".order-card-image img").attr("height","173.2px");
  } else {
    $(".order-card-image img").attr("height","208.922px");
  }
  }
}
});
