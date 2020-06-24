function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Mobiel verkeersleider") {
		correct++;
}
	if (question1 == "Mobiel verkeersleider" && question2 == "Ja") {
		document.getElementById("number_correct").innerHTML = "Als de veroorzaker van de schadevaring bekend is moet je vaarverbod instellen. Heb je een vaarverbod ingesteld?";
}
	if (question2 == "Ja") {
		correct++;
}	
	if (question3 == "Albany") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Dit zijn je instructies.";
	}
