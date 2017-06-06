var pos = 0;
var enable_next = true;
var enable_prev = true;
var q_count = document.getElementById('count');

$( "#quiz-start" ).click(function() {
  $("#title").addClass("disp-non");
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
  if((pos==2 || pos==7 || pos==8) && full){
    $("#next").addClass("disable");
    enable_next = false;
  }
  q_count.innerHTML = "Question "+pos+"/9";
  if(pos == 10) {
    $('#controls').addClass("disp-non");
    q_count.innerHTML = "";
    $('#sub-results').removeClass("disp-non");
    result_blocks();
    /* var divider = end_result();
     if(divider<=51){
      $('#result6').removeClass("disp-non");
    } else {
      if(divider<=103){
        $('#result5').removeClass("disp-non");
      } else {
        if(divider<=155){
          $('#result4').removeClass("disp-non");
        } else {
          if(divider<=206){
            $('#result3').removeClass("disp-non");
          } else {
            if(divider<=258){
              $('#result2').removeClass("disp-non");
            } else {
              $('#result1').removeClass("disp-non");
            }
          }
        }
      }
    } */
  }
}

function end_result() {
  var f1 = $("#1").val();
  f1=(f1/12.5)+1;
  console.log(f1);
  var f2 = get_cb_val("2");
  f2*=1;
  console.log(f2);
  var f3 = $("#3").val();
  f3*=1;
  console.log(f3);
  var f4 = $("#4").val();
  f4*=1;
  console.log(f4);
  var f5 = $("#5").val();
  f5=(f5/1.428)+1;
  console.log(f5);
  var f6 = get_cb_val("6");
  f6*=1;
  console.log(f6);
  var f7 = get_cb_val("7");
  f7*=1;
  console.log(f7);
  var f8 = $("#8").val();
  f8*=1;
  console.log(f8);
  var end_result = f1*f2*(f3+f4/f5*f6+f7*f8); //f1*f2*((((f3+f4)/f5)*f6)+(f7*f8)); //min=0 max=6280
  console.log(end_result+"  "+f1+" "+f2+" "+f3+" "+f4+" "+f5+" "+f6+" "+f7+" "+f8+" ");
  return end_result;
}

function result_blocks() {
  var b1 = $("#5").val();
  b1*=1;
  console.log(b1);
  var b2 = $("#6").val();
  b2=(b2/1.428)+1;
  console.log(b2);
  var b3 = $("#4").val();
  b3*=1;
  console.log(b3);
  var b4 = $("#1").val();
  b4*=1;
  console.log(b4);

  if(b1<=4){
    $('#b11').removeClass("disp-non");
  } else {
    if (b1<=6) {
      $('#b12').removeClass("disp-non");
    } else {
      $('#b13').removeClass("disp-non");
    }
  }

  if(b2<=8){
    $('#b21').removeClass("disp-non");
  } else {
    if (b2<=10) {
      $('#b22').removeClass("disp-non");
    } else {
      $('#b23').removeClass("disp-non");
    }
  }

  if(b3<=2){
    $('#b31').removeClass("disp-non");
  } else {
    if (b3<=5) {
      $('#b32').removeClass("disp-non");
    } else {
      $('#b33').removeClass("disp-non");
    }
  }

  if(b4<=10){
    $('#b41').removeClass("disp-non");
  } else {
    if (b4<=30) {
      $('#b42').removeClass("disp-non");
    } else {
      $('#b43').removeClass("disp-non");
    }
  }

}

function get_cb_val(name) {
  var concat2 = "j"+name;

return $("input[name='"+concat2+"']:checked").attr("value");
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
  q_count.innerHTML = "Question "+pos+"/9";
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
