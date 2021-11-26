function getMilk() {
    alert("leave house");
    alert("buy milk");
    alert("return home");
}

getMilk();

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
 }
 
 function moveFourTimes(){
    move();
    move();
    move();
    move();
 }

 function main(){
    putBeeper();
    diagonalMoveAndBeeper();
    turnRight();
    diagonalMoveAndBeeper();
    turnRight();
    diagonalMoveAndBeeper();
    turnRight();
    diagonalMoveAndBeeper();
 }
 
 function diagonalMoveAndBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
 }




 function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
 }
  
 function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
 }
  
 function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
 }
  
 function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
 }
  
 function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }