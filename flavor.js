var option1 = localStorage.option1;
console.log(option1);

var scale = window.devicePixelRatio;

//Creating the canvases
var milkTea= document.getElementById('milk-tea');
milkTea.style.width="75px";
milkTea.style.height="75px";
milkTea.width = Math.floor(75*scale);
milkTea.height = Math.floor(75*scale);
var mT = milkTea.getContext('2d');

var taroTea= document.getElementById('taro-milk-tea');
taroTea.style.width="75px";
taroTea.style.height="75px";
taroTea.width = Math.floor(75*scale);
taroTea.height = Math.floor(75*scale);
var tT = taroTea.getContext('2d');

var thaiTea= document.getElementById('thai-tea');
thaiTea.style.width="75px";
thaiTea.style.height="75px";
thaiTea.width = Math.floor(75*scale);
thaiTea.height = Math.floor(75*scale);
var thT = thaiTea.getContext('2d');

var matchaLatte= document.getElementById('matcha-latte');
matchaLatte.style.width="75px";
matchaLatte.style.height="75px";
matchaLatte.width = Math.floor(75*scale);
matchaLatte.height = Math.floor(75*scale);
var mL = matchaLatte.getContext('2d');

var lycheeTea= document.getElementById('lychee-green-tea');
lycheeTea.style.width="75px";
lycheeTea.style.height="75px";
lycheeTea.width = Math.floor(75*scale);
lycheeTea.height = Math.floor(75*scale);
var lT = lycheeTea.getContext('2d');

var strawberryLatte= document.getElementById('strawberry-latte');
strawberryLatte.style.width="75px";
strawberryLatte.style.height="75px";
strawberryLatte.width = Math.floor(75*scale);
strawberryLatte.height = Math.floor(75*scale);
var sL = strawberryLatte.getContext('2d');

var cup= document.getElementById('cup');
cup.style.width="80px";
cup.style.height="120px";
cup.width = Math.floor(80*scale);
cup.height = Math.floor(120*scale);
var c = cup.getContext('2d');




