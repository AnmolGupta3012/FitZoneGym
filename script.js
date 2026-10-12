document.getElementById("joinButton").onclick = function() {
    document.getElementById("joinMessage").innerHTML =
        "Thanks for your interest! Visit us to learn more.";
};
document.getElementById("sendButton").onclick = function() {
    var name = document.getElementById("visitorName").value;

    if (name == "") {
        document.getElementById("greeting").innerHTML =
            "Please enter your name first.";
    } else {
        document.getElementById("greeting").innerHTML =
            "Hello " + name + "! Thanks for contacting FitZone.";
    }
};
