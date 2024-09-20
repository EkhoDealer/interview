# Ekho Interview

Thank you for participating in this interview with us! This project is designed to test your debugging and development skills across various parts of a full-stack application.

Below are the steps you need to follow to get started:

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/EkhoDealer/interview.git
    ```

2. Navigate into the project directory:
    ```bash
    cd ekho-interview
    ```

## Branches

Each branch in this repository corresponds to a different part of the interview process. You will move from one branch to another as you progress further through the interview.

### Part 1: Debugging

Checkout the `interview-debugging` branch:

```bash
git checkout interview-debugging
```

In your code editor, navigate to file: ```interviews/web-app/src/pages/presentation/page-layouts/InterviewDebugging.js``` and run the following command in your terminal:

```bash
npm start
```

You should see a localhost webpage start with a blank screen. Please debug the issue.

### Part 2: Frontend Development

Checkout the `dev` branch:

```bash
git checkout dev
```

In your code editor, navigate to file: ```interviews/web-app/src/pages/presentation/page-layouts/InterviewFrontend.js``` and run the following command in your terminal:

```bash
npm start
```

You should see a localhost webpage start with a generic page. Next, open a new tab in your terminal and navigate to directory ```interviews/facit```. Run `npm i --legacy-peer-deps` and `npm start`. This should open a new page that you can play around with. Have the interviewer orient you on what is going on within this page.

Follow the instructions provided by the interviewer to create some frontend components!

### Part 3: Backend Development

Checkout the `interview-backend` branch:

```bash
git checkout interview-backend
```
