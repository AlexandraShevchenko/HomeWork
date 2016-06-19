'use strict';

var subtitle = "Тест по программированию";
var questions=[
{
    text: "Какие основное ограничения к объявлению переменных в строгом режиме?",
    answers: ["Любая переменная должна объявляться с использованием ключевого слова var",
        "Переменные функций должны объявляться с использованием ключевого слова var",
        "Название переменных должно быть camel-case с маленькой буквы"],
    correctAnswer: 0
},
{
    text: "Чему равен this в функциях вызванных на глобальном уровне?",
    answers: ["null",
              "undefined",
              "window"],
    correctAnswer: 1
},
{
    text: "Какой из пунктов не верен по отношению к строгому режиму javascript?",
    answers: ["Запрещено дублирование полей объектов",
        "Запрещено дублирование параметров функции",
        "Запрещено использование директивы eval"],
    correctAnswer: 2
}
];

localStorage.setItem('test',JSON.stringify(questions));
var myTest = localStorage.getItem('test');
var objTest = JSON.parse(myTest);

var yourAns = new Array;
var score = 0;
function Engine(question, answer) {yourAns[question]=answer;}


function Score(){


   var answerText = " ";
   for (var i = 0; i < yourAns.length; ++i){
    var num = i+1;
    answerText=answerText+"\n    Вопрос №"+ num +"";
    if(yourAns[i]!=objTest[i].correctAnswer){
        answerText=answerText+"\n    Правильный ответ: " +
	        objTest[i].answers[objTest[i].correctAnswer] + "\n";
	      }
	        else{
	        answerText=answerText+": Верно! \n";
	        ++score;
	        }
	       }
	   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

	var element = document.createElement('div');
	element.id = 'box';
	element.innerHTML = answerText;
	var modalContent = document.querySelector('.modal_content');
  modalContent.appendChild(element);
   yourAns = [];
   score = 0;
   clearForm("quiz");
}

function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
        }
}
