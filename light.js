function bulbSwitch(){
    var bulb = document.getElementById("lightbulb");
    if(bulb.src.match("lightbulbON")){
        bulb.src="lightbulbOFF.jpg";
    }
    else{
        bulb.src="lightbulbON.jpg";
    }
}