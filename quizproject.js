let currentQuestion = 0;
let score = 0;
let count = 2;
let uses = 0;
let questions = [
   
   
   {
      "question": "In Star Wars, what do they call the invisible power that binds the galaxy together? ",
      "a": "Love",
      "b": "Magic",
      "c": "The Force",
      "d": "Imagination",
      "image":"quizimages/q1.jpg",
      "answer": "c",
      "wronganswer":"bd",
     
      },
   {
	"question": "In a New Hope who does Luke Skywalker save from the Death Star?",
	"a": "Old Ben Kenobi",
	"b": "Chewbacca",
	"c": "Princess Leia Organa",
	"d": "Anakan Skywalker",
	"image":"quizimages/q2.jpg",
	"answer": "c",
   "wronganswer":"cd",
   
   },
   {
	"question": "Who killed Jango Fett?",
	"a": "Anakin Skywalker",
	"b": "Yoda",
	"c": "Mace Windu",
	"d": "Obi-Wan-Kenobi",
	"image":"quizimages/q3.jpg",
	"answer": "c",
   "wronganswer":"ab",
   
   },
    {
      "question": "Why is  Emperor Palpatines face shrivled?",
      "a": "He's old",
      "b": "He baked in the sun",
      "c": "Battle scar",
      "d": "Force Lightning",
      "image":"quizimages/q4.jpg",
      "answer": "d",
      "wronganswer":"ba"
      },
      {
         "question": "What droid did Anakan Skywalker create as a child?",
         "a": "C-3P0",
         "b": "R2-D2",
         "c": "C-EPO",
         "d": "R4-D2",
         "image":"quizimages/q5.jpg",
         "answer": "a",
         "wronganswer":"bd"
         },
         {
            "question": "What was the job that Finn told Han Solo he had at Starkiller base?",
            "a": "Pilot",
            "b": "Chef",
            "c": "Guard",
            "d": "Sanitation",
            "image":"quizimages/q6.jpg",
            "answer": "d",
            "wronganswer":"ab"
            },
            {
               "question": "What is Baby Yoda's real name?",
               "a": "Child",
               "b": "Steve",
               "c": "Grogu",
               "d": "Oku",
               "image":"quizimages/q7.jpg",
               "answer": "c",
               "wronganswer":"ab"
               },
               {
                  "question": "What is the name of Boba Fett's ship?",
                  "a": "Slave 1",
                  "b": "Slave 2",
                  "c": "Flying Saucer",
                  "d": "Slave iv",
                  "image":"quizimages/q8.jpg",
                  "answer": "a",
                  "wronganswer":"cd"
                  },
                  {
                     "question": "what species is Chewbacca",
                     "a": "Rodian",
                     "b": "Ewok",
                     "c": "Abednedo",
                     "d": "Wookie",
                     "image":"quizimages/q9.jpg",
                     "answer": "d",
                     "wronganswer":"ac"
                     },
                     {
                        "question": "What color lightsaber did Luke have in return of the jedi?",
                        "a": "Red",
                        "b": "Green",
                        "c": "blue",
                        "d": "purple",
                        "image":"quizimages/q10.jpg",
                        "answer": "b",
                        "wronganswer":"ad"
                        },

   ];

   if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
      message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "Congratulations you finished the quiz! You're final score was: " + score + " / " + questions.length + " Would you like to play again? Press anywhere to continue...";
    } 
    else if (questions.length){
       loadQuestion();
    } 




    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox



 function fiftyfifty(){
if (questions[currentQuestion].wronganswer == "bd") {
  var x = document.getElementById("b").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
   var y = document.getElementById("d").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
   
}

else if(questions[currentQuestion].wronganswer == "cd") {
   document.getElementById("b").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
      document.getElementById("d").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
   }

   else if(questions[currentQuestion].wronganswer == "ab") {
      document.getElementById("a").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
         document.getElementById("b").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
      }

      else if(questions[currentQuestion].wronganswer == "ba") {
         document.getElementById("b").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
            document.getElementById("a").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
         }
         else if(questions[currentQuestion].wronganswer == "bd") {
            document.getElementById("b").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
               document.getElementById("d").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
            }
            else if(questions[currentQuestion].wronganswer == "ab") {
               document.getElementById("a").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                  document.getElementById("b").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
               }
               else if(questions[currentQuestion].wronganswer == "ab") {
                  document.getElementById("a").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                     document.getElementById("b").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                  }
                  else if(questions[currentQuestion].wronganswer == "cd") {
                     document.getElementById("c").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                        document.getElementById("d").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                     }
                     else if(questions[currentQuestion].wronganswer == "ac") {
                        document.getElementById("a").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                           document.getElementById("c").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                        }
                        else if(questions[currentQuestion].wronganswer == "ad") {
                           document.getElementById("a").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                              document.getElementById("d").innerHTML = ` ${questions[currentQuestion].wronganswer = ""}`;
                           }
        
  
  


   count--;
   document.getElementById("count").innerHTML = count;


   //Make button disaperreeeee
  const btn = document.getElementById('F');

   btn.addEventListener('click', () => {
      // 👇️ hide button
      btn.style.display = 'none';
    
      // 👇️ show div
      const box = document.getElementById('box');
      box.style.display = 'block';
    });


}  










 
 
 
 
 
 
 
 
 
   
