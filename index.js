
function digitalClock(){

    var date = new Date();
    var hour =  date.getHours();
    var min =  date.getMinutes();
    var sec =  date.getSeconds();
    
    if(hour == 0){
        h = 12;
    }
    
    hour  = hour>12 ? 12 : hour;
    hour = hour<10 ? "0"+hour : hour;
    min = min<10 ? "0"+min : min;
    sec = sec<10 ? "0"+sec : sec;
    
    
    
    document.getElementById("mydigitalclock").innerHTML = hour+":"+min + ":" + sec;
    setTimeout(digitalClock , 1000);
}
    
digitalClock();