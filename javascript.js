var x = 0;
let currentIndex = 0;
document.addEventListener("DOMContentLoaded", () => {
const textElement = document.getElementById("text");
const text = textElement.textContent;
textElement.innerHTML = '';
for (let char of text) {
const span = document.createElement('span');
span.textContent = char;
textElement.appendChild(span);
}
});
function strikeLetter() {
const spans = document.querySelectorAll('#text span');
while (currentIndex < spans.length) {
const char = spans[currentIndex].textContent;
spans[currentIndex].classList.add('strikethrough');
currentIndex++;
if (char.match(/[a-zA-Z]/)) {
break;
}
}
}
var angle =-5;
let y = Math.floor(Math.random() * 99)+1;
const mynumber =y;
var input = document.getElementById("guess");
input.addEventListener("keypress",function(event){
if(event.key==="Enter"){
event.preventDefault();
document.getElementById("mybtn").click();
}
});
function myFunction() {
if(x<15){
const guessednumber=document.getElementById("guess").value;
if(guessednumber==""){alert("Please make a guess");
}
else if(guessednumber<0){
alert("OUT OF RANGE : Please make a guess in range of 0 to 100");
}
else if(guessednumber>100){
alert("OUT OF RANGE : Please make a guess in range of 0 to 100");
}
else{
if(guessednumber==mynumber){
const Result = document.getElementById("result");
const declaration = document.getElementById("display");
declaration.innerHTML=guessednumber;
Result.innerHTML="RIGHT";
x=x+16
}
else{
strikeLetter();
x=x+1;
var gap = mynumber-guessednumber;
if(gap<0){
var decider = gap*(-1);
var rotate = angle+decider;
const Result = document.getElementById("result");
const declaration = document.getElementById("display");
declaration.innerHTML=guessednumber;
if (decider>40){
Result.style.color="red";
Result.innerHTML="TOO FAR";
}else{
if (decider>20){
Result.style.color="orange";
Result.innerHTML="FAR";
}
else {
if (decider>10){
Result.style.color="yellow";
Result.innerHTML="CLOSE";
}
else{
Result.style.color="green";
Result.innerHTML="TOO CLOSE";
}
}
}
marker=document.getElementById("needle");
marker.style.transform="rotate("+rotate+"deg)";
}
else{
var decider = gap*(-1);
var rotate = angle+decider;
const Result = document.getElementById("result");
const declaration = document.getElementById("display");
declaration.innerHTML=guessednumber;
if (gap>40){
Result.style.color="red";
Result.innerHTML="TOO FAR";
}else{
if (gap>20){
Result.style.color="orange";
Result.innerHTML="FAR";
}
else {
if (gap>10){
Result.style.color="yellow";
Result.innerHTML="CLOSE";
}
else{
Result.style.color="green";
Result.innerHTML="TOO CLOSE";
}
}
}
marker=document.getElementById("needle");
marker.style.transform="rotate("+rotate+"deg)";
}
}
}
}
else{
if(x>15){
alert("you have won ... refresh page to play again");
}
else{
alert("You lost all chances... refresh page for new game");
}
}
document.getElementById("guess").value="";
}

