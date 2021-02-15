score=0;
cross=true;

document.onkeydown = function(e)
{
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38)
    {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() =>
        {
           dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.keyCode==39)
    {
        dino=document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = `${dinoX + 20}px`;
    }
    if(e.keyCode==37)
    {
        dino=document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = `${dinoX - 20}px`;
    }
}

setInterval(() =>{
   dino = document.querySelector('.dino');
   gameOver = document.querySelector('.gameOver');
   obstacle = document.querySelector('.obstacle');

   dx= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
   dy= parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

   ox= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
   oy= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

   offsetX= Math.abs(dx-ox);
   offsetY= Math.abs(dy-oy);
   if(offsetX < 50 && offsetY < 25)
   {
       gameOver.style.visibility= 'visible';
       obstacle.classList.remove('obstacleAni');
   }
   else if(offsetX < 60 && cross)
   {
       score+=5;
       updateScore(score);
       cross=false;

       setTimeout(() =>{
           cross=true;
       }, 1000);
       setTimeout(() =>{
        aniDur=  parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur= aniDur - 0.1;
        obstacle.style.animationDuration = newDur +'s';
       
       }, 500);
     }
}, 100);

function updateScore(score)
{
    scoreCont.innerHTML= "Your Score: " + score;
}