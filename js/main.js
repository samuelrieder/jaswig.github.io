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
