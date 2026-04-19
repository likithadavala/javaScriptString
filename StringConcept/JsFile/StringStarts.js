function onClickStringStartsWith() {
    debugger;
    var stringName = document.getElementById("txtStringName").value;
    var stringSearch = document.getElementById("txtStringSearch").value;
    document.getElementById("pResult").innerHTML = stringName.startsWith(stringSearch);
}