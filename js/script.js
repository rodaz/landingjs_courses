$(document).ready(function () {
    var membersInfo = [
        {
            name: 'John Doe1',
            about: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.'+
                ' Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.'+
                ' Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec,'+
                ' egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nidictum porta.',
            skills: [
                {skill: 'HTML&CSS', level: 90},
                {skill: 'AI & PS', level: 96},
                {skill: 'JS & PHP', level: 85},
                {skill: 'PHOTOGRAPHY', level: 94}
            ]        
        },
        {
            name: 'John Doe2',
            about: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.'+
                ' Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.'+
                ' Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec,'+
                ' egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nidictum porta.',
            skills: [
                {skill: 'HTML&CSS', level: 97},
                {skill: 'AI & PS', level: 92},
                {skill: 'JS & PHP', level: 89},
                {skill: 'PHOTOGRAPHY', level: 90}
            ]        
        },
        {
            name: 'John Doe3',
            about: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.'+
                ' Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.'+
                ' Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec,'+
                ' egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nidictum porta.',
            skills: [
                {skill: 'HTML&CSS', level: 99},
                {skill: 'AI & PS', level: 80},
                {skill: 'JS & PHP', level: 90},
                {skill: 'PHOTOGRAPHY', level: 91}
            ]        
        },
        {
            name: 'John Doe4',
            about: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.'+
                ' Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.'+
                ' Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec,'+
                ' egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nidictum porta.',
            skills: [
                {skill: 'HTML&CSS', level: 94},
                {skill: 'AI & PS', level: 94},
                {skill: 'JS & PHP', level: 94},
                {skill: 'PHOTOGRAPHY', level: 95}
            ]        
        }    
    ];

    var pie1 = $('.pie-1'),
        pie2 = $('.pie-2'),
        pie3 = $('.pie-3'),
        pie4 = $('.pie-4'),
        doc = $(document);

    //Proud Counters part 1   
    var actMember = $('.activeMember');

    actMember.data('skills', membersInfo[0].skills);
    timers();

    function timers() {
        var cnt1 = 0,
            cnt2 = 0,
            cnt3 = 0,
            cnt4 = 0;

        var actMember = $('.activeMember');
        var actSkills = actMember.data('skills');
        var skillsPos = $('.skills').offset().top;

        doc.scroll(function(e) {
            if(skillsPos-$(window).innerHeight()/2 < doc.scrollTop() && doc.scrollTop() < skillsPos+$(window).innerHeight()/5) {
                timersGO();
                doc.unbind(e);
            }
        });

        actMember.removeClass('activeMember');

        function timersGO() {
            var timer1 = setInterval(function() {
                if(cnt1 == +actSkills[0].level)
                    clearInterval(timer1);
                progressBarUpdate(cnt1, 100, pie1);
                cnt1+=1;
            }, 25);

            var timer2 = setInterval(function() {
                if(cnt2 == +actSkills[1].level) 
                    clearInterval(timer2);
                progressBarUpdate(cnt2, 100, pie2);
                cnt2+=1;
            }, 24);

            var timer3 = setInterval(function() {
                if(cnt3 == +actSkills[2].level)
                    clearInterval(timer3);
                progressBarUpdate(cnt3, 100, pie3);
                cnt3+=1;
            },26);

            var timer4 = setInterval(function() {
                if(cnt4 == +actSkills[3].level)
                    clearInterval(timer4);
                progressBarUpdate(cnt4, 100, pie4);
                cnt4+=1;
            },24); 
        }
    }

    function progressBarUpdate(x, outOf, elem) {
        var firstHalfAngle = 180;
        var secondHalfAngle = 0;
        var drawAngle = x / outOf * 360;

        if (drawAngle <= 180) {
            firstHalfAngle = drawAngle;
        } else {
            secondHalfAngle = drawAngle - 180;
        }

        rotate(elem.find(".slice1"), firstHalfAngle);
        rotate(elem.find(".slice2"), secondHalfAngle);

        elem.find(".status").html(x + "<span>%</span>");
    }

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

    //Main Slider
    var slideNumber = 1;
    var slideTimer1;
    var text = [
        'BRANDING HAVE ANOTHER <br> DEFINITION',
        'CLOSER HAS OTHER <br> CHARACTER',
        'LOREMQ DID THRONE <br> FUNCTION'
    ];

    var mainSlider = function() {
        slideNumber === 3 ? slideNumber = 1 : slideNumber++;
        $('.slider').css("background", "url(images/slider/bg"+slideNumber+".jpg) no-repeat");
        $('.slider h1').html(text[slideNumber-1]);
    };

    var slider1 = setInterval(mainSlider, 3000);

    $('#mainSliderLeft').on('click', function () {
        if (slideTimer1) {
            clearTimeout(slideTimer1);
        }
        clearInterval(slider1);
        slideNumber === 1 ? slideNumber = 3 : slideNumber--;
        $('.slider').css("background", "url(images/slider/bg"+slideNumber+".jpg) no-repeat");
        $('.slider h1').html(text[slideNumber-1]);
        slideTimer1 = setTimeout(function () {
            mainSlider();
            slider1 = setInterval(mainSlider, 3000);
        }, 5000);
    });

    $('#mainSliderRight').on('click', function () {
        if (slideTimer1) {
            clearTimeout(slideTimer1);
        }
        clearInterval(slider1);
        slideNumber === 3 ? slideNumber = 1 : slideNumber++;
        $('.slider').css("background", "url(images/slider/bg"+slideNumber+".jpg) no-repeat");
        $('.slider h1').html(text[slideNumber-1]);
        slideTimer1 = setTimeout(function () {
            mainSlider();
            slider1 = setInterval(mainSlider, 3000);
        }, 5000);
    });

    //Smooth Scrolling
    $('.top-line a[href^="#"]').on('click', function(e) {
        var target = $(this).attr('href'),
        _top = $(target).offset().top;

        $('body, html').animate({scrollTop: _top}, 900);
        return false;
    });

    //Images increase 10%
    var servItemImg = $('.services .item img');
    var howItemImg = $('.howwedoit .item img');
    var aboutImg = $('.service img');

    var elemWidth = parseInt(servItemImg.css('width'));
    var elemHeight = parseInt(servItemImg.css('height'));
    var elem1Width = parseInt(howItemImg.css('width'));
    var elem1Height = parseInt(howItemImg.css('height'));
    var elem2Width = parseInt(aboutImg.css('width'));
    var elem2Height = parseInt(aboutImg.css('height'));

    servItemImg.hover(
        function() {
            $(this).stop().animate({
                width: (elemWidth+elemWidth/10)+'px',
                height: (elemHeight+elemHeight/10)+'px'
            }, 400);
        }, function() {
            $(this).stop().animate({
                width: elemWidth+'px',
                height: elemHeight+'px'
            }, 400);
        }
    );

    howItemImg.hover(
        function(){
            $(this).stop().animate({
                width: (elem1Width+elem1Width/10)+'px',
                 height: (elem1Height+elem1Height/10)+'px'
            }, 400);
        }, function() {
            $(this).stop().animate({
                width: elem1Width+'px',
                height: elem1Height+'px'
            }, 400);
        }
    );

    aboutImg.hover(
        function(){
            $(this).stop().animate({
                width: (elem2Width+elem2Width/10)+'px',
                height: (elem2Height+elem2Height/10)+'px'
            }, 400);
        }, function() {
            $(this).stop().animate({
                width: elem2Width+'px',
                height: elem2Height+'px'
            }, 400);
        }
    );

    //Portfolio Menu

    $('#work a').on('click', function(e) {
        e.preventDefault();
        var self = $(this);
        $('#work .active').removeClass('active');
        self.addClass('active');

        $('.works-item').each(function() {
            if ($(this).children('span').children('h4').html() == self.html() || self.html() == 'ALL') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    //Proud Counters part 2
    var pos = $('.proud .rectangle').offset().top;

    doc.scroll(function(e) {
        var scr = doc.scrollTop();

        if(pos-$(window).innerHeight()/1.4 < scr && scr < pos+$(window).innerHeight()/5) {
            proudCounters();
            doc.unbind(e);
        }
    });
    function proudCounters() {
        var cnt1 = 0;
        var cnt2 = 0;
        var cnt3 = 0;
        var cnt4 = 0;

        var interval1 = setInterval(function() {
            $('.rectangle .hc').text(cnt1+=40);
            if(cnt1 == 1600) {
                clearInterval(interval1);
            }
        }, 75);

        var interval2 = setInterval(function() {
            $('.rectangle .cp').text(cnt2+=80);
            if(cnt2 == 3200) {
                clearInterval(interval2);
            }
        }, 75);

        var interval3 = setInterval(function() {
            $('.rectangle .aw').text(cnt3+=1);
            if(cnt3 == 40) {
                clearInterval(interval3);
            }
        }, 75);

        var interval4 = setInterval(function() {
            $('.rectangle .cd').text(cnt4+=500);
            if(cnt4 == 20000) {
                clearInterval(interval4);
            }
        }, 75);
    }

    //Team Member's Info
    var memberName = $('#memberName');
    var memberAbout = $('memberAbout');
    var memberSkill1 = $('memberSkill1');
    var memberSkill2 = $('memberSkill2');
    var memberSkill3 = $('memberSkill3');
    var memberSkill4 = $('memberSkill4');

    $('.team .card').click(function(e) {
        $(this).addClass('activeMember');
        var opt = $(this)[0].getBoundingClientRect();
        var leftOffset = opt.left + opt.width/2 - 25;
        $('.expand .triangle').css('left', leftOffset+'px');
 
        var currentInfo = membersInfo[$(this).data('id')];
        
        memberName.html(currentInfo.name);
        memberAbout.html(currentInfo.about);
        memberSkill1.html(currentInfo.skills[0].skill);
        memberSkill2.html(currentInfo.skills[1].skill);  
        memberSkill3.html(currentInfo.skills[2].skill);  
        memberSkill4.html(currentInfo.skills[3].skill);
        $(this).data('skills', currentInfo.skills); 
        timers();  //use function from Proud Counters      
    });

    //Button(Go to Contacts) Handler
    $('.doyoulike button').click(function() {
        $('body, html').animate({scrollTop: $('.contact').offset().top}, 900);
        return false;
    });

    //Button(Go to Top) Handler
    $('footer button').click(function() {
        $('body, html').animate({scrollTop: 0}, 900);
        return false;
    });

    //Validation Form
    $('.message').keyup(function(e) {
        var elem = e.target;
        if (elem.name == 'name') {
            if (elem.value.search(/^[a-z A-Z]+$|^$/) < 0) {
                $(elem).next().show();
            } else {
                $(elem).next().hide();
            }
        }

        if (elem.name == 'mail') {
            if (elem.value.search(/^[a-zA-Z0-9_@\.]+$|^$/) < 0) {
                $(elem).next().show();
            } else {
                $(elem).next().hide();
            }
        }

        if (elem.name == 'subject') {
            if (elem.value.search(/^[a-zA-Z0-9]+$|^$/) < 0) {
                $(elem).next().show();
            } else {
                $(elem).next().hide();
            }
        }
    });

    //Slider Reviews
    var reviews = [
        {quote: '“An image is not simply a trademark, a design, a slogan or an easily'+
            ' remembered picture. It is a studiously crafted personality profile of an'+
            ' individual, institution,corporation, product or service”',
        autor: 'Daniel J. Boorstin'},
        {quote: '“An image is not simply a trademark, a design, a slogan or an easily'+
            ' remembered picture. It is a studiously crafted personality profile of an'+
            ' individual, institution,corporation, product or service”',
        autor: 'Mark Terry'},
        {quote: '“An image is not simply a trademark, a design, a slogan or an easily'+
            ' remembered picture. It is a studiously crafted personality profile of an'+
            ' individual, institution,corporation, product or service”',
        autor: 'Peter McCoy'},
        {quote: '“An image is not simply a trademark, a design, a slogan or an easily'+
            ' remembered picture. It is a studiously crafted personality profile of an'+
            ' individual, institution,corporation, product or service”',
        autor: 'Moses Mitchell'}
    ];

    $('.reviews img').click(function(e) {
        var elem = $(e.target);

        $('.active-rev').attr('src', 'images/sep.png');
        $('.active-rev').removeClass('active-rev');
        elem.addClass('active-rev').attr('src', 'images/Separator.png');

        $('.reviews .quote').animate({
            opacity: 0
        }, 0);
        $('.reviews .autor').animate({
            opacity: 0
        }, 0);         
        
        $('.reviews .quote').animate({
            opacity: 1
        }, 800);
        $('.reviews .autor').animate({
            opacity: 1
        }, 800);
        $('.reviews .quote').html(reviews[elem.attr('id')[3]].quote);
        $('.reviews .autor').html(reviews[elem.attr('id')[3]].autor);
    });

    //Slider Clients
    (function htmlSlider(){
        var slideWrap = $('.slide-wrap');
        var slideWidth = $('.slide-item').outerWidth();
        var scrollSlider = slideWrap.position().left - slideWidth;
    
        setInterval(function() {
            slideWrap.animate({left: scrollSlider}, 500, function(){
            slideWrap
                .find('.slide-item:first')
                .appendTo(slideWrap)
                .parent()
                .css({'left': 0});
            }); 
        }, 3000);
    })();

});