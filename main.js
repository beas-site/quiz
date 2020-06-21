function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;
  
  if(question1 == "Amsterdam") {
    correct++;
  }
  if(question2 == "optie1") {
    correct++;
  }
  if(question3 == "optie3") {
    correct++;
  }
  
document.getElementById("after_submit").style.visibilty = "visible";
document.getElementById("number_correct").innerHMTL = "Je hebt " + correct + " goed.";
}
