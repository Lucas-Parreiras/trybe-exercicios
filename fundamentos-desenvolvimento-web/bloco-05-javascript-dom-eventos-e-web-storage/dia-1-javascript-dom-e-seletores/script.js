function headerBackgroundColor(id, newColor) {
    document.getElementById(id).style.backgroundColor = newColor;
}
headerBackgroundColor("header-container", "green");

function taskBackColor(param1, newBackColor) {
    document.getElementsByTagName(param1).style.backgroundColor = newBackColor;
}
taskBackColor("section", "orange");