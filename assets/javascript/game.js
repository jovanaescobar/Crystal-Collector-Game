
 //RESET THE GAME

 function reset(){
  targetRandom=Math.floor(Math.random()*120+19);
  console.log(targetRandom)
  $('#winningNumber').text(targetRandom);
  crys1= Math.floor(Math.random()*11+1);
  crys2= Math.floor(Math.random()*11+1);
  crys3= Math.floor(Math.random()*11+1);
  crys4= Math.floor(Math.random()*11+1);
  score= 0;
  $('#finalTotal').text(score);
  }  


// GENERATE RANDOM NUMBER TO START GAME BETWEEN 19-120

$( document ).ready(function(){
    var targetRandom=Math.floor(Math.random()*120+19)
reset()

$('#winningNumber').text(targetRandom);

  
//GENERATE A RANDOM NUMBER 1-12 FOR EACH CRYSTAL

    var crys1= Math.floor(Math.random()*11+1)
    var crys2= Math.floor(Math.random()*11+1)
    var crys3= Math.floor(Math.random()*11+1)
    var crys4= Math.floor(Math.random()*11+1)
  
// CREATE VARIABLES FOR SCORES BEING KEPT DURING GAME

    var score= 0; 
    var wins= 0;
    var losses = 0;
    

  $('#wins').text(wins);
  $('#losses').text(losses);



  // TRACK NUMBER OF WINS
  function winner(){
  alert("WINNER!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  // TRACK NUMBER OF LOSSES

  function loser(){
  alert ("LOSER!");
    losses++;
    $('#losses').text(losses);
    reset();
  }

// CREATE CLICK FOR CRYS 1-4 THAT WILL

$('#crys1').on ('click', function(){
      score = score + crys1;
      console.log("New score = " + score);
      $('#finalTotal').text(score); 


//ELSE IF , IF SCORE IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF SCORE IS OVER TARGET NUMBER,YOU LOSE
          if (score == targetRandom){
            winner();
          }
          else if ( score > targetRandom){
            loser();
            
     }   
    })  

$('#crys2').on ('click', function(){
      score = score + crys2;
      console.log("New score= " + score);
      $('#finalTotal').text(score); 

//ELSE IF , IF SCORE IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF SCORE IS OVER TARGET NUMBER,YOU LOSE

          if (score == targetRandom){
            winner();
          }
          else if ( score > targetRandom){
            loser();
     } 
    })  

$('#crys3').on ('click', function(){
      score = score + crys3;
      console.log("New score= " + score);
      $('#finalTotal').text(score);

//ELSE IF , IF SCORE IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF SCORE IS OVER TARGET NUMBER,YOU LOSE
        if (score == targetRandom){
            winner();
          }
         else if ( score > targetRandom){
            loser();
     } 
    })  
$('#crys4').on ('click', function(){
      score = score + crys4;
      console.log("score= " + score);
      $('#finalTotal').text(score); 
        
//ELSE IF , IF SCORE IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF SCORE IS OVER TARGET NUMBER,YOU LOSE

      if (score == targetRandom){
        winner();
      }
      else if ( score > targetRandom){
        loser();
     } 
    })


  }); 


  