// pos bu foydalanuchi qaysi variantdaligini bildiradi
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

// bu birnechtali array, 4 ta array va harbirini ichida 5 ta var bor
var questions = [
  {
      question: "What is 36 + 42",
      a: "64",
      b: "78",
      c: "76",
      answer: "B"
    },
  {
      question: "What is 7 x 4?",
      a: "21",
      b: "27",
      c: "28",
      answer: "C"
    },
  {
      question: "What is 16 / 4?",
      a: "4",
      b: "6",
      c: "3",
      answer: "A"
    }
  ];


// get function bu funksiya elementi egalsh funksiyasi  
function get(x){
  return document.getElementById(x);
}
// bu funksiya esa nechta togri va notogri javoblar bolganini korsatadigon funksiya
function renderQuestion(){
  test = get("test"); // document.getElemnetById("test")
   if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // boshqattan boshlash uchun yangilash
    pos = 0;
    correct = 0;
    // funksiyani togatish testlardi yechib bolgach
    return false;
  }
  
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
   chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // savoldi korsatish
  test.innerHTML = "<h3>"+question+"</h3><br>";
  // variantlardi korsatish
  // tepadagi kodlarga qoshimcha qoshish
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  //  getElementsByName dan foydalanamiz, tepadagi inputga ulash uchun va javobni tekshiramiz
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // togri javobni tekshiradi
  if(choice == questions[pos].answer){
    //har safar javob togri bolsa shu korsatgich oshadi kegin ohirida nechta bolganini sanaberishi uchun
    correct++;
  }
  // foydalanuchi tanlagan varintalrdi ozgarishi
  pos++;
  // kegin bu funksiya yana ishledi kegingi savol uchun
  renderQuestion();
}
// site yuklanganda ishlaydigon Event 
window.addEventListener("load", renderQuestion);
