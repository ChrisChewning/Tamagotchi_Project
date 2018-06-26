console.log("hi");
if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!')
};


//global variables
let time = 60;
let age = 30;
let hunger = 5;
let boredom = 5;
let sleepiness = 5;



//TIMER FUNCTION
const setTimer = () => {
  const $timer = $('#timer');
  let $age = $('#age');
  const timer = setInterval(() => {
time--;
console.log(time);

  if (time === 50) {
  age += 10; //only works on this one.
  console.log(age);
} else if (time === 40){
  age += 10;

  console.log(age);
} else if (time === 30) {
  age += 10;
  console.log(age);
} else if (time === 20) {
  age += 10;
  console.log(age);
} else if (time === 10) {
  age += 10;
  console.log(age);
} else if (time === 0) {
  clearInterval(timer);  //stops the timer. if you want to add rounds, put round++ here and make a let global variable.
  alert('game is over!')
};

$('#timer').text('timer: ' + time + 's');
$('#age').text('age: ' + age + ' years old.')

}, 1000); //this goes every second.
};


$('#start').on('click', (e) => {
  console.log('button clicked'); //testing
setTimer();
});



//TAMAGOTCHI CLASS
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



//USER NAMES THE TAMAGOTCHI.   #userInput i.d.
// const nameTheTamagotchi = ('click', (e) => {
//  //someone names the tamagotchi in the input box that you access here. You would access the value with an
//  $(e.currentTarget).text('');
// });


//TIMER FUNCTION
//use the e.currentTarget
//if (age) hits +=10 from the beginning, appendTo() the div.



// -------------------------------BUTTONS AND THE FUNCTIONS THAT GO WITH THEM-------------------------------

//OTHER BUTTONS
// const $boredomButton = $('<button id="boredomLevel">Decrease Boredom</button>');
// $('#boredom-button').appendTo('body');
//
// const $hungerButton = $('<button id="hungerLevel">Decrease Hunger</button>');
// $('#hunger-button').appendTo('body');


// e.target

//TIMER
// $('#timer').text('timer: ' + time + 's');
// $('#age').text('age: ' + age + ' years old');

//HUNGER FUNCTION

//button is #hungerLevel

$('#hungerLevel').on('click', (e) => {
  const $hungerLevel = $('#hungerLevel');
  // $('#hungerlevel').atrr()
  // $('#hungerLevel').text('hunger: ' + hungerLevel);

  console.log('I am hungry'); //working
  if(hunger > 1) { //working
    hunger--;
    $('#hunger').text('Hunger: ' + hunger); //working
  }
});


//BOREDOM FUNCTION

$('#boredomLevel').on('click', (e) => {
  const $boredomLevel = $('#boredomLevel');

  // <img id='hungryImg'>
  // $('#boredomLevel').text('boredom: ' + boredomLevel);

 console.log('I am bored'); //testing

  if(boredom > 1) {
    boredom--;
    $('#boredom').text('Boredom: ' + boredom);
  }
});



//SLEEPINESS FUNCTION

$('#sleepinessLevel').on('click', (e) => {
  const $sleepinessLevel = $('#sleepinessLevel');
  //you could use a jqeury toggle function to change the text to the icon when you click it.
  // $('#sleepinessLevel').text('sleepiness: ' + sleepinessLevel);
  console.log('I am sleepy'); //testing

  if(sleepiness > 1) {
    sleepiness--;
    $('#sleepiness').text('Sleepiness: ' + sleepiness);
  }
});



//EVENT LISTENER & CLICK FUNCTION FOR THE INPUT BOX NAME VALUE

$('#submit-btn').on('click', (e) => {
  //don't forget the e ni the parameter. if it's blank it won't read the preventDefault()
  e.preventDefault();
console.log($('#input-box').val());

const $tama = $('#tama').val(); //this gets the value you put in the input box with id tama
// $('#tama').text(`${tama}`).val('');
$('#tama').append($('#input-box').val() + "'s ");
//gets the input value. you want that to be in a string with 's though.
//cannot do it opposite. ex: $('#input-box').val().appendTo('#tama');


// render() {
//     $('#input-box').empty();
//     e.preventDefault();
// }


// $('#tama').append(`${tama}`);

// const favTvShow = $('#input-box2').val();
//   $('body').append(`Your favourite TV show is ${favTvShow}`);


});


// const $hungerLevel = $('#hungerLevel');







// $('form').on('submit', (e) => {
//   e.preventDefault(); //e.preventDefault() stops the form from trying to refresh the page.
//   console.log($('#input-box3').val());
//
// });


// const $sleepyButton = $('<button id="sleepinessLevel">Decrease Sleepiness</button>');
// $('#sleepy-button').appendTo('body');



// //AGE FUNCTION
// const boredomTime = () => {
//   //increase boredom every ___________?
//   if (tamagotchi.boredom <= 0) {
//     alert(`${tamagotchi.name} is dead`);
//   }
// }


//HUNGER FUNCTION
// const hungerTime = () => {
//   //increase hunger every ____________?
//     //+2 ++
//   if (tamagotchi.hunger <= 0) {
//     alert(`${tamagotchi.name} is dead`);
//   }
// }
// hungerTime();


// //SLEEPY FUNCTION
// const sleepyTime = () => {
//   //increase sleepiness every _______?
//   if (tamagotchi.sleep <= 0) {
//     alert(`${tamagotchi.name} is dead`);
//   }
// }
//
// };

// //BOREDOM FUNCTION
// const boredomTime = () => {
//   //increase boredom every ___________?
//   if (tamagotchi.boredom <= 0) {
//     alert(`${tamagotchi.name} is dead`);
//   }
// }
//
//
//
//
// const didPetDie = (timerName) => {
// 		if (pet.hunger === 10 || pet.sleepiness === 10 || pet.boredom === 10) {
// 			console.log(`{($('#input-box').val())}`);
// 			clearInterval(time)
// 		}
// 	};
//
// })
