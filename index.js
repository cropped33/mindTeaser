function generator() {
    return Math.floor(Math.random() * 4) + 1;
}


$(".start").click(light);


function lightItUp(identity) {
    $("#" + identity).addClass("pressed");
    setTimeout(() => {
        $("#" + identity).removeClass("pressed");
    }, 100);
}

var list = [];


function light() {
    $(".start").hide();
    $("h1").html("Level " + (list.length + 1));
    light1();
}

function light1() {
    var number = generator();
    list.push("b" + number);
    $("#b" + number).fadeIn(100).fadeOut(100).fadeIn(100);

}

var userClicked = [];

$(".bt").click(function () {
    var user = $(this).attr("id");
    userClicked.push(user);
    lightItUp(user);         // yo add gare hai but click garda effect nai dekhaudaina
    // $("#"+user).addClass("pressed");

    // console.log($(this).attr("class"));
    // check();
})
// function check() {

//     if (userClicked === list) {

//     }
// }

