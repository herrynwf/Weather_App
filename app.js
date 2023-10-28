document.addEventListener('DOMContentLoaded', function() {
    var weatherButton = document.getElementById('weatherButton');
    var welcomeGif = document.getElementById('welcomeGif');

    weatherButton.addEventListener('click', function() {
        var answer = prompt("Which is your favourite weather?");
        if (answer.toLowerCase() === 'sunny') {
            welcomeGif.src = 'images/sunny.gif';
        } else if (answer.toLowerCase() === 'snowy') {
            welcomeGif.src = 'images/snowy.gif';
        } else {
            alert("input sunny or snowy")
        }
    });

});


