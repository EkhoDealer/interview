import { getCreditScore } from './credit-pull.js';
import { submitCreditApplicationToLender } from './lender.js';
import {
	mockGetCreditApplication,
	mockGetLenders,
	mockSaveCreditApplication,
} from './mock.js';

/**
 * Retrieves a credit application by id
 * @param {string} id - The id of the credit application
 * @returns {Object|null} The credit application or null if not found
 */
export function getCreditApplication(id) {
	// Mock retreival of a credit application by id
	return mockGetCreditApplication(id);
}

/**
 * Submits a credit application
 * @param {Object} data - The credit application data
 * @returns {Object} The response from the submission
 */
export async function submitCreditApplication(data) {
	const creditScore = getCreditScore(data);
	const lenders = await mockGetLenders();
	const promises = [mockSaveCreditApplication(data)];
	lenders.forEach((lender) => {
		promises.push(
			submitCreditApplicationToLender(lender, data, creditScore)
		);
	});
	await Promise.all(promises);
	return { ok: true };
}
