let place = prompt("Enter a place.");
let animal = prompt("Enter an animal.");
let name = prompt("Enter a person's name.");
let food = prompt("Enter a food.");
let verb = prompt("Enter an action ending in -ing.");
let adjective = prompt("Enter an adjective.");
let object = prompt("Enter an object.");

let story = 
`Yesterday, I went to <mark>${place}</mark> with <mark>${name}</mark>.
Suddenly, a giant <mark>${animal}</mark> appeared carrying a huge <mark>${object}</mark>!
It started <mark>${verb}</mark> while eating <mark>${food}</mark>.
The whole place became <mark>${adjective}</mark> and everyone started running away.
I will never forget that crazy adventure!`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;