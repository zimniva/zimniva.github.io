/**
* generate a random integer between min and max
* @param {Number} min
* @param {Number} max
* @return {Number} random generated integer
*/
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var header = "Friends Episode Randomizer <p>";
var season = randomInt(1, 10);
var maxCount = 24;
if (season == 6) {
    maxCount = 25;
}
if (season == 10) {
    maxCount = 18;
}
var episode = randomInt(1, maxCount);
var finalOutput = "Season " + season + " Episode " + episode;
document.body.innerHTML = header + finalOutput;
