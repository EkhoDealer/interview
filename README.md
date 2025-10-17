# Ekho Interview

Thank you for participating in this interview with us! This project is designed to test your debugging and development skills across various parts of a full-stack application.

Below are the steps you need to follow to get started:

## Getting Started

## Branches

Each branch in this repository corresponds to a different part of the interview process. You will move from one branch to another as you progress further through the interview.

### Part 1: Debugging

Checkout the `interview-debugging` branch:

```bash
git checkout interview-debugging
```

In your code editor, navigate to file: `interviews/web-app/src/pages/presentation/page-layouts/InterviewDebugging.js` and run the following command in your terminal:

```bash
npm start
```

You should see a localhost webpage start with a blank screen. Please debug the issue.

### Part 2: Frontend Development

Checkout the `dev` branch:

```bash
git checkout dev
```

In your code editor, navigate to file: `interviews/web-app/src/pages/presentation/page-layouts/InterviewDebugging.js` and run the following command in your terminal:

```bash
npm start
```

You should see a localhost webpage start with a generic page. Next, open a new tab in your terminal and navigate to directory `interviews/web-app`. This should open a new page that you can play around with. Have the interviewer orient you on what is going on within this page.

Please build out a multi-page modal that has the following:

1. An initial page with some text
2. A second page that collects the following information:
   - Name
   - Email
   - Age Group (18-30, 30-60, 60+)
   - Start Date of Employment
3. A third page that relays the information back to the user, allowing them to confirm the inputs look correct. A button that then closes the modal.

Note: the multi-page modal should support buyers going back to previous pages.

### Part 3: Backend Development

Navigate to the `interviews/backend` folder. Run command

```bash
npm start
```

Make the following changes in the `server.js` file:

1. Design and implement two endpoints:
   - Create credit application - Note: object being "saved" should be a reasonable schema based on credit application info collected in part 2
   - Fetch credit application
2. Connect the two! Go back to the frontend and - in the final modal page - make a successful create credit application call passing in the data collected.

### Part 4: Backend Debugging and Optimization

A non-technical member of your team has noticed a few issues with the credit application process that they have asked you to resolve:

1.  The credit application submission function fails for some buyers but not others.

2.  Despite the caching mechanism one of your ex-colleagues built, the credit report retrieval function is being called more than once for some buyers. This is an expensive operation and should be called at most once per buyer across all invocations of your credit application submission function.

Your team member doesn't remember which buyers had these specific issues, but they know that at least one buyer experienced each issue in the last day's submissions. They've provided a list of unique buyer's email addresses from the last day:

```
rowan@ekho.co.za
bongi@ekho.co.za
rohan@nahor.palindrome
chow@dog.com
mr@hot.rod
david@goliath.com
victor@ious.com
nadim@work.net
```

Debug and optimize the code to resolve these issues.

#### Notes

- Mock functions (with the `mock` prefix) all work as described and are included to simulate use of third-party services. You should not modify these functions.

- Clearing the cache may be helpful during testing.

```bash
npm run clear-cache
```

- Buyers can be uniquely identified by their email address.
