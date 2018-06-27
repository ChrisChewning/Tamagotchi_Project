

//-----------------------GLOBAL VARIABLES----------------------------
// let lightsOn = true; could let it toggle.

let time = 60;
let age = 30;
let hunger = 5;
let boredom = 5;
let sleepiness = 5;

//----------------------BOUNCE FUNCTIONS----------------------------

// const tamaBounce = () = {
//   $('#tamaImg').attr('class', 'bounce')
// };


//----------------------LIGHTS FUNCTIONS----------------------------

//adapted from: http://jsfiddle.net/S4rsh/
//could just toggle lightsOn to false.
// }).fadeTo(1000, 0.0);
//fadeTo() is the method. 1000 is milliseconds? 0.0 is transparency.


const lightsOff = () => {
  $('#tamaImg').css({
    'background-color': 'black'
  })
};

const lightsReallyOff = () => {
  // $('#theBod') =
  $('#theBod').css({
    'background-color': 'black'
  })
};
lightsReallyOff();

const lightsOn = () => {
  $('#tamaImg').css({
    'background-color': 'white'
  })
};



//------------------------------TIMER FUNCTION----------------------------

const setTimer = () => {

  //JQUERY TO ACCESS VARIABLES.
  const $timer = $('#timer');
  let $age = $('#age');
  let $hunger = $('#hunger');
  let $boredom = $('#boredom');
  let $sleepiness = $('#sleepiness');


  //SET THE TIMER TO RUN FOR A MINUTE. THINGS WILL HAPPEN AT LEAST EVERY 10 SECONDS.
  const timer = setInterval(() => {
    time--;

  if (time === 57) {
    $('#tamaImg').attr('class', 'spin')
    // lightsReallyOff();
    // $('#tamaImg').attr('class', 'spin')

  } else if (time === 50) {
    lightsOff();
  age += 10;
  console.log(age + 'age');
  hunger += 4;

  console.log(hunger + 'hunger');
  boredom +=5;
  console.log(boredom + 'boredom');
  sleepiness += 1;
  console.log(sleepiness + 'sleepiness');
  updateVals(hunger, boredom, sleepiness);

} else if (time === 47){
  $('#tamaImg').attr('class', 'bounce')
  sleepiness = 20;
  boredom = 15;
  lightsOn();
  console.log('hi');

} else if (time === 40){
  age += 10;
  lightsOn();
  console.log(age);
  // $('#tamaImg').attr('class', 'bounce')
  // $('#tamaImg').attr('class', 'bounce')
  // $('#tamaImg').attr('class', 'bounce')



} else if (time === 30) {
  age += 10;
  console.log(age);
  lightsOff();
  sleepiness === 10;
  boredom === 10;


} else if (time === 20) {
  age += 10;
  console.log(age);

} else if (time === 10) {
  age += 10;
  console.log(age);


// ---------------------------ENDING THE GAME-----------------------

//ELSE STATEMENT WON'T WORK.
//TIMER STOPS AT 1 SECOND.
// NEED to reset the timer back up to 60 without refreshing the page.

// else if (time ===0 $$ ( hunger >= 10 || sleepiness >= 10 || boredom >= 10))


} else if ((time === 0) && (hunger >= 10 || sleepiness >= 10 || boredom >= 10 )) {
alert($('#input-box').val() + ' has died.');
clearInterval(timer);


// } else if ((time === 0) && (hunger >= 10)) {
//   alert($('#input-box').val() + ' has died.');
//   clearInterval(timer);
//
// } else if ((time === 0) && (sleepiness >= 10)) {
//   alert($('#input-box').val() + ' has died.');
//   clearInterval(timer);
//
// } else if ((time === 0) && (boredom >= 10)) {
//   alert($('#input-box').val() + ' has died.');
//   clearInterval(timer);

} else if ((time === 0) && (hunger < 10 || sleepiness < 10 || boredom < 10 )) {
alert($('#input-box').val() + ' has lived.');
clearInterval(timer);

}
// } else if ((time === 0) && (hunger < 10)) {
// clearInterval(timer);
// alert($('#input-box').val() + ' has lived.');
//
// } else if ((time === 0) && (sleepiness < 10)) {
//   clearInterval(timer);
//   alert($('#input-box').val() + ' has lived.');
//
// } else if ((time === 0) && (boredom < 10)) {
//   clearInterval(timer);
//   alert($('#input-box').val() + ' has lived.');
// }


    $('#timer').text('timer: ' + time + 's');
    $('#age').text($('#input-box').val() + ' is ' + age + ' years old.')

    }, 1000); //this goes every second.
  };


//-----------------------SET TIMER BUTTON -----------------------------

$('#submit-btn').on('click', (e) => {
  console.log('button clicked'); //testing
setTimer();
});


//----------------------- TAMAGOTCHI CLASS -----------------------------
// could this part be inside a input text form where the name you could type in but then it gave you 5,5,5 for the rest?
class tamagotchi {
  constructor(name, age, hunger, sleep, boredom){
    this.name = name; //do not put name as 'name' here. it doesn't work.
    this.age = age;
    this.hunger = hunger;
    this.sleep = sleep;
    this.boredom = boredom;
  }
}
const tama = new tamagotchi('tama mama', 30, 5, 5, 5); //input would go in as name
console.log(tama);



// -----------------BUTTONS AND THE FUNCTIONS THAT GO WITH THEM-----------------

//you could use a jqeury toggle function to change the text to the icon when you click it.
// $('#sleepinessLevel').text('sleepiness: ' + sleepinessLevel);



//UPDATE ON THE SCREEN

const updateVals = (hunger, boredom, sleepiness) => {
  $('#boredom').text('Boredom: ' + boredom);
  $('#hunger').text('Hunger: ' + hunger);
  $('#sleepiness').text('Sleepiness: ' + sleepiness);
}



//HUNGER FUNCTION


$('#hungerLevel').on('click', (e) => {
  const $hungerLevel = $('#hungerLevel');
  // $('#hungerlevel').attr() could work?
  console.log('I am hungry'); //working
  if(hunger > 1) { //working
    hunger--;
    $('#hunger').text('Hunger: ' + hunger); //working
    e.preventDefault();
  }
});


//BOREDOM FUNCTION
$('#boredomLevel').on('click', (e) => {
  const $boredomLevel = $('#boredomLevel');
 console.log('I am bored'); //testing
  if(boredom > 1) {
    boredom--;
    $('#boredom').text('Boredom: ' + boredom);
    e.preventDefault();
  }
});


//SLEEPINESS FUNCTION
$('#sleepinessLevel').on('click', (e) => {
  const $sleepinessLevel = $('#sleepinessLevel');
  console.log('I am sleepy'); //testing
  if(sleepiness > 1) {
    sleepiness--;
    $('#sleepiness').text('Sleepiness: ' + sleepiness);
    e.preventDefault();
  }
});


// -------------------------NAME THE TAMAGOTCHI-------------------------

$('#submit-btn').on('click', (e) => {
  e.preventDefault();
console.log($('#input-box').val());
const $tama = $('#tama').val()
//this gets the value you put in the input box with id tama
//cannot do it opposite. ex: $('#input-box').val().appendTo('#tama');

});
