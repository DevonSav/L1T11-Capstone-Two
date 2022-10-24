let testArray = ["V", "W", "X", "Y", "Z", "v", "w", "x", "y", "z"]	// Set up a testing list.

for (i in testArray)
{
	if ( testArray[i] > "X")	// Test every item agains upper case 'X'. Lower case values should always be larger as their unicode value is bigger - see ref
	{
		console.log(testArray[i] + " is Larger")
	}
	else if ( testArray[i] < "X")
	{
		console.log(testArray[i] + " is Smaller")
	}
	else if ( testArray[i] == "X")
	{
		console.log(testArray[i] + " is Equal")
	}
}

// REFERENCE
// https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block)
