function onClickDotReplace(){
    debugger;
    var sentences = document.getElementById("txtSentences").value;
    var word = document.getElementById("txtWord").value;
    var replaceWord = document.getElementById("txtReplaceWord").value;
    document.getElementById("pResult").innerHTML=sentences.replaceAll(word,replaceWord);
}