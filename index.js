// Code your solution in this file!
function distanceFromHqInBlocks(X) {
    return Math.abs(X - 42);
  }
  distanceFromHqInBlocks();

  function distanceFromHqInFeet(X) {
    distanceFromHqInBlocks(X);
    return Math.abs(X - 42) *264;
  }

  function distanceTravelledInFeet(X,Y) {
    distanceFromHqInBlocks(X);
    return Math.abs(X - Y) *264;
  }


  function calculatesFarePrice(X,Y) {
    const dist = distanceTravelledInFeet(X,Y);
   if (dist <= 400){
       return dist * 0;
   }else if (dist > 400 && dist < 2000){
        return (dist - 400) *.02;
   } else if (dist > 2500) {
       return 'cannot travel that far';
   }else if (dist >2000) {
     return 25;
   }
}
