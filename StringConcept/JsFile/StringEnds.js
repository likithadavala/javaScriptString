function onClickStringEndsWith() {
    debugger;
    var stringName = document.getElementById("txtStringName").value;
    var stringSearch = document.getElementById("txtStringSearch").value;
    document.getElementById("pResult").innerHTML = stringName.endsWith(stringSearch);
}