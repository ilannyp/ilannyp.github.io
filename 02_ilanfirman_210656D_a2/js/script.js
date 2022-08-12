if(document.URL.includes("index.html"))
{
function rotateImg(){
    document.querySelector("#vinyl").classList.toggle('rotation');    
}

var audio = document.getElementById("audio");      
audio.loop = true;          // loop track
var isPlaying = false;

function showSongName(){
    if(!isPlaying)
    {
        document.getElementById("songname").style.display = "block";
        document.querySelector("#songname").classList.toggle('songnameshow');
    }
    else
    {
        document.getElementById("songname").style.display = "none";
    }
}

document.querySelector("#vinyl").addEventListener("click",function(){
    rotateImg(); // rotate vinyl on click
    showSongName();
}) 


function togglePlay() {
    isPlaying ? audio.pause() : audio.play();       //if sound playing, toggle off. else, play the track
  };
  audio.onplaying = function() {
     isPlaying = true;
    };
    audio.onpause = function() {
     isPlaying = false;
    };
}

if(document.URL.includes("pg2.html"))
{
var index = 1;
showCurrentSlide(index);

function showCurrentSlide(dir){                 //dir = direction, how many times bro pressed the button
    var slides = document.getElementsByClassName("slides");
    var contentno = document.getElementsByClassName("category");
    if(dir > slides.length)        // if user press right arrow more than the length of the array
    {
        index =1;
    }
    if(dir < 1)
    {
        index = slides.length;
    }
    for(var i = 0; i< slides.length; i++)
    {
        slides[i].style.display = "none";           //dont display the other slides
        contentno[i].style.display ="none";
    }
    slides[index-1].style.display = "block";           //display this one
    contentno[index-1].style.display = "block";
}

function plusSlides(n) {
    showCurrentSlide(index += n);
  }
  
  function currentSlide(n) {
    showCurrentSlide(index = n);
  }
}

/*  page 3 */
if(document.URL.includes("pg3.html"))
{
const cardArray = document.querySelectorAll('.card');       //gets all the
var flippedCard = false;    //if user flipped card alr or not
var first, second;      //the first and second card user chose
var cooldownOver = false;       //make sure player doesnt spam all the cards

function cardFlip(){
    if(cooldownOver)
    {
        //dont run the code if its on cooldown
        return;
    }

    //this == the card that is clicked on
    this.classList.toggle('flip'); 
    if(!flippedCard)
    {
        flippedCard = true;
        first = this;       //our memory card
    }
    else       //once player has chosen his first card, run this
    {
        flippedCard = false;
        second = this;

        if(first.getAttribute('id') === second.getAttribute('id'))      //if both IDs correspond
        {
            first.removeEventListener('click',cardFlip);
            second.removeEventListener('click',cardFlip);       //make sure both cant be flipped after matching
        }
        else    //if both dont match
        {
            cooldownOver = true;

            setTimeout(() => {
            first.classList.remove('flip');
            second.classList.remove('flip');
            cooldownOver = false;
            }, 800)         //put a 800ms delay
        }
    }
}

(function cardShuffle(){
    cardArray.forEach(card =>{
        let random = Math.floor(Math.random() * 8);
        card.style.order = random;
    });
})(); //this bracket means that the function is invoked as soon as it is defined

cardArray.forEach(card => card.addEventListener('click',cardFlip)); //loop through array. for every one of the cards, flip if clicked.

}