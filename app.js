//TODO: learn how to animate through colors in canvas
//Small cup canvas sizing


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

    for(var i = 1; i<=3; i++){
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
        for(var i = 0; i<bubbleArr.length; i++){
            bubbleArr[i].update();
        }
    }
    animate();
}

var scale = window.devicePixelRatio;

var small= document.getElementById('small');
small.style.width="80px";
small.style.height="120px";
small.width = Math.floor(80*scale);
small.height = Math.floor(120*scale);
var c = small.getContext('2d');

var med = document.getElementById('medium');
med.style.width="120px";
med.style.height="160px";
med.width=Math.floor(120*scale);
med.height=Math.floor(160*scale);
var d = med.getContext('2d');

var lrg = document.getElementById("large");
lrg.style.width="140px";
lrg.style.height="180px";
lrg.width=Math.floor(140*scale);
lrg.height=Math.floor(180*scale);
var e = lrg.getContext('2d');

var elements = [];
elements.push(c);
elements.push(d);
elements.push(e);
//----------

//Drawing the cups

//----------

var duration=2.5;

// starting and ending colors
var rgbStart='#E1BEE7';
var rgbEnd='#FFAB91';

let colors = ['#F6DDCC', '#C39BD3', '#EB984E', '#A9DFBF', '#FAD7A0', '#F5B7B1'];

rgbStart = colors[0];
rgbEnd = colors[1];

var colorIdx = 0;
var next = colorIdx+1;
var switchDir = false;

// calculate the # of frames that requestAnimationFrame can draw
var opacitySteps=parseInt(60*duration);

// set the current opacity step at its starting number 
var opacityStep=0;

requestAnimationFrame(animate);


function animate(){ //Commented out time
    // calculate the current opacity as a percentage

    var opacity=100*(opacityStep/opacitySteps);
    if(opacityStep>=opacitySteps-1){ opacity=100; }

    // clear the canvas
    c.clearRect(0,0,small.width,small.height);
    d.clearRect(0,0,med.width,med.height);
    e.clearRect(0,0,lrg.width, lrg.height);

    // draw with the starting color using a lessening opacity
    for(let i = 0; i<elements.length; i++){
        elements[i].globalAlpha=(100-opacity)/100;
    }

    drawStraw(c,small.width/2, small.height);
    drawStraw(d,med.width/2, med.height);
    drawStraw(e,lrg.width/2, lrg.height);
    drawCup(c,small.width/2, small.height);
    drawCup(d, med.width/2, med.height);
    drawCup(e, lrg.width/2, lrg.height);

    for(let i = 0; i<elements.length; i++){
        elements[i].fillStyle=rgbStart;
        elements[i].fill();
    }
    
    // draw with the ending color using an increasing opacity
    for(let i = 0; i<elements.length; i++){
        elements[i].globalAlpha=(opacity)/100;
    }

    drawStraw(c,small.width/2, small.height);
    drawStraw(d,med.width/2, med.height);
    drawStraw(e,lrg.width/2, lrg.height);
    drawCup(c,small.width/2, small.height);
    drawCup(d, med.width/2, med.height);
    drawCup(e, lrg.width/2, lrg.height);

    for(let i = 0; i<elements.length; i++){
        elements[i].fillStyle=rgbEnd;
        elements[i].fill();
    }
 
    // clean up, reset globalAlpha to default of 1.00
    for(let i = 0; i<elements.length; i++){
        elements[i].globalAlpha=1.00;
    }
       
    // return if all steps have been played
    if(++opacityStep>=opacitySteps){
        opacitySteps=parseInt(60*duration);
        opacityStep=0;
        
        colorIdx++;
        next = colorIdx+1;
    
        if(colorIdx==colors.length){
            colorIdx = 0;
            next = colorIdx+1;
        }

        if(colorIdx == colors.length-1){
            next = 0;
        }
        rgbStart = colors[colorIdx];
        rgbEnd = colors[next];
    }
    // otherwise request another frame
    requestAnimationFrame(animate);
}
// bobas
drawBoba(c, small.width/2, small.height);
drawBoba(d,med.width/2, med.height);
drawBoba(e, lrg.width/2, lrg.height);


//Just have the site remember whatever size is clicked when opening the next page
document.getElementById("small-div").onclick = function(){
    localStorage.option1 = "small";
    //document.body.style.backgroundColor="black";
    location.href="flavor.html"
}

document.getElementById("med-div").onclick = function(){
    localStorage.option1 = "medium";
    //document.body.style.backgroundColor="black";
    location.href="flavor.html"
}

document.getElementById("lrg-div").onclick = function(){
    localStorage.option1 = "large";
    //document.body.style.backgroundColor="black";
    location.href="flavor.html"
}

