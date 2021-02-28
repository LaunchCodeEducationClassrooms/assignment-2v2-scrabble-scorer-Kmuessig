// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = (word.toString().toUpperCase());
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   enterWord = input.question("Let's play some scrabble! Enter a word: ");
   //return enterWord
};
console.log(initialPrompt());

function simpleScore(word) {
  let points = word.length;
  return points
}

function vowelBonusScore(word) {
  word = (word.toString().toUpperCase());
  let vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
  let vpoints = 0;

    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vpoints += 3;
      } else {
        vpoints += 1;
      }
    }
  return vpoints
}

function scrabbleScore(word) {
  word = (word.toString().toLowerCase());
	let letterPoints = Number('');
 
   for (pointLetter in newPointStructure) {
	  for (let i = 0; i < word.length; i++) {
			 if (pointLetter == word[i]) {
			  letterPoints += newPointStructure[pointLetter];
 
         }
	  }
   }
    return letterPoints;
} 

const scoringAlgorithms = [ 
  { name : 'Simple Score',
    description : 'Each letter is worth 1 point.',
    scoreFunction : 'A function with a parameter for user input that returns a score.'
},
{   name : 'Bonus Vowels',
    description : 'Vowels are 3 pts, consonants are 1 pt.',
    scoreFunction : 'A function that returns a score based on the number of vowels and consonants.'
},
 {
  name : 'Scrabble',
  description : 'The traditional scoring algorithm.',
  scoreFunction : 'Uses the oldScrabbleScorer() function to determine the score for a given word.'
}
];

function transform(object) {
  let newPointStructure = {};
  for (item in oldPointStructure) {
      for (i=0 ; i < oldPointStructure[item].length ; i++) {
        newPointStructure[oldPointStructure[item][i].toLowerCase()] = Number(item);
      }
  }
  return newPointStructure
};
// transform(oldPointStructure);
let newPointStructure = transform(oldPointStructure);

function scorerPrompt() {
  howScored = input.question(`Please select one of the following algorithms to score your word:\n \n 0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n 1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n 2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\n \nPlease enter: 0, 1, or 2: `)
   //return howScored

if (howScored == 0) {
  console.log(`\nScore for word "${enterWord}": ${simpleScore(enterWord)}`);
} else if (howScored == 1) {
  console.log(`\nScore for word "${enterWord}": ${vowelBonusScore(enterWord)}`);
} else if (howScored == 2) {
  console.log(`\nScore for word "${enterWord}":\n${scrabbleScore(enterWord)}`);
} else {
  console.log('\nPlease choose another number!');
  }
}
scorerPrompt();

 
function runProgram() {
  //  initialPrompt()
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

