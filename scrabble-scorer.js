// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

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

const vowelPointStructure = {
	1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
	3: ['A', 'E', 'I', 'O', 'U']
};

const simpleScorerObject = {
	// name: "Simple Score",
	// description: "Each letter is worth 1 point",
	scorerFunction: simpleScorer
};

const vowelBonusScorerObject = {
	// name: "Bonus Vowel",
	// description: "Vowels are 3 pts, consonants are 1 pt",
	scorerFunction: vowelBonusScorer
};


const oldScrabbleScorerObject = {
	// name:"Scrabble",
	// description:"The traditional scoring algorithm",
	scorerFunction: oldScrabbleScorer
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {

		for (const pointValue in oldPointStructure) {

			if (oldPointStructure[pointValue].includes(word[i])) {
				letterPoints += Number(pointValue)
			}
		}
	}
	console.log(`Score for '${word.toLowerCase()}': ${letterPoints}`)
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
	let word = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
	return word;
}


function simpleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = word.length
	console.log(`Score for '${word.toLowerCase()}': ${letterPoints}`)
	return letterPoints
}

function vowelBonusScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
		
		for (const pointValue in vowelPointStructure) {
			
			if (vowelPointStructure[pointValue].includes(word[i])) {
				letterPoints += Number(pointValue)
			}
		}
	}
	console.log(`Score for '${word.toLowerCase()}': ${letterPoints}`)
	return letterPoints;
}

let scrabbleScorer;

const scoringAlgorithms = [simpleScorerObject, vowelBonusScorerObject, oldScrabbleScorerObject];

function scorerPrompt() {
	console.log("Which scoring algorithm would you like to use? \n\n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system" )
	let scorerPromptResults = input.question("Enter 0, 1, or 2: ");

	return scorerPromptResults
}



function transform() {};

let newPointStructure;

function runProgram() {
	let inputWord = initialPrompt();// input string from user ex: "happy"
	let inputIndex = scorerPrompt(); // input of either 0, 1, or 2 from user
	let selectedAlgorithm = scoringAlgorithms[inputIndex] //selects one of 3 scoring algorithms
	let results = selectedAlgorithm.scorerFunction(inputWord); //selects the scoring function with input from selected item in array
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
	initialPrompt: initialPrompt,
	transform: transform,
	oldPointStructure: oldPointStructure,
	simpleScorer: simpleScorer,
	vowelBonusScorer: vowelBonusScorer,
	scrabbleScorer: scrabbleScorer,
	scoringAlgorithms: scoringAlgorithms,
	newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
