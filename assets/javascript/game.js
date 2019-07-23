
 //RESET THE GAME

 function reset(){
  targetRandom=Math.floor(Math.random()*120+19);
  console.log(targetRandom)
  $('#winningNumber').text(targetRandom);
  crys1= Math.floor(Math.random()*11+1);
  crys2= Math.floor(Math.random()*11+1);
  crys3= Math.floor(Math.random()*11+1);
  crys4= Math.floor(Math.random()*11+1);
  finalTotal= 0;

  
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
  
// CREATE VARIABLES FOR finalTotalS BEING KEPT DURING GAME

    var finalTotal= 0; 
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

// CREATE CLICK FOR CRYS 1-4 

$('#crys1').on ('click', function(){
      finalTotal = finalTotal + crys1;
      $('#finalTotal').text(finalTotal); 


//ELSE IF , IF finalTotal IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF finalTotal IS OVER TARGET NUMBER,YOU LOSE
          if (finalTotal == targetRandom){
            winner();
          }
          else if ( finalTotal > targetRandom){
            loser();
            
     }   
    })  

$('#crys2').on ('click', function(){
      finalTotal = finalTotal + crys2;
      $('#finalTotal').text(finalTotal); 

//ELSE IF , IF finalTotal IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF finalTotal IS OVER TARGET NUMBER,YOU LOSE

          if (finalTotal == targetRandom){
            winner();
          }
          else if ( finalTotal > targetRandom){
            loser();
     } 
    })  

$('#crys3').on ('click', function(){
      finalTotal = finalTotal + crys3;
      $('#finalTotal').text(finalTotal);

//ELSE IF , IF finalTotal IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF finalTotal IS OVER TARGET NUMBER,YOU LOSE
        if (finalTotal == targetRandom){
            winner();
          }
         else if ( finalTotal > targetRandom){
            loser();
     } 
    })  
$('#crys4').on ('click', function(){
      finalTotal = finalTotal + crys4;
      console.log("finalTotal= " + finalTotal);
      $('#finalTotal').text(finalTotal); 
        
//ELSE IF , IF finalTotal IS EQUIVILANT TO TARGET NUMBER YOU WIN, IF finalTotal IS OVER TARGET NUMBER,YOU LOSE

      if (finalTotal == targetRandom){
        winner();
      }
      else if ( finalTotal > targetRandom){
        loser();
     } 
    })


  }); 


  