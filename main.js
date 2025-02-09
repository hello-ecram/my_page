//this fuction makes the first id selected visible and other invisible, also makes glow the navbar button selected, selected button at 6th id
function show(shown, hidden1, hidden2, hidden3, hidden4, buttonSelected, button2, button3, button4, button5){
    document.getElementById(shown).style.display ="block";
    document.getElementById(hidden1).style.display ="none";
    document.getElementById(hidden2).style.display ="none";
    document.getElementById(hidden3).style.display ="none";
    document.getElementById(hidden4).style.display ="none";
    document.getElementById(buttonSelected).classList.add("selected");
    document.getElementById(button2).classList.remove("selected");
    document.getElementById(button3).classList.remove("selected");
    document.getElementById(button4).classList.remove("selected");
    document.getElementById(button5).classList.remove("selected");
    return false
};
//this function changes betwen themes
function changeTheme(){
    var value = document.getElementById("themeselector").value
    if(value == 1){
        document.getElementById("body").className = "dark";
    }
    if (value == 2) {
        document.getElementById("body").className = "white";
    } 
    else if (value == 3){
        document.getElementById("body").className = "darkblue";
    }
}
function move_player(){
    document.getElementById("player").style.backgroundColor = "red";
    document.getElementById('enemy').appendChild(  document.getElementById('player') )
}