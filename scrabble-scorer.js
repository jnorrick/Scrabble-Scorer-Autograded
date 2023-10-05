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
	name: "Simple Score",
	description: "Each letter is worth 1 point.",
	scoringFunction: function simpleScorer() {}
};

const vowelBonusScorerObject = {
	name: "Bonus Vowel",
	description: "Vowels are 3 pts, consonants are 1 pt.",
	scoringFunction: function vowelBonusScorer() {}
}

const oldScrabbleScorerObject = {
	name:"Scrabble",
	description:"The traditional scoring algorithm.",
	scoringFunction: function oldScrabbleScorer() {}
}


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
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
	let word = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
	return word;
}


function simpleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = word.length
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
	return letterPoints;
}

let scrabbleScorer;

const scoringAlgorithms = [simpleScorerObject, vowelBonusScorerObject, oldScrabbleScorer];

function scorerPrompt() {
	console.log("Which scoring algorithm would you like to use? \n\n 0 - Simple: One point per character. \n 1 - Vowel Bonus: Vowels are worth 3 points. \n 2 - Scrabble: Uses scrabble point system." )
	scorerPromptResults = input.question("Enter 0, 1, or 2: ");
	return scorerPromptResults
}

function transform() {};

let newPointStructure;

function runProgram() {
	let initialPromptResults = initialPrompt(); // input string from user ex: "happy"
	let results = vowelBonusScorer(initialPromptResults)
	// let scorerPromptResults = scorerPrompt(); // input of either 0, 1, or 2 from user
	// let results = scoringAlgorithms[scorerPromptResults] 
	// let results = oldScrabbleScorer(initialPromptResults);
	console.log(results);
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
