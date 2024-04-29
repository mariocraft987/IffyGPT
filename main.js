/*
* IffyGPT
* version 0.2
*/

let known = ["apple", "orange", "banana", "pear", "blueberry", "pineapple"];
known += ["dog", "cat", "snake", "parrot", "bird", "hamster", "horse", "pig"];

function askIffy(text) {
  let q = text.toLowerCase();
  if(q.trim() == "") { return "You're asking me nothing!?"; }
  if(q.includes('creator')) { return "Oh, my creator is mariocraft987!"; }
}

export known;
