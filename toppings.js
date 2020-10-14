//TODO: store the flavor color from flavor.js in localstorage and use 
//that to color the background of the "topping" circles


var scale = window.devicePixelRatio;

function drawCircle(canv, height, color){
    canv.arc(height/2, height/2, height/2-10, 0, Math.PI*2, false);
    canv.fillStyle=color;
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

function fillCup(c,color){
    c.fillStyle=color;
    c.fill();
}

function drawBoba(c, middle, height){
    c.lineWidth=1;
    let width=middle*.75;
    let fullWidth = (middle-width)+(middle+width);

    function Bubble (x,y,dx,dy, radius){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.radius = radius;

        this.draw = function(){
            c.beginPath();
                c.arc(this.x, this.y, this.radius,0,Math.PI*2, false);
                c.strokeStyle="black";
                c.stroke();
                c.fillStyle="black";
                c.fill();

        };

        this.update = function(){
            if(this.x>=middle+width-this.radius||this.x<middle-width+this.radius){
                    this.dx= -this.dx;
            }
            this.x+=this.dx;
            if(this.y+this.radius >= height-10 || this.y-this.radius < height-(height/5)){
                this.dy = -this.dy;
            }
            this.y+=this.dy;
            this.draw();
        };
    }
    let x = middle-width+15;
    
    var radius = middle/15;
    var bubbleArr = [];

    for(var i = 1; i<=5; i++){
        for(var j = 1; j<=10; j++){
            var a = middle;
            var b = height-30;
            var v1 = (Math.random()-0.5)*2;
            var v2 = (Math.random()-0.5)*2;
            bubbleArr.push(new Bubble(a,b,v1,v2,radius));
        } 
    }

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, cup.width, cup.height);
        drawStraw(c, cup.width/2, cup.height);
        drawCup(c, cup.width/2, cup.height);
        fillCup(c, fillColor);
    
        for(var i = 0; i<bubbleArr.length; i++){
            bubbleArr[i].update();
        }
    }   
    animate();
}

function drawGrassJelly(c, middle, height){
    c.lineWidth=1;
    let width=middle*.75;
    let fullWidth = (middle-width)+(middle+width);

    function Square (x,y,dx,dy){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;

        this.draw = function(){
            c.beginPath();
            c.moveTo(this.x-15, this.y);
            c.lineTo(this.x+15, this.y);
            c.lineTo(this.x+15, this.y-15);
            c.lineTo(this.x-15, this.y-15);
            c.closePath();
            c.strokeStyle="black";
            c.stroke();
            c.fillStyle="black";
            c.fill();
        };

        this.update = function(){
            if(this.x>=middle+width-15||this.x<middle-width+15){
                    this.dx= -this.dx;
            }
            this.x+=this.dx;
            if(this.y >= height-10 || this.y-7.5 < height-(height/5)){
                this.dy = -this.dy;
            }
            this.y+=this.dy;
            this.draw();
        };
    }
    let x = middle-width+15;
    var squareArr = [];

    for(var i = 1; i<=3; i++){
        for(var j = 1; j<=8; j++){
            var a = middle;
            var b = height-30;
            var v1 = (Math.random()-0.5)*2;
            var v2 = (Math.random()-0.5)*2;
            squareArr.push(new Square(a,b,v1,v2));
        } 
    }

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, cup.width, cup.height);
        drawStraw(c, cup.width/2, cup.height);
        drawCup(c, cup.width/2, cup.height);
        fillCup(c, fillColor);
        //requestAnimationFrame(animate);
        for(var i = 0; i<squareArr.length; i++){
            squareArr[i].update();
        }
    }
    animate();
}

function drawLycheeJelly(c, middle, height){
    c.lineWidth=1;
    let width=middle*.75;
    let fullWidth = (middle-width)+(middle+width);

    function Square (x,y,dx,dy){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;

        this.draw = function(){
            c.beginPath();
            c.moveTo(this.x-15, this.y);
            c.lineTo(this.x+15, this.y);
            c.lineTo(this.x+15, this.y-15);
            c.lineTo(this.x-15, this.y-15);
            c.closePath();
            c.fillStyle="#FFFDE7";
            c.fill();
            c.strokeStyle="grey";
            c.stroke();
        };

        this.update = function(){
            if(this.x>=middle+width-15||this.x<middle-width+15){
                    this.dx= -this.dx;
            }
            this.x+=this.dx;
            if(this.y >= height-10 || this.y-7.5 < height-(height/5)){
                this.dy = -this.dy;
            }
            this.y+=this.dy;
            this.draw();
        };
    }
    let x = middle-width+15;
    var squareArr = [];

    for(var i = 1; i<=3; i++){
        for(var j = 1; j<=8; j++){
            var a = middle;
            var b = height-30;
            var v1 = (Math.random()-0.5)*2;
            var v2 = (Math.random()-0.5)*2;
            squareArr.push(new Square(a,b,v1,v2));
        } 
    }

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, cup.width, cup.height);
        drawStraw(c, cup.width/2, cup.height);
        drawCup(c, cup.width/2, cup.height);
        fillCup(c, fillColor);
        //requestAnimationFrame(animate);
        for(var i = 0; i<squareArr.length; i++){
            squareArr[i].update();
        }
    }
    animate();
}

