import express from 'express';
import bodyParser from 'body-parser';
import {
	getCreditApplication,
	submitCreditApplication,
} from '../credit-helpers.js';

const app = express();
app.use(bodyParser.json());

// TODO 1:
// Create the "Create Credit App" API endpoint
// -------------------------------------
// POST /credit-app
// This will accept a JSON object in the request body, representing a new credit app.

// TODO 2:
// Create the "Get Credit App" API endpoint
// -------------------------------------
// GET /credit-apps
// This will return a a specified credit app.

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
