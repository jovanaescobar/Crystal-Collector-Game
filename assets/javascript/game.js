// GENERATE RANDOM NUMBER TO START GAME BETWEEN 19-120

$( document ).ready(function(){
    var targetRandom=Math.floor(Math.random()*120+19)


$('#winningNumber').text(targetRandom);

  
//GENERATE A RANDOM NUMBER 1-12 FOR EACH CRYSTAL

    var crys1= Math.floor(Math.random()*11+1)
    var crys2= Math.floor(Math.random()*11+1)
    var crys3= Math.floor(Math.random()*11+1)
    var crys4= Math.floor(Math.random()*11+1)
    
  
// CREATE VARIABLES FOR SCORES BEING KEPT DURING GAME

    var finalScore= 0; 
    var wins= 0;
    var losses = 0;
    

  $('#wins').text(wins);
  $('#losses').text(losses);


 //RESET GAME VALUES

 function reset(){
  targetRandom=Math.floor(Math.random()*120+19);
  
  $('#winningNumber').text(targetRandom);
  crys1= Math.floor(Math.random()*11+1);
  crys2= Math.floor(Math.random()*11+1);
  crys3= Math.floor(Math.random()*11+1);
  crys4= Math.floor(Math.random()*11+1);
  finalScore= 0;
}  


  // TRACK NUMBER OF WINS
  function winner(){
  alert("YOU WIN!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  // TRACK NUMBER OF LOSSES
  function loser(){
  alert ("YOU LOSE!");
    losses++;
    $('#losses').text(losses);
    reset();
  }



// CREATE CLICK FOR CRYSTALS 1-4 

$('#crys1').on ('click', function(){
      finalScore = finalScore + crys1;
      $('#finalScore').text(finalScore); 


//ELSE IF , IF FINAL SCORE IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF FINAL SCORE IS OVER TARGET NUMBER,YOU LOSE
          if (finalScore == targetRandom){
            winner();
          }
          else if ( finalScore > targetRandom){
            loser();
            
     }   
    })  

$('#crys2').on ('click', function(){
      finalScore = finalScore + crys2;
      $('#finalScore').text(finalScore); 

//ELSE IF , IF FINAL SCORE IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF FINAL SCORE IS OVER TARGET NUMBER,YOU LOSE

          if (finalScore == targetRandom){
            winner();
          }
          else if ( finalScore > targetRandom){
            loser();
     } 
    })  

$('#crys3').on ('click', function(){
      finalScore = finalScore + crys3;
      $('#finalScore').text(finalScore);

//ELSE IF , IF FINAL SCORE IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF FINAL SCORE IS OVER TARGET NUMBER,YOU LOSE
        if (finalScore == targetRandom){
            winner();
          }
         else if ( finalScore > targetRandom){
            loser();
     } 
    })  
$('#crys4').on ('click', function(){
      finalScore = finalScore + crys4;
      console.log("finalScore= " + finalScore);
      $('#finalScore').text(finalScore); 
        
//ELSE IF , IF FINAL SCORE IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF FINAL SCORE IS OVER TARGET NUMBER,YOU LOSE

      if (finalScore == targetRandom){
        winner();
      }
      else if ( finalScore > targetRandom){
        loser();
     } 

    })


  }); 


  