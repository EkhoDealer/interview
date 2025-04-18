// NOTE: This is a mock implementation of the credit application process.
// Do not modify this file.

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
	await new Promise((resolve) => setTimeout(resolve, 200));
	console.log(
		`Submitted credit application to lender: ${
			lender.name
		} with credit score: ${
			creditReport.score
		} and application data: ${JSON.stringify(data)}`
	);
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
		'nadeem@work.net': null,
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
