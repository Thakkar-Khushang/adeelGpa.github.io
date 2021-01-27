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
  
  // deleting the previously displyed grade
  var final=document.getElementById('output')
  finalMark.removeChild(final);
  
  //flag variable to make sure that all values is less than 100
  var flag=-1;
  
  for(var i=0;i<numSubs;i++){
    var texts=document.getElementById(i);
    total+=parseFloat(texts.value);
    if(parseFloat(texts.value)>100 || parseFloat(texts.value)<0 ){
      flag=0;
    }
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
  if (flag==0){
    gpa='One or more of the values is invalid';
  }
  console.log(gpa);
  var final=document.createElement("P");
  final.innerText=gpa;
  final.id='output';
  finalMark.appendChild(final);
  total=0;


}
