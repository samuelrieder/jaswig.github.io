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
 // 0 = rest
 // 1 = rotating to user
 // 2 = adjusting height
 // 3 = rotating away from user
window.scrollDeskState = 0;
window.scrollDeskIsTransitioning = false;

$(document).on('click', '#scroll-desk-up', function(event) {
  if(window.scrollDeskPosition < 7) {
    updateScrollDeskPosition(window.scrollDeskPosition + 1);
  }
});

$(document).on('click', '#scroll-desk-down', function(event) {
  if(window.scrollDeskPosition > 1) {
    updateScrollDeskPosition(window.scrollDeskPosition - 1);
  }
});

$(document).on('input', '#scroll-desk-position', function(event) {
  new_value = parseInt($('#scroll-desk-position').val())
  if (new_value > 7) {
    updateScrollDeskPosition(7);
  } else if (new_value < 1) {
    updateScrollDeskPosition(1);
  } else if (1 <= new_value && new_value <= 7){
    updateScrollDeskPosition(new_value);
  }
});

function updateScrollDeskPosition(new_position) {
  if(window.scrollDeskState < 2) {
    // Only allow updates while rotating
    window.scrollDeskPosition = new_position;
    if($("#scroll-desk-position").val() != new_position) {
      $("#scroll-desk-position").val(new_position);
    }
  }
  if(window.scrollDeskState == 0) {
    scrollDeskNextState();
  }
}

function scrollDeskNextState() {
  if(!window.scrollDeskIsTransitioning) {
    window.scrollDeskIsTransitioning = true;
    console.log("Desk state", window.scrollDeskState)
    var position = window.scrollDeskPosition,
        deskTop = $("#desk-top"),
        left = parseInt(deskTop.css("left")),
        bottom = parseInt(deskTop.css("bottom"));
        win = false;

    switch(window.scrollDeskState) {
      case 0: // Rotating towards user
        window.scrollDeskState = 1;
        console.log("Rotating towards user", window.scrollDeskState)
        deskTop.css({
          "transform": "rotate(7deg)",
          "left": left + 15,
          "bottom": bottom + 18,
        });
        waitForNextStep()
        break;
      case 1: // Adjusting height
        window.scrollDeskState = 2;
        console.log("Adjusting height", window.scrollDeskState)
        deskTop.css({
          "left": 45 - 4 * (position-1) + 15,
          "bottom": 132 + 10 * (position-1) + 18,
        });
        waitForNextStep()
        break;
      case 2: // Rotating away from user
        window.scrollDeskState = 3;
        console.log("Rotating away from user", window.scrollDeskState)
        deskTop.css({
          "transform": "rotate(0deg)",
          "left": left - 15,
          "bottom": bottom - 18,
        });
        waitForNextStep()
        break;
      case 3: // After last step, reset to rest position
        window.scrollDeskState = 0;
        window.scrollDeskIsTransitioning = false;
        break;
    }
  }
}

function waitForNextStep() {
  window.setTimeout(function() {
    $("#desk-top").on("transitionend", function() {
      console.log("transitioned")
      if(window.scrollDeskIsTransitioning) {
        $("#desk-top").off("transitionend")
        window.scrollDeskIsTransitioning = false;
        scrollDeskNextState();
      }
    });
  }, 0);
}
