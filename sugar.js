console.log(localStorage.option1);
console.log(localStorage.option2);
console.log(localStorage.option3);

var slider = document.getElementById("slider");
var values = document.getElementById("wrapper");
values.style.bottom=slider.value*40+"px"
slider.oninput=function(){
    values.style.bottom=slider.value*40+"px"
}

