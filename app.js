
//-----------------------GLOBAL VARIABLES----------------------------

let time = 60;
let age = 30;
let hunger = 5;
let boredom = 5;
let sleepiness = 5;


// -------------------------NAME THE TAMAGOTCHI-------------------------

$('#submit-btn').on('click', (e) => {
  e.preventDefault();
console.log($('#input-box').val());
const $tama = $('#tama').val()
});

//----------------------LIGHTS FUNCTIONS----------------------------


const lightsOff = () => {
  $('#tamaImg').css({
    'background-color': 'grey'
  })
};

const lightsReallyOff = () => {
  $('#scoreboard').css({
    'background-color': 'black'
  })
};


const lightsOn = () => {
  $('#tamaImg').css({
    'background-color': 'white'
  })
};


const lightsReallyOn = () => {
  $('#scoreboard').css({
    'background-color': '#FEEBFA'
  })
};


//------------------------------TIMER FUNCTION----------------------------

const setTimer = () => {

  const timer = setInterval(() => {
    time--;


    if (time % 10 == 0) {
        age += 10;
        console.log(age);
    }

   if (time === 57) {
    $('#tamaImg').attr('class', 'spin')
    console.log(age + ' age');
    hunger = 11;
    console.log(hunger + 'hunger');
    boredom = 15;
    console.log(boredom + 'boredom');
    sleepiness = 11;
    updateVals(hunger, boredom, sleepiness);

  }  if (time === 50) {
    lightsOff();
    hunger += 3;
    boredom +=5;
    sleepiness += 1;
    updateVals(hunger, boredom, sleepiness);


// -------------------------- POSSIBLE DEATH ------------------------------
} if ((time === 45) && (hunger >= 10 || sleepiness >= 10 || boredom >= 10 )) {
alert($('#input-box').val() + ' has died.');
clearInterval(timer);


} if (time === 45){
  $('#tamaImg').attr('class', 'bounce')
  sleepiness = 20;
  boredom = 15;
  lightsOn();
  console.log('hi');
  updateVals(hunger, boredom, sleepiness);


} if (time === 40){
  lightsOff();
  lightsReallyOff();
  updateVals(hunger, boredom, sleepiness);
  console.log(age);


}  if (time === 39){
  lightsOn();
  lightsReallyOn();
  $('#tamaImg').attr('class', 'spin')
  boredom = 9;
  hunger = 9;
  sleepiness = 20;
  updateVals(hunger, boredom, sleepiness);

// -------------------------- POSSIBLE DEATH ------------------------------
} if ((time === 35) && (hunger >= 10 || sleepiness >= 10 || boredom >= 10 )) {
alert($('#input-box').val() + ' has died.');
clearInterval(timer);

} if (time === 30) {
  console.log(age);
  lightsOff();
  sleepiness == 10;
  boredom == 10;
  hunger +=5;
  updateVals(hunger, boredom, sleepiness);

} if (time === 20) {
  console.log(age);
  $('#tamaImg').attr('class', 'spin');
  sleepiness += 10;
  boredom += 10;
  hunger += 10;
  updateVals(hunger, boredom, sleepiness);

} if (time === 10) {
  lightsOn();
  boredom += 30;
  updateVals(hunger, boredom, sleepiness);

} if (time === 5) {
  $('#tamaImg').attr('class', 'bounce');
  boredom += 5;
  sleepiness +=3;
  hunger += 7;
  updateVals(hunger, boredom, sleepiness);


// ---------------------------ENDING THE GAME-----------------------

} else if ((time === 0) && (hunger >= 10 || sleepiness >= 10 || boredom >= 10 )) {
alert($('#input-box').val() + ' has died.');
clearInterval(timer);


} else if ((time === 0) && (hunger < 10 || sleepiness < 10 || boredom < 10 )) {
alert($('#input-box').val() + ' has lived.');
clearInterval(timer);

}

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

// you could update this class instead

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

//DISPLAY ON THE SCREEN: not connected to the button.
const updateVals = (hunger, boredom, sleepiness) => {
  $('#boredom').text('Boredom: ' + boredom);
  $('#hunger').text('Hunger: ' + hunger);
  $('#sleepiness').text('Sleepiness: ' + sleepiness);
}

//HUNGER FUNCTION: DISPLAY IF CLICKED.
$('#hungerLevel').on('click', (e) => {
  const $hungerLevel = $('#hungerLevel');
  // $('#hungerlevel').attr() could work?
  console.log('I am hungry'); //working
    hunger--;
    $('#hunger').text('Hunger: ' + hunger); //working
    e.preventDefault();
});


//BOREDOM FUNCTION: DISPLAY IF CLICKED.
$('#boredomLevel').on('click', (e) => {
  const $boredomLevel = $('#boredomLevel');
 console.log('I am bored'); //testing
    boredom--;
    $('#boredom').text('Boredom: ' + boredom);
    e.preventDefault();
});


//SLEEPINESS FUNCTION: DISPLAY IF CLICKED.
$('#sleepinessLevel').on('click', (e) => {
  const $sleepinessLevel = $('#sleepinessLevel');
  console.log('I am sleepy'); //testing
    sleepiness--;
    $('#sleepiness').text('Sleepiness: ' + sleepiness);
    e.preventDefault();
});
