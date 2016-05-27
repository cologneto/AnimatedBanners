var dailyMatches = [];
var dailyMatchesSelections = [];
var selections = [];

function changingSlidesAll() {

    var counter = 0;
    
    var oddHome = $("#selection1");
    var oddDraw = $("#selection2");
    var oddAway = $("#selection3");
    var home = $("#home");
    var draw = $("#draw");
    var away = $("#away");
    var isStarting = true;
    var logo = $("#logo");
    var promotionText = $("#promotionText");
    var changeFootballPic = false;
    var currentMatchName = "";
    

    function changeSlides() {

        if (counter == 0 && isStarting) {
            console.log();
            isStarting = false;
        }
        else {
            if (dailyMatches[counter].SelectionListVM.length == 0) {
                counter++;
                if (dailyMatches[counter].SelectionListVM == 0) {
                    counter++;
                }
            }

            if (dailyMatches[counter].SelectionListVM.length == 2 || dailyMatches[counter].SelectionListVM.length == 4) {
               
            }
            else {
                
                home.text(dailyMatches[counter].SelectionListVM[0].SelectionName);
                draw.text(dailyMatches[counter].SelectionListVM[1].SelectionName);
                away.text(dailyMatches[counter].SelectionListVM[2].SelectionName);
                oddHome.text(dailyMatches[counter].SelectionListVM[0].SelectionValue.toFixed(2));
                oddDraw.text(dailyMatches[counter].SelectionListVM[1].SelectionValue.toFixed(2));
                oddAway.text(dailyMatches[counter].SelectionListVM[2].SelectionValue.toFixed(2));
            }

            if (dailyMatches[counter].Sport == "Футбол") {

                if (!changeFootballPic && dailyMatches[counter].MatchName == currentMatchName) {
                    $(".line2").css('background-image', 'url(../images/soccer2_02.jpg)');
                }
                else if (changeFootballPic) {

                }
                currentMatchName = dailyMatches[counter].MatchName;

            }
            else if (dailyMatches[counter].Sport == "Волейбол") {
                $(".line2").css('background-image', 'url(../images/volleyball_02.jpg)');
            }

            else if (dailyMatches[counter].Sport == "Баскетбол") {
                $(".line2").css('background-image', 'url(../images/basketball_02.jpg)');
            }
            else if (dailyMatches[counter].Sport == "Тенис") {
                $(".line2").css('background-image', 'url(../images/tennis_02.jpg)');
            }

            counter++;
            if (counter >= dailyMatches.length) { counter = 0; isStarting = true; }
        }

        //counter++;
    }

    setInterval(changeSlides, 2400);


}



function ajaxCall2() {

    $.getJSON("../XML/testBG.json", function (json) {
        //console.log(json); // this will show the info it in firebug console
        //https://cdn1.efbet.com/efbet/XML/test.json
        for (var i = 0; i < json.length; i++) {
            if (json[i].Market == "Краен изход" ) {
                dailyMatches.push(json[i]);
            }
        }

        console.log(dailyMatches);
         
    });

    changingSlidesAll();
};

function ajaxCall2UK() {

    $.getJSON("../XML/testUK.json", function (json) {
        //console.log(json); // this will show the info it in firebug console
        //https://cdn1.efbet.com/efbet/XML/test.json
        dailyMatches = json;
    });

    changingSlidesAll();

};

function ajaxCall2TR() {

    $.getJSON("../XML/testTR.json", function (json) {
        //console.log(json); // this will show the info it in firebug console
        //https://cdn1.efbet.com/efbet/XML/test.json
        dailyMatches = json;
    });

    changingSlidesAll();
};

function ajaxCall2SQ() {

    $.getJSON("../XML/testSQ.json", function (json) {
        //console.log(json); // this will show the info it in firebug console
        //https://cdn1.efbet.com/efbet/XML/test.json
        dailyMatches = json;
    });

    changingSlidesAll();
};

