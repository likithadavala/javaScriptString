function onClickPrint() {
    var name = document.getElementById("txtName").value;
    document.getElementById("pPrint").innerHTML = name[0];
    document.getElementById("pLength").innerHTML = name.length;
    document.getElementById("pLastCharacter").innerHTML = name[name.length - 1];
    document.getElementById("pResult").innerHTML = `${name[0]},${name[1]},${name[2]},${name[3]},${name[4]},${name[5]},${name[6]}`
}