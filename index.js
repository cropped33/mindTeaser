function generator() {
    return Math.floor(Math.random() * 4);
}
var start = false;

$(".start").click(light);


function lightItUp(identity) {
    $("#" + identity).addClass("pressed");
    setTimeout(function(){
        $("#" + identity).removeClass("pressed");
    }, 100);
}

var list = [];


function light() {
    $(".start").hide();
    start = true;

    light1();
}

function light1() {
    if ($("body").addClass("gameover")) {
        $("body").removeClass("gameover");
    }

    var number = generator();
    list.push("b" + number);
    $("h1").html("Level " + (list.length));
    $("#b" + number).fadeIn(100).fadeOut(100).fadeIn(100);

}

var userClicked = [];
var count = 0;

$(".bt").click(function () {
    if (start === true) {
        var user = $(this).attr("id");
        userClicked.push(user);
        lightItUp(user);
        check();
    }
})

function check() {

    if (userClicked[count] === list[count]) {
        if (userClicked.length === list.length) {
            light1();
            count = 0;
            userClicked = [];
        }
    }
    else {
        alert("userClicked");
        console.log(list);
        $("h1").html("GAME OVER!!!");
        setTimeout(function(){
            $("body").addClass("gameover");
        }, 200);
        list = [];
        userClicked = [];
        $(".start").show();
    }
}

