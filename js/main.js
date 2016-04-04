// Region detection
function changeRegion(region) {
  if (window.region != region) {
    $(document).trigger('changeRegion', region);
  }
  window.region = region;
  console.log("Region:", window.region);
}

$(document).on('changeRegion', function(event, region) {
  if (region == "US") {
    regionImage = "/images/us.png";
  } else {
    regionImage = "/images/eu.png";
  }
  $("#regionSelector").attr("src", regionImage);
})

$(document).on('changeRegion', function(event, region) {
  if (region == "US") {
    $("[data-us-content]").each(function(idx, element) {
      $(element).html($(element).data("us-content"))
    })
  } else {
    $("[data-eu-content]").each(function(idx, element) {
      $(element).html($(element).data("eu-content"))
    })
  }
  $("#regionSelector").attr("src", regionImage);
})

changeRegion("EU"); // Default to EU
function geocallback(data) {
  country_code = data.country_code;
  // US and CA will get the US localised version
  if (country_code == "US" || country_code == "CA") {
    changeRegion("US");
  }
}

// IP in the us for testing:
// $.get("https://freegeoip.net/json/8.8.8.8?callback=geocallback")
$.get("https://freegeoip.net/json/?callback=geocallback")

$("#regionSelector").on("click", function() {
  if (window.region == "US") {
    newRegion = "EU";
  } else {
    newRegion = "US";
  }
  changeRegion(newRegion);
})

// Scroll desk
window.scrollDeskPosition = 1;

$(document).on('click', '#scroll-desk-up', function(event) {
  if(window.scrollDeskPosition < 7) {
    updateScrollDeskPosition(1);
  }
})
$(document).on('click', '#scroll-desk-down', function(event) {
  if(window.scrollDeskPosition > 1) {
    updateScrollDeskPosition(-1);
  }
})
function updateScrollDeskPosition(delta) {
  window.scrollDeskPosition += delta;
  var position = window.scrollDeskPosition,
      deskTop = $("#desk-top"),
      left = parseInt(deskTop.css("left")),
      bottom = parseInt(deskTop.css("bottom")),
      hasTransitioned = false;

  $("#scroll-desk-position").html(position);
  deskTop.css("transform", "rotate(7deg)");
  deskTop.css("left", left + 15);
  deskTop.css("bottom", bottom + 18);
  deskTop.on("transitionend", function(event) {
    if(!hasTransitioned) {
      hasTransitioned = true;
      console.log("going", delta);
      deskTop.css("transform", "rotate(0deg)");
      deskTop.css("left", left - 4 * delta);
      deskTop.css("bottom", bottom + 10 * delta);
    }
  })
}
