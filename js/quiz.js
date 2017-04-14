var pos = 0;
var enable_next = true;
var enable_prev = true;

$( "#quiz-start" ).click(function() {
  $(".active").removeClass("active");
  $("#intro").addClass("dnt-show");
  setTimeout(undisp, 500);
  setTimeout(redisp, 500);
  pos++;
  pos_checker();
});


function undisp () {
    $("#intro").addClass("disp-non");
}

function redisp () {
  $("#q1").addClass("active");
  $("#q1").removeClass("disp-non");
}

function pos_checker() {
  if(pos==1){
    $('#controls').removeClass("disp-non");
    $("#next").removeClass("disable");
  } else {
    $("#prev").removeClass("disable");
  }
  var concat = "j"+pos;
  var full = !$("input[name='"+concat+"']:checked").val();
  if((pos==2 || pos==6 || pos==7) && full){
    $("#next").addClass("disable");
    enable_next = false;
  }
  if(pos == 9) {
    $('#controls').addClass("disp-non");
    $('#result1').removeClass("disp-non");
  }
}

function updateTextInput(val,id) {
      document.getElementById(id+'-1').value=val;
}

function updateRangeInput(val,id) {
      document.getElementById(id.charAt(0)).value=val;
}


$( "#next" ).click(function() {
  if(enable_next) {
  var id_for_current = "#q"+pos;
  pos++;
  var id_for_next = "#q"+pos;
  $(".active").addClass("dnt-show");
  $(".active").removeClass("active");
  setTimeout(undisplay(id_for_current), 500);
  setTimeout(redisplay(id_for_next), 500);
  pos_checker();
}
});

function undisplay (myId) {
    $(myId).addClass("disp-non");
}

function redisplay (myId) {
  $(myId).addClass("active");
  $(myId).removeClass("disp-non");
}

$( "#prev" ).click(function() {
  if(pos==1) {
    enable_prev = false;
    console.log("here");
  } else {
    enable_prev = true;
  }
  if(enable_prev) {
  var id_for_current = "#q"+pos;
  pos--;
  var id_for_prev = "#q"+pos;
  console.log(id_for_current);
  console.log(id_for_prev);
  $(".active").addClass("dnt-show");
  $(".active").removeClass("active");
  setTimeout(undisplay(id_for_current), 500);
  setTimeout(redisplay(id_for_prev), 500);
  adjust_for_prev();
  enable_next = true;
}
console.log("here2");
});

function adjust_for_prev() {
  if(pos==1){
    $("#prev").addClass("disable");
  }
  $("#next").removeClass("disable");
}


// the selector will match all input controls of type :checkbox
// and attach a click event handler
$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
    $("#next").removeClass("disable");
    enable_next = true;
  } else {
    $box.prop("checked", false);
    $("#next").addClass("disable");
    enable_next = false;
  }
});
