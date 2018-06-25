console.log("hi");



//Tomagotchi CLASS
class tamagotchi {
  constructor(name, hunger, sleep, boredom){
    this.name = name;
    this.age = age;
    this.hunger = hunger;
    this.sleep = sleep;
    this.boredom = boredom;
  }

//could this part be inside a input text form where the name you could type in but then it gave you 5,5,5 for the rest?
const tama = new tamagotchi('', 5, 5, 5); //input would go in as name
console.log(tama);



//USER NAMES THE tamagotchi
const nameTheTamagotchi = ('click', (e) => {
 //someone names the tamagotchi in the input box that you access here. You would access the value with an
 $(e.currentTarget).text('');
});


//NEED A TIMER.
//use the e.currentTarget
//if (age) hits +=10 from the beginning, appendTo() the div. 



//HUNGER FUNCTION
const hungerTime = () => {
  //increase hunger every ____________?
    //+2 ++
  if (tamagotchi.hunger <= 0) {
    console.log(`${tamagotchi.name} is dead`);
  }
}
hungerTime();
//SLEEPY FUNCTION
const sleepyTime = () => {
  //increase sleepiness every _______?
  if (tamagotchi.sleep <= 0) {
    console.log(`${tamagotchi.name} is dead`);
  }
}

};
//BOREDOM FUNCTION
const boredomTime = () => {
  //increase boredom every ___________?
  if (tamagotchi.boredom <= 0) {
    console.log(`${tamagotchi.name} is dead`);
  }
}








//DYNAMIC SCOREBOARD WITH jQUERY
// const $scoreboard = $('#scoreboard').addText('hi').appendTo('');

//const $h1 = $('<h1/>');

// const makeScoreboard = () => {
// const $div = $('<div/>');
// // $('body').append($div);
// // $('h2').text('SCOREBOARD').appendTo('$div');
// console.log('hi');
// };
// makeScoreboard();
