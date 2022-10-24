const inAlphabet = /[a-zA-Z]/;	// Regex to check if a character is between 'a and z' OR 'A and Z'.

/**
 * Takes a string and an integer offset.
 * Returns the encoded string with the alphabetic characters shifted by the value of the offset.
 * @param {string} string - Is the string to encode.
 * @param {number} offset - Is the number of places characters will be shifted by.
 */
function EncodeCipher(string, offset)
{
	const characterArray = string.split("");		// Split string into an array of characters
	const newCharArray = [];

	//console.log("Char array: " + characterArray);	// For debugging: prints the original character array contents

	for (i in characterArray)
	{
		let shiftedChar = offsetCharacter(characterArray[i], offset);	// Offset this character
		newCharArray.push(shiftedChar);									// Add the newly returned character to the 'newCharArray'
	}
	//console.log("New Char array: " + newCharArray);	// For debugging: prints the new array contents
	return (newCharArray.join(""));										// Join all the characters in the new array back into a string
}

/**
 * Takes a string character and an integer offset.
 * It shifts alphabetic characters by the offset (wrapping back if exceding the alphabet) and returns the new character.
 * Otherwise it just returns the original character.
 * @param {string} character - Is the character to shift.
 * @param {number} offset - Is the number of places the character will be shifted by.
 */
function offsetCharacter(character, offset)
{
	if (inAlphabet.test(character))	// Test using regex to see if it's an alphabetic character
	{
		const charCodeWithOffset = character.charCodeAt(0) + offset	// Get the unicode value and add the offset
		const offsetChar = String.fromCharCode(charCodeWithOffset);	// Convert the new unicode value back to a character

		// Comparisons used on alphabetic characters treat them like their unicode
		// Upper & lower cases are checked seperately to avoid uppercase overflowing into lowercase and not being shifted back by 26
		if ((character >= "A" && character <= "Z") && offsetChar > "Z"){		// If original character is upper case but new character exceeds that alphabet
			character = String.fromCharCode(offsetChar.charCodeAt(0) - 26);		// Convert new character to unicode, shift it back by 26, convert it to a regular character.
		}
		else if (offsetChar > "z"){		// Equivalent for lowercase
			character = String.fromCharCode(offsetChar.charCodeAt(0) - 26);
		}
		else{
			character = offsetChar;		// Otherwise just set it to the shifted character
		}
	}
	return character;	// Return the new character
}


// TESTING PROMPTS
// Ask for inputs
const inputString = prompt("String to encode: ");
const inputOffset = parseInt(prompt("Offset: "));

console.log(EncodeCipher(inputString, inputOffset));	// Log the output

//console.log(EncodeCipher("Test cAse, for testing.", 15));
// Expected (using ref 7):
// Ithi rPht, udg ithixcv.


/* REFERENCES
1. https://www.w3schools.com/jsref/jsref_regexp_test.asp
2. Alphabetical regex: https://stackoverflow.com/questions/4923380/difference-between-regex-a-z-and-a-za-z
3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
4. https://www.w3schools.com/jsref/jsref_charcodeat.asp#:~:text=The%20charCodeAt()%20method%20returns,also%20the%20charAt()%20method.
5. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than
6. https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block)
7. https://www.dcode.fr/caesar-cipher
8. https://www.tutorialspoint.com/how-to-convert-a-string-into-integer-in-javascript#:~:text=To%20convert%20a%20string%20to,function%20won%27t%20accept%20spaces.
*/
