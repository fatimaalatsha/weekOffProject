
////sing in code
var data={
	username:'fatima',
	password:"1234"
}
 //willcj=heck if the username and passwork are correct
$('#submit').click(function  (){
	var x=$("#username").val();
 var y=$("#password").val();
	if (data.username === x && data.password === y ){
		$("#hello").append(x)
		$(".next-page").show();
		$(".signing").hide();

	}
	 
	else if ( x ==='' || y ===''){

alert("Please fill all fields.");
}
else
	alert("somting is wrong, Please check your username and password")
	
})



$('#withoutsigning').click(function (){
	$(".next-page").show();
	$(".signing").hide();

})
 
 
//the buttons to move beteen the pages
//three minuts functions
$("#btn3").click(function(){
	$(".next-page").hide();
    $(".three").show();

})

$("#quiz").click(function(){
	$(".next-page").hide();
	$('.pop-quiz').show();
})
//to choose the catogory
//history 3 min
$("#History3").click(function(){
    $(".three").hide();
    $('.threeMinHistory').show();
    $(".quiz-container").show();
})
$('#return').click(function(){
 $(".three").show();
    $('.threeMinHistory').hide();
})
//three Minp hilosophy
$("#philosophy3").click(function(){
    $(".three").hide();
    $('.threeMinphilosophy').show();
    
})
$('#return1').click(function(){
 $(".three").show();
    $('.threeMinphilosophy').hide();
})
//five min history

$("#btn5").click(function(){
	$(".next-page").hide();
    $(".five").show();
    
})
$("#Art5").click(function(){
    $(".five").hide();
    $('.fiveMinArt').show();
    
})
$('#return2').click(function(){
$(".five").show();
    $('.fiveMinArt').hide();
})

$("#astronomy5").click(function(){
    $(".five").hide();
    $('.fiveMinastronomy').show();
    
})
$('#return3').click(function(){
$(".five").show();
    $('.fiveMinastronomy').hide();
})

// $('#header').click(function(){
//  $(".next-page").show();
//  $(".three").hide();
//  $('.threeMinHistory').hide();
//  $('.threeMinphilosophy').hide();
//  $(".five").hide();
//  $('.fiveMinArt').hide();
//  $('.fiveMinastronomy').hide();

//the quizs

// $("#quiz-form").on("submit" ,function(event){
// event.preventDefault();
// var   $answer = $("#quiz-answer");
// var  answer = $answer.val();
// if (answer === 'fatima')
//  $("#result").text("Woweeee!")
// //console.log(answer)
// ele
// })
//the quizs
// $('#do-a-quiz').click(function(){
// $('#quiz-Black-Codes').show();
// })
// var myQuestions = [
//   {
//     question: "",
//     answers: {
//       a: "",
//       b: "",
//       c: ""
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "",
//     answers: {
//       a: "",
//       b: "",
//       c: ""
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "",
//     answers: {
//       a: "",
//       b: "",
//       c: "",
//       d: ""
//     },
//     correctAnswer: "d"
//   }
// ];
// var quizContainer= $('#quiz1');
// var resultsContainer = $('#results1');
// var  submitButton = $('#submit1');
// function buildQuiz(){
// 	var output=[];
// 	myQuestions.foreach(
// 		(currentQuestion, questionNumber) => {
// 			var answers=[];
// 			for(letter in currentQuestion.answers){
// 				answers.push( answers.push(
//           `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`);
// 			}
// 			output.push( `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join('')} </div>`
//       );

// 		}

// );
//  quizContainer.innerHTML = output.join('');
// }

// function showResults(){}


// buildQuiz();


// submitButton.addEventListener('click', showResults);

