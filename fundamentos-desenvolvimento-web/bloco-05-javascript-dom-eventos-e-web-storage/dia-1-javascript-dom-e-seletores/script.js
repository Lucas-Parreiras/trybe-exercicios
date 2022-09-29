function headerBackgroundColor(id, newColor) {
    document.getElementById(id).style.backgroundColor = newColor;
}
headerBackgroundColor("header-container", "green");
headerBackgroundColor("footer-container", "darkgreen");

function taskBackColor(param1, newBackColor, index) {
    document.getElementsByClassName(param1)[index].style.backgroundColor = newBackColor;
}
taskBackColor("emergency-tasks", "orange", "0");
taskBackColor("no-emergency-tasks", "yellow", "0");
taskBackColor("title-emergency", "purple", "0");
taskBackColor("title-emergency", "purple", "1");
taskBackColor("title-no-emergency", "black", "0");
taskBackColor("title-no-emergency", "black", "1");
