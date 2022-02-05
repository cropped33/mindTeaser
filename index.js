function generator() {
    return Math.floor(Math.random() * 4) + 1;
}

// function check(num) {
//     $(".btn").click(function (event) {

//         // if (event.target.hasClass("b" + list[num]))
//         //     continue;
//         // else
//         //     restart();

//     })
// }

$(".start").click(light);



var list = [];


function light() {
    $(".start").remove();
    $("h1").html("Enter the pattern");
    light1();
}

function light1() {
    var number = generator();
    list.push(number);

    for (var i = 0; i < list.length; i++) {
        $(".b" + list[i]).addClass("pressed");
        setTimeout(() => {
            $(".b" + number).removeClass("pressed");
        }, 1000);

        // check(list[i]);
    }

    if (list.length < 5)
        light1();
}
