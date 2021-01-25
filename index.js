var markInputs=document.getElementById("texts");
var finalMark=document.getElementById("Final mark");
var totalSubs=document.getElementById("Num subjects");
var numSubs=0;
var total=0;


function createField(){
  // Delete the old fields
  for(var i=0;i<numSubs;i++){
    var input=document.getElementById(i);
    markInputs.removeChild(input);
  }
  //reset number of fields to 0
  numSubs=0;
  //create new fields
  for(var i=0;i<totalSubs.value;i++){
    var input = document.createElement("input");
    input.type = "number";
    input.name="mark";
    input.id=numSubs;
    markInputs.appendChild(input);
    numSubs+=1;
  }


}
function calculate(){
  for(var i=0;i<numSubs;i++){
    var texts=document.getElementById(i);
    total+=parseFloat(texts.value);
  }
  outOfTen=parseInt(total/numSubs);
  var gpa;
  switch(parseInt((outOfTen/10))*10){
    case 100:
    case 90:
      gpa='S';
      break;
    case 80:
      gpa='A';
      break;
    case 70:
      gpa='B';
      break;
    case 60:
      gpa='C';
      break;
    case 50:
      gpa='D';
      break;
    case 40:
      gpa='E';
      break;
    case 30:
      gpa='F';
      break;
    default:
      gpa='N';
      break;
  }

  var final=document.createElement("P");
  final.innerText=gpa;
  finalMark.appendChild(final);
  total=0;


}
