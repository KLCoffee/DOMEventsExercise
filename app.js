// DOM EVENTS EXERCISE

// 1a
const button1 = document.querySelector(`#one`);
// 1b
button1.onclick = () => {
    alert ("Cool! You can hear/understand a hummingbird and ants");
}
// 2a
const h3 = document.querySelector(`h3`);
// 2b
h3.addEventListener(`mouseover`, () => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});
// 3a
const form = document.querySelector(`form`);

form.addEventListener(`submit`, q => {
//    Stops the form from submitting
    q.preventDefault();
// returns the value entered for the quote
console.dir(form);
console.log(form.elements.quote.value);   
const rmQuote = form.elements.quote.value;
    alert(`${rmQuote}`);

// Clearing out the value in the input after it is used.
    form.elements.quote.value = ``;
});

// Bonus
//4a
const darkMode = document.querySelector(`#dm`);
// 4b
for (d of darkMode){
    d.classList.toggle(`background`);
}

// 5a
const reality = document.querySelector(`#reality`);
reality.addEventListener(`click`, ()=>{
alert("You have successfully moved to another reality");
return;
});

reality.addEventListener(`click`, function(){
alert("You have successfully moved to another reality");
return;
});

reality.addEventListener(`click`, function(){
    alert ("OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!");
    }, {once: true});