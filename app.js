//TODO: learn how to animate through colors in canvas
//Small cup canvas sizing

colors=["#E1BEE7","#F3E5F5","#FCE4EC"];

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
    // TODO: animate bobas horizontally
    c.lineWidth=1;
    let width=middle*.75;
    let fullWidth = (middle-width)+(middle+width);
    // console.log(height); 

    var x = middle-width+15;
    var y = height-30;
    var y2 = height-45; 
    var dx = 1;
    var dy = 1;
    var dy2 = 1;
    var radius = 15;
    var radius2 = 10;

    function animate(){
        requestAnimationFrame(animate);
        // c.beginPath();
        // c.arc(x, y, radius, 0, Math.PI*2, false);
        // c.strokeStyle="black";
        // c.stroke();
        // if(x>=middle+width-radius||x<middle-width+radius){
        //     dx= -dx;
        // }
        // x+=dx;
        for(let i=middle-width+radius; i<=middle+width-radius; i+=2*radius){
            c.beginPath();
            c.arc(i, y,radius,0,Math.PI*2, false);
            c.stroke();
            c.fillStyle="black";
            c.fill();
        }
        y+=dy;
        if(y+radius >= height-10 || y-radius < height-60){
            dy = -dy;
        }
        for(let i=middle-width+2*radius2; i<=middle+width-radius2; i+=3*radius2){
            c.beginPath();
            c.arc(i, y2,radius2,0,Math.PI*2, false);
            c.stroke();
            c.fillStyle="black";
            c.fill();
        }
        y2-=dy;
        if(y2+radius >= height-10 || y2-radius < height-60){
            dy2 = -dy2;
        }

    }
    animate();
    // let k = height-25;
    // for(let i=middle-width+15; i<=middle+width-15; i+=30){
    //     c.beginPath();
    //     c.arc(i, k,15,0,Math.PI*2, false);
    //     c.stroke();
    //     c.fillStyle="black";
    //     c.fill();
    // }

}

//For width <= 600
function phoneSize(x){
    if(x.matches){
        //Setting the dpi stuff up 
        //----------
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
            }
            
            // otherwise request another frame
            requestAnimationFrame(animate);
        }
        // bobas
        drawBoba(c, small.width/2, small.height);
        drawBoba(d,med.width/2, med.height);
        drawBoba(e, lrg.width/2, lrg.height);
        
    }
    else{
        //Call 

        return;
    }
}

//Media queries
var x = window.matchMedia("(max-width: 600px)");
console.log(x);
phoneSize(x);
x.addListener(phoneSize);

