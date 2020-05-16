// let arrQuiz = [];

// var Question = {
//   qna: function (q, a) {
//     let objQuiz = {
//       question: q,
//       answer: a,
//     };
//     arrQuiz.push(objQuiz);
//   },
// };

// var q1 = Question.qna.bind(
//   Question,
//   "Is javascript the best language of the web?",1
// );

// console.log(arrQuiz);

(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAns = function (ans) {
    if (ans === this.correct) {
      console.log("Correct answer!!");
    } else {
      console.log("Wrong answer!!");
    }
  };

  var q1 = new Question(
    "Is javascript the best programming language in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question("Have you worked with Java before?", ["Yes", "No"], 0);

  var q3 = new Question(
    "What does best decribe coding?",
    ["Boring", "Hard", "Fun"],
    2
  );

  var questions = [q1, q2, q3];

  var num = Math.floor(Math.random() * questions.length);

  questions[num].displayQuestion();

  var ans = parseInt(prompt("Please select the correct answer."));

  questions[num].checkAns(ans);
})();
