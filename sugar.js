console.log(localStorage.option1);
console.log(localStorage.option2);
console.log(localStorage.option3);

var slider = document.getElementById("slider");
var values = document.getElementById("wrapper");
values.style.bottom=slider.value*40+"px"
slider.oninput=function(){
    values.style.bottom=slider.value*40+"px";

}

function submission(){
    localStorage.option4=slider.value*25;

    if (document.getElementById("r1").checked){
        localStorage.option5 = "No Ice";
    }
    else if (document.getElementById("r2").checked){
        localStorage.option5 = "Less Ice";
    }
    else if (document.getElementById("r3").checked){
        localStorage.option5 = "Regular Ice";
    }
    else if (document.getElementById("r4").checked){
        localStorage.option5 = "More Ice";
    }

    location.href = "summary.html"

}
//I can just have these as conditions for the submit, so it uses that state


