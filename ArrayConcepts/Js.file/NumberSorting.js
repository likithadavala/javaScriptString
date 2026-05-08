var oddNumbers=[];
var contentOfOdd="";
var evenNumbers=[];
var contentOfEven="";
var concateArray=[];
var concateContent="";
function onClickNumberSorting(){
    debugger;
    var inputNumber = Number(document.getElementById("txtInputNumber").value);
    if(inputNumber % 2==0){
        evenNumbers.push(inputNumber);
    }else{
        oddNumbers.push(inputNumber);
    }
    for(i=0;i<oddNumbers.length;i++){
        contentOfOdd = contentOfOdd +"<p>"+oddNumbers[i]+"</p><br>"
        }
        
        for(j=0;j<evenNumbers.length; j++){
            contentOfEven= contentOfEven+"<p>"+evenNumbers[j]+"</p><br>"
        }
    
        document.getElementById("pOddResult").innerHTML=contentOfOdd;
        document.getElementById("pEvenResult").innerHTML=contentOfEven;
        contentOfOdd="";
            contentOfEven="";
    }
    function onClickConcat(){
        debugger;
        concateArray=oddNumbers.concat(evenNumbers).sort((a, b) => a - b);
        for(i=0; i<concateArray.length; i++){
        concateContent=concateContent+"<p>"+ concateArray[i]+"</p><br>"
        }
        document.getElementById("pConcateResult").innerHTML=concateContent;
    }