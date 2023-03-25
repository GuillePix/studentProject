function start(){

let actionBtn = document.getElementById('actionContactBtn');
let pencilElement = document.getElementById('pencilImg');
let matTeach = document.getElementById('mathTeacher');
let crossedElement = document.getElementById('crossedSymbol');
let angryTeacherElement = document.getElementById('angryTeacher');
let bus = document.getElementById('schoolBus');
let calculatorElement = document.getElementById('calculator');
let minusSymbolElement = document.getElementById('minusSymbol');

//background effect using jQuery
$(function(){
  var move = 0;
  setInterval(function(){
      move-=1;
      $('body').css('background-position', move + 'px');
  }, 15)
  })

function mouseFollow(e){
    document.addEventListener('mousemove', function(e){

        let left = e.pageX;
        let top = e.pageY;
    
        pencilElement.style.left = left + 1 +'px';
        pencilElement.style.top = top + 1 +'px';
    })    
}

function actionStudent()
{  
let start = Date.now();    
let timer = setInterval(function()
{ 
let timePassed = Date.now() - start;  
student.style.left = timePassed/3 + 'px'; 
if (timePassed > 1500) clearInterval(timer);
}, 10);
}

function actionBus()
{  
let start = Date.now();    
let timer = setInterval(function()
{ 
let timePassed = Date.now() - start;  
bus.style.right = timePassed/3 + 'px'; 

if (timePassed > 3600) {
  clearInterval(timer);
  student.style = 'opacity: 0; transform: rotateZ(180deg); transition: 3s ease-in;';

        setInterval(function()
      { 
      let timePassed = Date.now() - start;  
      if (timePassed > 1500) {
        clearInterval(timer);
        bus.style.right = timePassed/3 + 'px';

        }
          }, 10);      
    }
      }, 10);
}

function actionTeacher()
{  
let start = Date.now();    
let timer = setInterval(function()
{ 
let timePassed = Date.now()- start;  
mathTeacher.style.right = timePassed/4 + 'px';     
if (timePassed > 2100){
  clearInterval(timer);
  } 
}, 10);

}

document.getElementById('massFormula').style =
'transform: rotateY(-360deg); transition: 4s ease-out; ';

document.getElementById('comparisonSymbol').style =
'transform: rotateZ(-180deg); transition: 5s ease-in-out; ';

document.getElementById('comparisonSymbol2').style =
'transform: rotateY(-360deg); transition: 5s ease-in-out; ';

document.getElementById('operators').style = 
'animation: operators 25s linear infinite; rotateZ(180deg);';

//Circle Motion
calculatorElement.style = 'animation:rotateCalculator 5.5s linear infinite;';
crossedElement.style = 'animation:rotateCrossed 3.5s linear infinite;';
minusSymbolElement.style = 'animation:rotateMinus 4.5s linear infinite;';

function actionOperators()
{  
let start = Date.now();    
let timer = setInterval(function()
{ 
let timePassed = Date.now() - start;  
// operators.style = 'visibility: visible;';
operators.style.left = timePassed/3 + 'px'; 
    if (timePassed > 4250) 
    clearInterval(timer);

    setInterval(function()
      { 
     let timePassed = Date.now() - start;  
     document.getElementById('result').innerHTML ="1";
         
     }, 3200);
      
  }, 15);
}


function clock() {
  var hours = document.getElementById('hour');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;  
}

var interval = setInterval(clock, 1000);

  actionStudent();
  mouseFollow();
  actionTeacher();
  actionBus();
  actionOperators();
}

actionBtn.addEventListener('click', function(){
  start();
  actionBtn.style = 'opacity: 0; transform: rotateX(180deg); transition: 3s ease-out;';
});  

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));


buttons.map( button => {
  button.addEventListener('click', (e) => {
      switch(e.target.innerText){
          case 'C':
              display.innerText = '';
              break;
          case '=':
              try{
                  display.innerText = eval(display.innerText);
              } catch {
                  display.innerText = "Error"
              }
              break;
          case '←':
              if (display.innerText){
                 display.innerText = display.innerText.slice(0, -1);
              }
              break;
          default:
              display.innerText += e.target.innerText;
      }
  });
});

