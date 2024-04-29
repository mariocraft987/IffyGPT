let known = ["apple", "orange", "banana", "pear", "blueberry", "pineapple"]
known += ["dog", "cat", "snake", "parrot", "bird", "hamster", "horse", "pig"]
known += ["creators"]

function askIffy(text) {
  if(text.includes('creators')) { return "Oh, my creator is mariocraft987!" }
}

export known;
