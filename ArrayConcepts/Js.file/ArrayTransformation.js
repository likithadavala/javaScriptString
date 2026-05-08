var animals = [];
var animalContent = "";
var birds = [];
var birdContent = "";
var concateArray = [];
var concateContent ="";
function onClickAnimalPush() {
    debugger;
    var animalInput = document.getElementById("txtAnimalInput").value;
    animals.push(animalInput);
    for (i = 0; i < animals.length; i++) {
        animalContent = animalContent + "<p>" + (i + 1) + "." + animals[i] + "</p><br>"
    }
    document.getElementById("pAnimals").innerHTML = animalContent;
    document.getElementById("txtAnimalInput").value = "";
    animalContent = "";
}
function onClickAnimalUnshift() {
    debugger;
    var animalInput = document.getElementById("txtAnimalInput").value;
    animals.unshift(animalInput);
    for (i = 0; i < animals.length; i++) {
        animalContent = animalContent + "<p>" + (i + 1) + "." + animals[i] + "</p><br>"
    }
    document.getElementById("pAnimals").innerHTML = animalContent;
    document.getElementById("txtAnimalInput").value = "";
    animalContent = "";
}
function onClickBirdPush() {
    debugger;
    var birdInput = document.getElementById("txtBirdInput").value;
    birds.push(birdInput);
    for (i = 0; i < birds.length; i++) {
        birdContent = birdContent + "<p>" + (i + 1) + "." + birds[i] + "</p><br>"
    }
    document.getElementById("pBirds").innerHTML = birdContent;
    document.getElementById("txtBirdInput").value = "";
    birdContent = "";
}
function onClickBirdUnshift() {
    debugger;
    var birdInput = document.getElementById("txtBirdInput").value;
    birds.unshift(birdInput);
    for (i = 0; i < birds.length; i++) {
        birdContent = birdContent + "<p>" + (i + 1) + "." + birds[i] + "</p><br>"
    }
    document.getElementById("pBirds").innerHTML = birdContent;
    document.getElementById("txtBirdInput").value = "";
    birdContent = "";
}
function onClickConcatenate(){
    debugger;
 concateArray =animals.concat(birds);
  for(i=0; i<concateArray.length; i++){
    concateContent=concateContent+"<p>"+(i+1) aa+"."+ concateArray[i]+"</p><br>"
  }
  document.getElementById("pConcateResult").innerHTML=concateContent;
    
}