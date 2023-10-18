var headHour1 = document.getElementById('hour1');
var headHour2 = document.getElementById('hour2');

var headMin1 = document.getElementById('minute1');
var headMin2 = document.getElementById('minute2');

var headSec1 = document.getElementById('second1');
var headSec2 = document.getElementById('second2');

var headMilSec1 = document.getElementById('miliSec1');
var headMilSec2 = document.getElementById('miliSec2');

var hour1 = 0;
var hour2 = 0;

var min1 = 0;
var min2 = 0;

var sec1 = 0;
var sec2 = 0;

var milSec1 = 0;
var milSec2 = 0;

var interval;



function time()
{
    milSec2++;  
    headMilSec2.innerHTML = milSec2;
    
    if(milSec2 > 9){
        
        milSec2 = 0;
        headMilSec2.innerHTML = milSec2;
       
        milSec1++;
        headMilSec1.innerHTML = milSec1;
    }

    else if(milSec1 > 9){
        
        milSec1 = 0;
        headMilSec1.innerHTML = milSec1;
        
        sec2++;
        headSec2.innerHTML = sec2+ ":";
    }

    else if(sec2 > 9){
        
        sec2 = 0;
        headSec2.innerHTML = sec2+ ":";

        sec1++;
        headSec1.innerHTML = sec1;
    }

    else if(sec1 > 5){
        
        sec1 = 0;
        headSec1.innerHTML = sec1;

        min2++;
        headMin2.innerHTML = min2+ ":";
    }

    else if(min2 > 9){
        
        min2 = 0;
        headMin2.innerHTML = min2+ ";";

        min1++;
        headMin1.innerHTML = min1
    }
   
    else if(min1 > 5){
        
        min1 = 0;
        headMin1.innerHTML = min1;

        hour2++;
        headHour2.innerHTML = hour2+ ":";
    }

    else if(hour2 > 9){
        
        hour2 = 0;
        headHour2.innerHTML = hour2+ ":";
    
        hour1++;
        headHour1.innerHTML = hour1;
    }
}  


function start()
{
    var start = document.getElementById('startBtn');
    start.disabled = true;
    clearInterval(interval);
    interval = setInterval(time, 10);
}



function pause()
{
    clearInterval(interval);
    var start = document.getElementById('startBtn');
    start.disabled = false;
}
    
        
function reset()
{
    pause()

    var hour1 = 0;
    var hour2 = "0:";
    
    var min1 = 0;
    var min2 = "0:";
    
    var sec1 = 0;
    var sec2 = "0:";
    
    var milSec1 = 0;
    var milSec2 = 0;

    headHour1.innerHTML = hour1;
    headHour2.innerHTML = hour2;

    headMin1.innerHTML = min1;
    headMin2.innerHTML = min2;
    
    headSec1.innerHTML = sec1;
    headSec2.innerHTML = sec2;
    
    headMilSec1.innerHTML = milSec1;
    headMilSec2.innerHTML = milSec2;
}
