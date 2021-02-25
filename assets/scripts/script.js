function myFunction() {
    let age = prompt("How Old Are You?");
    let gender = prompt("What is your Gender?");
    if (age <=50 && (gender == "Male") || (gender == "male")) {
        alert("Hello Young Man")
    }
    if (age >50 && gender == "Male") {
        alert("Hello Old Man")
    }
    if (age <=50 && (gender == "Female") || (gender == "female")) {
        alert("Hello Young Lady")
    }
    if (age >50 && gender == "Female") {
        alert("Hello Old Woman")
    }
    document.getElementById("demo")
}


function myFunction2() {
   
    document.getElementById("writeme").innerHTML = "Acknowledged";
}
