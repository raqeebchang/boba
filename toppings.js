
var scale = window.devicePixelRatio;

function drawCircle(canv, height, color){
    canv.arc(height/2, height/2, height/2-10, 0, Math.PI*2, false);
    canv.fillStyle = color;
    canv.fill();
    canv.stroke();
}

function drawCup(c, middle, height){
    c.beginPath();
    c.lineWidth=0;
    let width = middle*.75;
    let edge = middle*.9;
    let top = height*.85;
    c.moveTo(middle-width, height-10);
    c.lineTo(middle-edge, height-top);
    c.lineTo(middle+edge, height-top)
    c.lineTo(middle+width, height-10);
    c.closePath();
    c.stroke();
}

function drawStraw(c, middle, height){
    //Straw
    c.beginPath();
    c.lineWidth=2;
    let top = height*.85;
    c.moveTo(middle-5, height-top);
    c.lineTo(middle-5,10);
    c.lineTo(middle+5,10);
    c.lineTo(middle+5, height-top);
    c.fillStyle="white";
    c.fill();
    c.stroke();
}

var boba = document.getElementById("boba");
boba.style.width="75px";
boba.style.height="75px";
boba.width = Math.floor(75*scale);
boba.height = Math.floor(75*scale);
var bb = boba.getContext('2d');
drawCircle(bb, boba.height, "white");

var grassJelly = document.getElementById("grass-jelly");
grassJelly.style.width="75px";
grassJelly.style.height="75px";
grassJelly.width = Math.floor(75*scale);
grassJelly.height = Math.floor(75*scale);
var gJ = grassJelly.getContext('2d');
drawCircle(gJ, grassJelly.height, "white");

var lycheeJelly = document.getElementById("lychee-jelly");
lycheeJelly.style.width="75px";
lycheeJelly.style.height="75px";
lycheeJelly.width = Math.floor(75*scale);
lycheeJelly.height = Math.floor(75*scale);
var lJ = lycheeJelly.getContext('2d');
drawCircle(lJ, lycheeJelly.height, "white");

var pudding = document.getElementById("pudding");
pudding.style.width="75px";
pudding.style.height="75px";
pudding.width = Math.floor(75*scale);
pudding.height = Math.floor(75*scale);
var pd = pudding.getContext('2d');
console.log('reached');
drawCircle(pd, pudding.height, "white");

var cup= document.getElementById('cup');
cup.style.width="120px";
cup.style.height="160px";
cup.width = Math.floor(120*scale);
cup.height = Math.floor(160*scale);
var c = cup.getContext('2d');
drawStraw(c, cup.width/2, cup.height);
drawCup(c, cup.width/2, cup.height);