function drawNone(c, middle, height){
    c.lineWidth=1;
    let width=middle*.75;
    let fullWidth = (middle-width)+(middle+width);

    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, cup.width, cup.height);
        drawStraw(c, cup.width/2, cup.height);
        drawCup(c, cup.width/2, cup.height);
        fillCup(c, fillColor);
    }
    animate();
}


var boba = document.getElementById("boba");
boba.style.width="75px";
boba.style.height="75px";
boba.width = Math.floor(75*scale);
boba.height = Math.floor(75*scale);
var bb = boba.getContext('2d');
drawCircle(bb, boba.height, "white");
let radius = 15;
for(let i = 0; i<3; i++){
    for(let k = 0; k<3; k++){
        bb.beginPath();
        bb.arc((boba.width/2-30)+i*30, (boba.height/2-30)+k*30, 15, 0 , Math.PI*2, false);
        bb.fillStyle="black";
        bb.fill();
    }
}

var grassJelly = document.getElementById("grass-jelly");
grassJelly.style.width="75px";
grassJelly.style.height="75px";
grassJelly.width = Math.floor(75*scale);
grassJelly.height = Math.floor(75*scale);
var gJ = grassJelly.getContext('2d');
drawCircle(gJ, grassJelly.height, "white");

for(let i = 0; i<3; i++){
    for(let k = 0; k<3; k++){
        gJ.beginPath();
        gJ.moveTo(grassJelly.width/2-51+(i*34), grassJelly.height/2-30+(k*24));
        gJ.lineTo(grassJelly.width/2-21+(i*34), grassJelly.height/2-30+(k*24));
        gJ.lineTo(grassJelly.width/2-21+(i*34), grassJelly.height/2-20+(k*24));
        gJ.lineTo(grassJelly.width/2-51+(i*34), grassJelly.height/2-20+(k*24));
        //Since the width of each row is 102, each one can be 30, with 4 between 
        gJ.closePath();
        gJ.fillStyle="black";
        gJ.fill();
        
    }
}

var lycheeJelly = document.getElementById("lychee-jelly");
lycheeJelly.style.width="75px";
lycheeJelly.style.height="75px";
lycheeJelly.width = Math.floor(75*scale);
lycheeJelly.height = Math.floor(75*scale);
var lJ = lycheeJelly.getContext('2d');
drawCircle(lJ, lycheeJelly.height, "white");
for(let i = 0; i<3; i++){
    for(let k = 0; k<3; k++){
        lJ.beginPath();
        lJ.moveTo(lycheeJelly.width/2-51+(i*34), lycheeJelly.height/2-30+(k*24));
        lJ.lineTo(lycheeJelly.width/2-21+(i*34), lycheeJelly.height/2-30+(k*24));
        lJ.lineTo(lycheeJelly.width/2-21+(i*34), lycheeJelly.height/2-20+(k*24));
        lJ.lineTo(lycheeJelly.width/2-51+(i*34), lycheeJelly.height/2-20+(k*24));
        //Since the width of each row is 102, each one can be 30, with 4 between 
        lJ.closePath();
        lJ.fillStyle="#FFFDE7";
        lJ.fill();
        lJ.stroke();
        
    }
}

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


let colors = ['#F6DDCC', '#C39BD3', '#EB984E', '#A9DFBF', '#FAD7A0', '#F5B7B1'];

let fillColor = "";

if(localStorage.option2=="milk tea"){
    fillColor = colors[0];
}
else if(localStorage.option2=="taro milk tea"){
    fillColor = colors[1];
}
else if(localStorage.option2=="thai tea"){
    fillColor = colors[2];
}
else if(localStorage.option2=="matcha latte"){
    fillColor = colors[3];
}
else if(localStorage.option2=="lychee green tea"){
    fillColor = colors[4];
}
else if(localStorage.option2=="strawberry latte"){
    fillColor = colors[5];
}

drawStraw(c, cup.width/2, cup.height);
drawCup(c, cup.width/2, cup.height);
fillCup(c, fillColor);

let selection = "";
function helperDrawBoba(){
    c.clearRect(0, 0, cup.width, cup.height);
    c.beginPath();
    drawBoba(c, cup.width/2, cup.height);
    selection = "boba";
}

function helperDrawGrassJelly(){
    c.clearRect(0, 0, cup.width, cup.height);
    c.beginPath();
    drawGrassJelly(c, cup.width/2, cup.height);
    selection = "grass jelly";
}

function helperDrawLycheeJelly(){
    c.clearRect(0, 0, cup.width, cup.height);
    c.beginPath();
    drawLycheeJelly(c, cup.width/2, cup.height);
    selection = "lychee jelly";
}

function helperStop(){
    drawNone(c, cup.width/2, cup.height);
    selection = "none";
}

function submission(){
    localStorage.option3 = selection;
    location.href = "sugar.html";
}






