var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function akan() {
    var years = parseInt(document.getElementById("year").value);

    var mm = parseInt(document.getElementById("month").value); 

    var dd = document.getElementById("day").value;

    var gender = document.getElementById("gender").value;

    var century= document.getElementById("century").value;

    var day = parseInt(((century / 4) - 2 * century - 1) + ((5 * years / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;