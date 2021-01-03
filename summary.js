console.log(localStorage.option1);
console.log(localStorage.option2);
console.log(localStorage.option3);
console.log(localStorage.option4);
console.log(localStorage.option5);

var scale = window.devicePixelRatio;

let colors = ['#F6DDCC', '#C39BD3', '#EB984E', '#A9DFBF', '#FAD7A0', '#F5B7B1'];

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

    for(var i = 1; i<=5; i++){
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

    for(var i = 1; i<=5; i++){
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


var cup = document.getElementById("large");
cup.style.width="140px";
cup.style.height="180px";
cup.width=Math.floor(140*scale);
cup.height=Math.floor(180*scale);
var c = cup.getContext('2d');

/*drawStraw(c, cup.width/2, cup.height);
drawCup(c, cup.width/2, cup.height);
fillCup(c, colors[localStorage.option2]);*/
let fillColor = colors[localStorage.option2];

c.clearRect(0, 0, cup.width, cup.height);
c.beginPath();
if(localStorage.option3=="Boba"){
    drawBoba(c, cup.width/2, cup.height);
}
else if(localStorage.option3=="Grass Jelly"){
    drawGrassJelly(c, cup.width/2, cup.height);
}
else if(localStorage.option3=="Lychee Jelly"){
    drawLycheeJelly(c, cup.width/2, cup.height);
}
else if(localStorage.option3=="None"){
    drawNone(c, cup.width/2, cup.height);
}

let flavors = ["Milk Tea", "Taro Milk Tea", "Thai Tea", "Matcha Latte", "Lychee Green Tea", "Strawberry Latte"];

function fillSummary(){
    let size = document.getElementById("size");
    size.innerHTML = "Size: " + localStorage.option1;
    let flavor = document.getElementById("flavor");
    flavor.innerHTML = "Flavor: " + flavors[localStorage.option2];
    let topping = document.getElementById("topping");
    topping.innerHTML = "Topping: " + localStorage.option3;
    let sugar = document.getElementById("sugar");
    sugar.innerHTML = "Sugar Level: " + localStorage.option4 + "%";
    let ice = document.getElementById("ice");
    ice.innerHTML = localStorage.option5;
}

fillSummary();
