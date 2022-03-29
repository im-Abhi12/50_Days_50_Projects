var a = document.getElementById("a");
var s = document.getElementById("s");
var d = document.getElementById("d");
var f = document.getElementById("f");
var g = document.getElementById("g");
var h = document.getElementById("h");
var j = document.getElementById("j");
var k = document.getElementById("k");
var l = document.getElementById("l");
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");
var audio6 = document.getElementById("audio6");
var audio7 = document.getElementById("audio7");
var audio8 = document.getElementById("audio8");
var audio9 = document.getElementById("audio9");

document.body.addEventListener("keydown", function (e) {
switch (e.keyCode) {
        case 65: a.classList.toggle("active");
            audio1.play();           
            break;
        case 83: s.classList.toggle("active");
        audio2.play();
            break;
        case 68: d.classList.toggle("active");
        audio3.play();
            break;
        case 70: f.classList.toggle("active");
        audio4.play();
            break;
        case 71: g.classList.toggle("active");
        audio5.play();
            break;
        case 72: h.classList.toggle("active");
        audio6.play();
            break;
        case 74: j.classList.toggle("active");
        audio7.play();
            break;
        case 75: k.classList.toggle("active");
        audio8.play();
            break;
        case 76: l.classList.toggle("active");
        audio9.play();
            break;
        default: console.log("Any other key is pressed")
    }
});