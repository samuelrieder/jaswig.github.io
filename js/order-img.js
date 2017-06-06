var check="",check2="";
var naming=1;
var shopify="http://store.jaswig.be/products";

$("input:radio").on('click', function() {
  $radio = $(this);
  //Uncomment this if you want to enable unselecting elements and set to default product col1
  /*if(check == $(this).attr("id")) {
      check = "";
      $radio.prop("checked", false);
      var u1 = $(this).parent();
      var u2 = $(u1).parent();
      var u3 = $(u2).prev();
      var img_src = $(u3).children().find("img").attr("data-image");
      $(u3).children().find("img").attr("src",img_src);
      var original_price = $(this).parent().siblings(".order-card-price").attr("data-price");
      $(this).parent().siblings(".order-card-price").html(original_price);
      var original_url = $(this).parent().siblings(".center-it").children("a").attr("data-url");
      $(this).parent().siblings(".center-it").children("a").attr("href",original_url);
      $(this).parent().parent().siblings(".order-card-image").children("a").attr("href",original_url);
    } */

    //Uncomment this if you want to enable unselecting elements and set to default product col2
    /*if(check2 == $(this).attr("id")) {
        check2 = "";
        $radio.prop("checked", false);
        var u1 = $(this).parent();
        var u2 = $(u1).parent();
        var u3 = $(u2).prev();
        var img_src = $(u3).children().find("img").attr("data-image");
        $(u3).children().find("img").attr("src",img_src);
        var original_price = $(this).parent().siblings(".order-card-price").attr("data-price");
        $(this).parent().siblings(".order-card-price").html(original_price);
        var original_url = $(this).parent().siblings(".center-it").children("a").attr("data-url");
        $(this).parent().siblings(".center-it").children("a").attr("href",original_url);
        $(this).parent().parent().siblings(".order-card-image").children("a").attr("href",original_url);
      }*/

  if ($radio.is(":checked")) {
    if($(this).attr("name") == "all")
    {check = $(this).attr("id");}
    else
    {check2 = $(this).attr("id");}
    var group = "/images/" + $radio.attr("value");
    var u1 = $(this).parent();
    var u2 = $(u1).parent();
    var u3 = $(u2).prev();
    var img_src = $(u3).children().find("img").attr("src");
    var attr = $(u3).children().find("img").attr("data-image");
    if (typeof attr == typeof undefined || attr == false) {
        $(u3).children().find("img").attr("data-image",img_src);
    }

    var attr_price = $(this).parent().siblings(".order-card-price").attr("data-price");
    var current_price = $(this).parent().siblings(".order-card-price").html();
    if (typeof attr_price == typeof undefined || attr_price == false) {
        $(this).parent().siblings(".order-card-price").attr("data-price",current_price);
    }
    $(this).parent().siblings(".order-card-price").html($(this).attr("data-price"));


    var attr_url = $(this).parent().siblings(".center-it").children("a").attr("data-url");
    var current_url = $(this).parent().siblings(".center-it").children("a").attr("href");
    if (typeof attr_url == typeof undefined || attr_url == false) {
        $(this).parent().siblings(".center-it").children("a").attr("data-url",current_url);
    }
    var update_url = shopify+$(this).attr("data-url");
    $(this).parent().siblings(".center-it").children("a").attr("href",update_url);
    var attr_url2 = $(this).parent().parent().siblings(".order-card-image").children("a").attr("data-url");
    if (typeof attr_url2 == typeof undefined || attr_url2 == false) {
        $(this).parent().parent().siblings(".order-card-image").children("a").attr("data-url",current_url);
    }
    $(this).parent().parent().siblings(".order-card-image").children("a").attr("href",update_url);


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

//first adjust
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
