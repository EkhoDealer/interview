import { jest } from '@jest/globals';
import { execSync } from 'child_process';
import { submitCreditApplication } from '../utils/credit-application.js';
import * as mockUtils from '../utils/mock.js';
import * as lenderUtils from '../utils/lender.js';
import * as creditPull from '../utils/credit-pull.js';

// Helper function to clear the cache using the npm script
function clearCache() {
	try {
		execSync('npm run clear-cache', { stdio: 'inherit' });
		console.log('Cache cleared successfully');
	} catch (error) {
		console.error('Error clearing cache:', error);
	}
}

describe('Credit Application Tests', () => {
	const testBuyers = [
		{ email: 'rowan@ekho.co.za', name: 'Rowan' },
		{ email: 'bongi@ekho.co.za', name: 'Bongi' },
		{ email: 'rohan@nahor.palindrome', name: 'Rohan' },
		{ email: 'chow@dog.com', name: 'Chow' },
		{ email: 'mr@hot.rod', name: 'Mr Hot Rod' },
		{ email: 'david@goliath.com', name: 'David' },
		{ email: 'victor@ious.com', name: 'Victor' },
		{ email: 'nadim@work.net', name: 'Nadim' },
		{ email: 'other@example.com', name: 'Other User' },
		{ email: 'someone_else@google.com', name: 'Someone Else' },
		{ email: 'another_one@yahoo.com', name: 'Another One' },
		{ email: 'bites-the-dust@hotmail.com', name: 'Bites the Dust' },
	];
	// Setup before all tests
	beforeAll(() => {
		// Clear the cache directory before running tests
		clearCache();
	});

	// Test 1: Verify credit application submission works for all buyers
	test('should successfully submit credit application for all buyers including non-predefined emails', async () => {
		// Test each buyer
		for (const buyer of testBuyers) {
			const result = await submitCreditApplication(buyer);
			expect(result).toEqual({ ok: true });
		}
	});

	// Test 2: Verify credit score is calculated only once per buyer
	test('should calculate credit score only once per buyer', async () => {
		// Clear cache before this specific test
		clearCache();

		// Create a counter to track function calls
		let getCreditReportCalls = 0;
		const originalGetCreditReport = mockUtils.mockGetCreditReport;
		mockUtils.mockGetCreditReport = jest.fn((...args) => {
			getCreditReportCalls++;
			return originalGetCreditReport(...args);
		});

		const buyer = { email: 'nadim@work.net', name: 'Nadim' };

		// Submit the same buyer's application multiple times
		await submitCreditApplication(buyer);
		await submitCreditApplication(buyer);
		await submitCreditApplication(buyer);

		// Credit report should be fetched at most once
		expect(getCreditReportCalls).toBeLessThanOrEqual(1);

		// Restore original function
		mockUtils.mockGetCreditReport = originalGetCreditReport;
	});
});
