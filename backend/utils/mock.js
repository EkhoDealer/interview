// NOTE: Any functions in this file are mock implementations. We can assume they work as described.
// Do not modify this file.

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

/**
 * Mock retreival of a credit application by id
 * @param {string} id - The id of the credit application
 * @returns {Object} The credit application
 */
export function mockGetCreditApplication(id) {
	return { id, name: 'John Doe', email: 'john.doe@example.com' };
}

/**
 * Mock retreival of lenders who are interested in the deal
 * @returns {Array} The lenders
 */
export async function mockGetLenders() {
	await new Promise((resolve) => setTimeout(resolve, 200));
	return [
		{ id: 1, name: 'Lender 1', minScore: 400, maxScore: 650 },
		{ id: 2, name: 'Lender 2', minScore: 200, maxScore: 450 },
		{ id: 3, name: 'Lender 3', minScore: 625, maxScore: 800 },
	];
}

/**
 * Mock saving of a credit application successfully
 * @param {Object} data - The credit application data
 * @returns {Object} The response from the saving
 */
export async function mockSaveCreditApplication(data) {
	await new Promise((resolve) => setTimeout(resolve, 200));
	console.log('Saved credit application to database:', data);
	return { ok: true };
}

/**
 * Mock submission of credit application to a lender
 * @param {Object} data - The credit application data
 * @param {Object} creditReport - The credit report
 * @param {Object} lender - The lender
 * @returns {Object} The response from the submission
 */
export async function mockSubmitCreditApplicationToLender(
	data,
	creditReport,
	lender
) {
	console.log(
		`Submitted credit application to lender: ${
			lender.name
		} with credit score: ${
			creditReport.score
		} and application data: ${JSON.stringify(data)}`
	);
	await new Promise((resolve) => setTimeout(resolve, 200));
	return { ok: true };
}

/**
 * Mock retrieval of a credit score
 * @param {Object} data - The credit application data
 * @returns {number|null} The credit score between 0 and 800 inclusive, or null if not found
 */
export function mockGetCreditScore(data) {
	const email = data.email;
	const emailMap = {
		'rowan@ekho.co.za': 725,
		'bongi@ekho.co.za': 650,
		'rohan@nahor.palindrome': 300,
		'chow@dog.com': 425,
		'mr@hot.rod': 800,
		'david@goliath.com': 775,
		'victor@ious.com': 250,
		'nadim@work.net': null,
	};

	let score = emailMap[email];
	if (!score && score !== null) {
		const u1 = Math.random();
		const u2 = Math.random();
		const z0 =
			Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
		const stdDev = 75;
		const mean = 600;
		let rawScore = z0 * stdDev + mean;
		let roundedScore = Math.round(rawScore / 25) * 25;
		score = Math.max(0, Math.min(800, roundedScore));
		const rawScoreInt = Math.round(rawScore);
		if (rawScoreInt % 7 === 0 || rawScoreInt % 9 === 0) {
			score = null;
		}
	}
	return score;
}

/**
 * Mock retrieval of a credit report -- assume this is a very costly operation
 * @param {Object} data - The credit application data
 * @returns {Object} The credit report
 */
export async function mockGetCreditReport(data) {
	await new Promise((resolve) => setTimeout(resolve, 200));
	return {
		email: data.email,
		score: Math.max(1, mockGetCreditScore(data) - 1),
		history: [
			{ lender: 'Bank of Ekho', date: '2024-04-22', amount: 3241 },
			{ lender: 'Ekho Location', date: '1999-09-09', amount: 200 },
			{ lender: 'Ekho Auto', date: '2012-12-12', amount: 11111 },
			{ lender: 'Ekho Home', date: '1970-01-01', amount: 50005000 },
		],
	};
}

/**
 * Mock caching of credit application data to the local file system
 * @param {string} email - The email associated with the credit application
 * @param {Object} data - The credit application data to cache
 * @returns {boolean} True if caching was successful
 */
export function mockCacheCreditReport(email, data) {
	try {
		const hash = crypto.createHash('md5').update(email).digest('hex');
		const dirPrefix = hash.substring(0, 2);
		const fileName = hash.substring(2) + '.json';

		const cacheDir = path.join('.cache', 'credit-reports', dirPrefix);

		// Create directories if they don't exist
		fs.mkdirSync(cacheDir, { recursive: true });

		const filePath = path.join(cacheDir, fileName);
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

		return true;
	} catch (error) {
		console.error('Error caching credit report:', error);
		return false;
	}
}

/**
 * Mock retrieval of cached credit report
 * @param {string} email - The email associated with the credit report
 * @returns {Object|null} The cached credit report or null if not found
 */
export function mockGetCachedCreditReport(email) {
	try {
		const hash = crypto.createHash('md5').update(email).digest('hex');
		const dirPrefix = hash.substring(0, 2);
		const fileName = hash.substring(2) + '.json';

		const filePath = path.join(
			'.cache',
			'credit-reports',
			dirPrefix,
			fileName
		);

		if (fs.existsSync(filePath)) {
			const data = fs.readFileSync(filePath, 'utf8');
			return JSON.parse(data);
		}

		return null;
	} catch (error) {
		console.error('Error retrieving cached credit report:', error);
		return null;
	}
}
