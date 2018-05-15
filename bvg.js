var questions = [
  {question: "Turmstrasse",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' >"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Berlin_U9.svg'>", isCorrect: true},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/9/91/Berlin_U2.svg'>"},
  ]
},
{
  question: "Platz der Luftbrücke",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Berlin_U55.svg'>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/25/Berlin_U6.svg'>", isCorrect: true},
    {img:"<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'>"},
  ]
},
{
  question: "Heinrich-Heine-Strasse",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/d/da/Berlin_U5.svg'>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/25/Berlin_U6.svg'>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' >", isCorrect: true},
  ]
},
{
  question: "Nauener Platz",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Berlin_U9.svg'>", isCorrect: true},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/d/da/Berlin_U5.svg'>"},
  ]
},
{
  question: "Innsbrucker Platz",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/25/Berlin_U6.svg'>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'>", isCorrect: true},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Berlin_U55.svg'width=200px>"},
  ]
},
{
  question: "Wittenbergplatz",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/9/9f/Berlin_U1.svg'>", isCorrect: true},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' >"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/d/da/Berlin_U5.svg'>"},
  ]
},
{
  question: "Berliner Strasse",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/9/9f/Berlin_U1.svg'width=>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'width=>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Berlin_U9.svg'width=>", isCorrect: true},
  ]
},
{
  question: "Freie Universität",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Berlin_U3.svg'width=>", isCorrect: true},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' width=>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Berlin_U9.svg'width=>"},
  ]
},
{
  question: "Alexanderplatz",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/2/24/Berlin_U8.svg' width=>", isCorrect: true},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Berlin_U7.svg'width=>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/9/9f/Berlin_U1.svg'width=>"},
  ]
},
{
  question: "Rathaus Neukölln",
  answers: [
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Berlin_U3.svg'width=>"},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Berlin_U7.svg'width=>", isCorrect: true},
    {img: "<img class=answerimage src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Berlin_U4.svg'width=>"},
  ]
},
];
var score = 0;
var iQuestion = 0;


function headerDisplay(){
  document.getElementById("header").style.display="none";
  console.log("hi")
}


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
    document.getElementById("result-score").innerHTML="<h1><u>Your Result</u></h1><p>Awwweeeesssooommme! <br>BVG App, Google Maps? You don't need that shit because it's all in your head!</p><iframe src='https://giphy.com/gifs/d2Z9QYzA2aidiWn6/html5' width= '400' height='250'></iframe>";
  }
  else if(score <=8 && score >4){
    document.getElementById("result-score").innerHTML="<h1><u>Your Result</u></h1><p>Not bad, but could be better! <br>Get yourself a &quotVBB-Umweltkarte&quot and go practising! </p><iframe src='https://giphy.com/gifs/JyjWw4ZLdSPE4/html5'width=500  height=250></iframe>";
  }
  else{
    document.getElementById("result-score").innerHTML="<h1><u>Your Result</u></h1><p>Seriously? Why did you even bother to try?</p><iframe src='https://giphy.com/gifs/rKj0oXtnMQNwY/html5'width= '550' height='400'></iframe>"
  }
document.getElementsByClassName('score')[0].innerHTML = score;
}

function updateQuestionAndScore() {
  if (iQuestion >= questions.length) {
    document.getElementsByClassName('question')[0].outerHTML = '';
    document.getElementsByClassName('answer')[2].outerHTML = '';
    document.getElementsByClassName('answer')[1].outerHTML = '';
    document.getElementsByClassName('answer')[0].outerHTML = '';
    resultScore();
    document.getElementById("instruction").style.display="none";
    document.getElementById("try-again").style.display="inline";
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
        console.log("this is the score:"+ score)
      }

      iQuestion++;
      updateQuestionAndScore();

    }
  }
  updateQuestionAndScore();

});
