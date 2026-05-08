var animals = [];
var content = "";
function onClickPush() {
    debugger;
    var textBox = document.getElementById("txtTextBox").value;
    animals.push(textBox);
    for (i = 0; i < animals.length; i++)
        content = content + "<p>" + (i + 1) + "." + animals[i] + "</p><br>"
    document.getElementById("pResult").innerHTML = content;
    document.getElementById("txtTextBox").value = null;
    content = "";
}
function onClickPop() {
    animals.pop();
    for (i = 0; i < animals.length; i++)
        content = content + "<p>" + (i + 1) + "." + animals[i] + "</p><br>"
    document.getElementById("pResult").innerHTML = content;
    content = "";
}
function onClickShift() {
    debugger;
    animals.shift();
    for (i = 0; i < animals.length; i++)
        content = content + "<p>" + (i + 1) + "." + animals[i] + "</p><br>"
    document.getElementById("pResult").innerHTML = content;
    content = "";
}
function onClickUnshift() {
    debugger;
    var textBox = document.getElementById("txtTextBox").value;
    animals.unshift(textBox);
    for (i = 0; i < animals.length; i++)
        content = content + "<p>" + (i + 1) + "." + animals[i] + "</p><br>"
    document.getElementById("pResult").innerHTML = content;
    content = "";
}