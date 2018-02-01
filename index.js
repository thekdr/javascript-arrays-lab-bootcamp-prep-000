const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newArray = (...kittens, name)
  return newArray;
}

function prependKitten(name) {
  return kittens.unshift(name);
}

function removeLastKitten() {
  return kittens.pop();
}

function removeFirstKitten() {
  return kittens.shift();
}
