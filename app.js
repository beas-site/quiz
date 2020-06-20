function populate() {
if(quiz.isEnded()) {
showScores();
}
else {
var element = document.getElementById("question");
element.innerHMTL = quiz.getQuestionIndex().text;

var choices = quiz.getQuestionIndex().choices;
for(var i = 0; i < choices.length; i++) {
var element = document.getElememtById("choice" +1);
element.innerHMTL = choices[i];
guess("btn" + i, choices[i]);
  
function guess(id, guess) {
var button = document.getElememtById(id);
button.onclick = function(){
quiz.guess(guess);
populate();
}
};

var questions = [
new Question("Vraag 1", ["1", "2", "3", "4"], "1"),
new Question("Vraag 2", ["1", "2", "3", "4"], "1"),
new Question("Vraag 3", ["1", "2", "3", "4"], "1"),
new Question("Vraag 4", ["1", "2", "3", "4"], "1"),
new Question("Vraag 5", ["1", "2", "3", "4"], "1")
];

var quiz = new Quiz(questions);

populate();
