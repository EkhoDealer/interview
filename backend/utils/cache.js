import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

/**
 * Creates a hash from the credit application email
 * @param {string} email - The email to hash
 * @returns {string} The hashed email
 */
function hashEmail(email) {
	return crypto.createHash('md5').update(email).digest('hex');
}

/**
 * Caches credit application data to the local file system
 * @param {string} email - The email associated with the credit application
 * @param {Object} data - The credit application data to cache
 * @returns {boolean} True if caching was successful
 */
export function cacheCreditReport(email, data) {
	try {
		const hash = hashEmail(email);
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
 * Retrieves cached credit report
 * @param {string} email - The email associated with the credit report
 * @returns {Object|null} The cached credit report or null if not found
 */
export function getCachedCreditReport(email) {
	try {
		const hash = hashEmail(email);
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
