const { response } = require('express');

require('dotenv').config()

// the global data storage
data = {};

// a seed for the random generator
seed = 1; 

// with help from Stack Overflow and W3Schools
// return a whole number in the range [min, max]
const randInt = (min, max) => {
	// return an integer within the range [min, max]
	return Math.floor(
		Math.random() * /* [0, 1) */
			(max - min + 1) + /* scaled by max with min factored out */
			min
	);
};

// from https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
const isNumeric = str => {
	if (typeof str != "string") return false // we only process strings!  
	return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
		!isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
};

const app = require('express')();

// I know, a gross global variable
// it will just make updating the data source easy
const PORT = process.env.PORT || 7000;

app.get("set-seed", async(req, res, next) => {
	seed_value = parseInt(req.query.seed);
	seed = seed_value ? seed_value : seed;
	res.json("Seed set")
})

// GET => /modify
// modify the global data variable (like a setter)
app.get("/modify", async(req, res, next) => {
	const key = req.query.key;
	const value = req.query.value;
	// modify the global variable to reassign the
	// value of the key to the value given by the user in the query
	// if the value is numeric, then it is trimmed and parsed into a float
	// else, a string is held as the value for the key
	data[key] = isNumeric(value) ? parseFloat(value.trim()) : value;
	console.log("Current state:\n", data);
	res.json(data[key]);
});
// GET => /query
// get the value of the key in data
app.get("/query", async(req, res, next) => {
	const key = req.query.key;
	// if is number
	// EXPLAIN THIS!!!
	// typeof returns a pretty string, not a type!
	// use isNaN() standing for is Not a Number
	// invert that to check if the value is a number
	if (!isNaN(data[key])) {
		if (randInt(0, seed) == 0) {
			console.log("Random passed! Modify it");
			// just simulate adding some cents
			const cents = Math.random();
			// do a simple rounding on Math.random() which returns a float from zero up to 1
			// if it returned a zero, add! 
			// else, if the float rounds to 1, subtract!
			data[key] += Math.round(Math.random()) == 0 ? cents : -cents;
		}
	}
	console.log("Current state:\n", data);
	res.json(data[key]);
});


app.listen(PORT, () => {
	console.log("Listening on port", PORT)
})