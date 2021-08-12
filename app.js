require('dotenv').config()

const app = require('express')();

// I know, a gross global variable
// it will just make updating the data source easy
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
	console.log("Listening on port", PORT)
})