import { getCreditReport } from './credit-pull.js';
import {
	mockCacheCreditReport,
	mockSubmitCreditApplicationToLender,
} from './mock.js';

/** Checks if a credit score is valid for a lender
 * @param {number} creditScore - The credit score
 * @param {Object} lender - The lender
 * @returns {Object} The validation result
 */
function isCreditScoreValidForLender(creditScore, lender) {
	if (creditScore < lender.minScore) {
		return {
			ok: false,
			error: "Credit score is below lender's minimum score",
		};
	}
	if (creditScore > lender.minScore && creditScore < lender.maxScore) {
		return {
			ok: true,
		};
	}
	if (creditScore > lender.maxScore) {
		return {
			ok: false,
			error: "Credit score is above lender's maximum score",
		};
	}
	throw new Error('Invalid credit score');
}

export async function handleLenderSubmission(lender, data, creditReport) {
	try {
		mockCacheCreditReport(data.email, creditReport);
	} catch (error) {
		console.error('Error caching credit report:', error);
	}
	const result = await mockSubmitCreditApplicationToLender(
		data,
		creditReport,
		lender
	);
	return result;
}

/**
 * Submits a credit application to a particular lender if the credit score is valid
 * @param {Object} lender - The lender
 * @param {Object} data - The credit application data
 * @param {number} creditScore - The credit score
 * @returns {Object} The response from the submission
 */
export async function submitCreditApplicationToLender(
	lender,
	data,
	creditScore
) {
	const creditReport = await getCreditReport(data);

	const validationResult = isCreditScoreValidForLender(creditScore, lender);
	console.log('validationResult', validationResult);

	if (!validationResult.ok) {
		return validationResult;
	}

	const result = await handleLenderSubmission(lender, data, creditReport);

	return result;
}
