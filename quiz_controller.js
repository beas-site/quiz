function Quiz(questions) {
this.score = 0;
this.questions = questions;
this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
return this.questions[this.questionIndex];
}

