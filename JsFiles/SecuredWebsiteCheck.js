function onClickSecuredWebsiteChecker(){
    debugger;
    var stringName = document.getElementById("txtStringName").value;
    if(stringName.startsWith("http")){
    document.getElementById("pResult").innerHTML="It is securedsite";
    }else {
    document.getElementById("pResult").innerHTML="It is not a securedsite"
    }

}