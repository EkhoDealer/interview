import {
	mockGetCreditReport,
	mockGetCreditScore,
	mockGetCachedCreditReport,
} from './mock.js';

/**
 * Performs a soft credit pull to get a credit score for a particular individual
 * @param {Object} data - The credit application data
 * @returns {number} The credit score
 */
export function getCreditScore(data) {
	return mockGetCreditScore(data);
}

/**
 * Performs a hard credit pull to get a credit report for a particular individual
 * @param {Object} data - The credit application data
 * @returns {Object} The credit report
 */
export async function getCreditReport(data) {
	const cachedCreditReport = mockGetCachedCreditReport(data.email);
	if (cachedCreditReport) {
		return cachedCreditReport;
	}
	const creditReport = await mockGetCreditReport(data);
	return creditReport;
}
