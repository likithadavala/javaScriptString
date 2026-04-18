var add=[]
function onClickAddToArray(){
    debugger;
    var inputNumber = document.getElementById("txtInputNumber").value;
    add.push(inputNumber);
    document.getElementById("pResult").innerHTML = add;
    
}