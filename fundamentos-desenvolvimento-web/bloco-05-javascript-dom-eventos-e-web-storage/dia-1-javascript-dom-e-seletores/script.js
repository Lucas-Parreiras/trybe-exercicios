function headerBackgroundColor(id, newColor) {
    document.getElementById(id).style.backgroundColor = newColor;
}
headerBackgroundColor("header-container", "green");

function taskBackColor(param1, newBackColor) {
    document.getElementsByClassName(param1).style.backgroundColor = newBackColor;
}
taskBackColor("emergency-tasks", "purple");