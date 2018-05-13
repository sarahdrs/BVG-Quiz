var questions = [
  {question: "Turmstrasse",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Berlin_U9.svg'width=200px>", isCorrect: true},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Berlin_U2.svg'width=200px>"},
  ]
},
{
  question: "Platz der Luftbrücke",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Berlin_U55.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/2/25/Berlin_U6.svg'width=200px>", isCorrect: true},
    {img:"<img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'width=200px>"},
  ]
},
{
  question: "Heinrich-Heine-Strasse",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Berlin_U5.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/2/25/Berlin_U6.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' width=200px>", isCorrect: true},
  ]
},
{
  question: "Nauener Platz",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Berlin_U9.svg'width=200px>", isCorrect: true},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Berlin_U5.svg'width=200px>"},
  ]
},
{
  question: "Innsbrucker Platz",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/2/25/Berlin_U6.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'width=200px>", isCorrect: true},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Berlin_U55.svg'width=200px>"},
  ]
},
{
  question: "Wittenbergplatz",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9f/Berlin_U1.svg'width=200px>", isCorrect: true},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Berlin_U5.svg'width=200px>"},
  ]
},
{
  question: "Berliner Strasse",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9f/Berlin_U1.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Berlin_U9.svg'width=200px>", isCorrect: true},
  ]
},
{
  question: "Freie Universität",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Berlin_U3.svg'width=200px>", isCorrect: true},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Berlin_U9.svg'width=200px>"},
  ]
},
{
  question: "Alexanderplatz",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' width=200px>", isCorrect: true},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Berlin_U7.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9f/Berlin_U1.svg'width=200px>"},
  ]
},
{
  question: "Rathaus Neukölln",
  answers: [
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Berlin_U3.svg'width=200px>"},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Berlin_U7.svg'width=200px>", isCorrect: true},
    {img: "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'width=200px>"},
  ]
},
];
var score = 0;
var iQuestion = 0;



/*function answerColor() {
  if (questions[iQuestion].answers[i].isCorrect) {
    document.querySelector(".answer").style.border = "4px solid green";
  }
  else {
    document.querySelector(".answer").style.border = "4px solid red";
  }
  console.log("hihi")
}*/

function resultScore() {
  if (score>8) {
    document.getElementById("result-score").innerHTML="<h1><u>Your Result:</u></h1><p>Awwweeeesssooommme! <br>When it comes to directions only to bravest will dare to questions your wisdom about the U-Bahn.</p><iframe src='https://giphy.com/gifs/d2Z9QYzA2aidiWn6/html5' width= '365' height='200'></iframe>";
  }
  else if(score <=8 && score >4){
    document.getElementById("result-score").innerHTML="<h1><u>Your Result:</u></h1><p>Not bad, but could be better! <br>Get yourself a &quotUmweltkarte&quot and go practising! </p><iframe src='https://giphy.com/gifs/7TqE0ohlC9o2Z9eCBH/html5'width= '480' height='202'></iframe>";
  }
  else{
    document.getElementById("result-score").innerHTML="<h1><u>Your Result:</u></h1><p>Seriously? Why did you even bother to try?</p><iframe src='https://giphy.com/gifs/rKj0oXtnMQNwY/html5'width= '500' height='371'></iframe>"
  }

}


function updateQuestionAndScore() {
  if (iQuestion >= questions.length) {
    document.getElementsByClassName('question')[0].outerHTML = '';
    document.getElementsByClassName('answer')[2].outerHTML = '';
    document.getElementsByClassName('answer')[1].outerHTML = '';
    document.getElementsByClassName('answer')[0].outerHTML = '';
    resultScore();
    document.getElementById("instruction").style.display="none";

    return;
  }
  document.getElementsByClassName('score')[0].innerHTML = score;
  document.getElementsByClassName('question')[0].innerHTML = questions[iQuestion].question;
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = questions[iQuestion].answers[i].img;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].onclick = function() {
      if (questions[iQuestion].answers[i].isCorrect) {
        score++;
      }

      iQuestion++;
      updateQuestionAndScore();

    }
  }
  updateQuestionAndScore();

});
