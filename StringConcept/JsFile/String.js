function onClickDisplay() {
    debugger;
    var firstName = document.getElementById("txtFirstName").value;
    var secondName = document.getElementById("txtSecondName").value;
    var email = document.getElementById("txtEmail").value;
    // alert(firstName);
    // alert(secondName);
    // alert(email);
    // alert (firstName+' '+ +secondName+email)
    // alert ("my firstname is:"+firstName+ ", my second name is:"+secondName+",my email is:"+email+".")
    document.getElementById("pResult").innerHTML = `my firstname is:${firstName}, my second name is ${secondName} ,my email is ${email}.`
}