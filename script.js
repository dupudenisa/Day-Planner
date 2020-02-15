var currentDay = document.getElementById("currentDay");
var now = new Date();
var month = now.getMonth();
var day = now.getDay();
var hour = now.getHours();
//var save = document.getElementById("saveButton");


function retrieve(){
    var text=localStorage.getItem("text"); // from refresh
    document.getElementById('first').value = text; // display
}

retrieve();

function getToday(){

    currentDay.innerHTML = "The day is currently: " + now; 

}


getToday();

var times = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];


saveButton.addEventListener("click", function(){

    var text_to_save=document.getElementById('first').value;
    localStorage.setItem("text", text_to_save); // save the item
})

var saveB = document.getElementsByClassName("classname");

var saveText = function() {
    var text_to_save=document.getElementsByClassName('time-block').value;
    localStorage.setItem("text", text_to_save); // save the item
};

for (var i = 0; i < classname.length; i++) {
    saveB[i].addEventListener('click', saveText, false);
}




