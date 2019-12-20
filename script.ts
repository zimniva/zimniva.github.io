
 /**
 * generate a random integer between min and max
 * @param {Number} min 
 * @param {Number} max
 * @return {Number} random generated integer 
 */
 function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
var header: String = "Friends Episode Randomizer <p>"
let season: number = randomInt(1,10);
let maxCount: number = 24;
if (season == 6){
    maxCount = 25;
}
if (season == 10){
    maxCount = 18;
}
let episode: number = randomInt(1, maxCount);

var finalOutput = "Season "+ season + " Episode " + episode

document.body.innerHTML = header + finalOutput