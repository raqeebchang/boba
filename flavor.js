
var option1 = localStorage.option1;
console.log(option1);

let colors = ['#F6DDCC', '#C39BD3', '#EB984E', '#A9DFBF', '#FAD7A0', '#F5B7B1'];

function drawCircle(canv, height, color){
    canv.arc(height/2, height/2, height/2-10, 0, Math.PI*2, false);
    canv.fillStyle = color;
    canv.fill();
    canv.stroke();
    console.log(height);
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
    fillCup(c,colors[0])
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

function fillCup(c,color){
    c.fillStyle=color;
    c.fill();
}

var scale = window.devicePixelRatio;

//Creating the canvases
var milkTea= document.getElementById('milk-tea');
milkTea.style.width="75px";
milkTea.style.height="75px";
milkTea.width = Math.floor(75*scale);
milkTea.height = Math.floor(75*scale);
var mT = milkTea.getContext('2d');
drawCircle(mT, milkTea.height, colors[0]);

var taroTea= document.getElementById('taro-milk-tea');
taroTea.style.width="75px";
taroTea.style.height="75px";
taroTea.width = Math.floor(75*scale);
taroTea.height = Math.floor(75*scale);
var tT = taroTea.getContext('2d');
drawCircle(tT, taroTea.height, colors[1]);

var thaiTea= document.getElementById('thai-tea');
thaiTea.style.width="75px";
thaiTea.style.height="75px";
thaiTea.width = Math.floor(75*scale);
thaiTea.height = Math.floor(75*scale);
var thT = thaiTea.getContext('2d');
drawCircle(thT, thaiTea.height, colors[2]);

var matchaLatte= document.getElementById('matcha-latte');
matchaLatte.style.width="75px";
matchaLatte.style.height="75px";
matchaLatte.width = Math.floor(75*scale);
matchaLatte.height = Math.floor(75*scale);
var mL = matchaLatte.getContext('2d');
drawCircle(mL, matchaLatte.height, colors[3]);

var lycheeTea= document.getElementById('lychee-green-tea');
lycheeTea.style.width="75px";
lycheeTea.style.height="75px";
lycheeTea.width = Math.floor(75*scale);
lycheeTea.height = Math.floor(75*scale);
var lT = lycheeTea.getContext('2d');
drawCircle(lT, lycheeTea.height, colors[4]);

var strawberryLatte= document.getElementById('strawberry-latte');
strawberryLatte.style.width="75px";
strawberryLatte.style.height="75px";
strawberryLatte.width = Math.floor(75*scale);
strawberryLatte.height = Math.floor(75*scale);
var sL = strawberryLatte.getContext('2d');
drawCircle(sL, strawberryLatte.height, colors[5]);

var cup= document.getElementById('cup');
cup.style.width="120px";
cup.style.height="160px";
cup.width = Math.floor(120*scale);
cup.height = Math.floor(160*scale);
var c = cup.getContext('2d');
drawStraw(c, cup.width/2, cup.height);
drawCup(c, cup.width/2, cup.height);


//fillCup(c, "blue");
let flavor ="";
function coloring(x){
    fillCup(c, colors[x]);
    flavor = x;
}

function submission(){
    
    if(flavor == 0){
        localStorage.option2 = 0;
    }
    else if(flavor == 1){
        localStorage.option2 = 1;
    }
    else if(flavor == 2){
        localStorage.option2 = 2;
    }
    else if(flavor == 3){
        localStorage.option2 = 3;
    }
    else if(flavor == 4){
        localStorage.option2 = 4;
    }
    else if(flavor == 5){
        localStorage.option2 = 5;
    }
    location.href="toppings.html";
    

}





