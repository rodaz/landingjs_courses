$(document).ready(function () {
    var pie1 = $('.pie-1'),
        pie2 = $('.pie-2'),
        pie3 = $('.pie-3'),
        pie4 = $('.pie-4'),
        cnt1 = 0,
        cnt2 = 0,
        cnt3 = 0,
        cnt4 = 0;

    var timer1 = setInterval(function(){
        if(cnt1 == 90) clearInterval(timer1);
        progressBarUpdate(cnt1, 100, pie1);
        cnt1+=1;
    },25);

    var timer2 = setInterval(function(){
        if(cnt2 == 96) clearInterval(timer2);
        progressBarUpdate(cnt2, 100, pie2);
        cnt2+=1;
    },24);

    var timer3 = setInterval(function(){
        if(cnt3 == 85) clearInterval(timer3);
        progressBarUpdate(cnt3, 100, pie3);
        cnt3+=1;
    },26);

    var timer4 = setInterval(function(){
        if(cnt4 == 94) clearInterval(timer4);
        progressBarUpdate(cnt4, 100, pie4);
        cnt4+=1;
    },24);
  //////////////////////////////////////////////////////////////

  $('.slider').css("background", "url(images/slider/bg.jpg) no-repeat");
  setTimeout(function () {
    $('.slider').css("background", "url(images/slider/bg1.jpg) no-repeat");
  }, 3000);


});

function rotate(element, degree) {
    element.css({
        '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)',
            'zoom': 1
    });
}

function progressBarUpdate(x, outOf, elem) {
    var firstHalfAngle = 180;
    var secondHalfAngle = 0;

    // caluclate the angle
    var drawAngle = x / outOf * 360;

    // calculate the angle to be displayed if each half
    if (drawAngle <= 180) {
        firstHalfAngle = drawAngle;
    } else {
        secondHalfAngle = drawAngle - 180;
    }

    // set the transition
    rotate(elem.find(".slice1"), firstHalfAngle);
    rotate(elem.find(".slice2"), secondHalfAngle);

    // set the values on the text
    elem.find(".status").html(x + "<span>%</span>");
}