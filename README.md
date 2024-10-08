# React Sample App 2024

React Sample Application built with 2024 technologies.

## Application purpose

React sample application purpose is to help bootstrap new React projects in a simple and fast way. This application can also be considered a boilerplate application with all the preferred development configurations, folder structure and tools in place and ready to start coding.

Please, bear in mind that this application is always evolving and new tools may be added along the way.

## Application Tech Stack

- `React` framework (with Typescript) for the overall application development;
- `Typescript` coding language;

## Application Support and Tools

- `Vite` to bundle the application, serve it in development mode and ensure HMR during development;
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Application Code Quality

- `ESLint` for code linting;

## Application Testing tools

- `Vitest` javascript testing framework;
- `React Testing Library` testing framework for working with React components;

## Application scripts

### Installation and application bootstrap

From the project root folder, please execute the following commands in a terminal window:

```bash
# install the application dependencies
npm i

# start the application in development mode
npm run dev

# build a version of the application for distribution
npm run build

# preview the built version of the application for distribution
npm run preview

# clean project dependencies before pushing code
npm run clean

# reset project installation and perform a fresh install
npm run nuke
```

### Code Quality

```bash
# run ESLint
npm run lint

# run ESLint and fix all automatically fixable problems
npm run lint:fix

# run all the necessary commands before a code commit
npm run pre-commit
```

### Testing

```bash
# run the application unit tests
npm run test

# run the application unit tests in file watch mode
npm run test:watch

# run the application unit tests and present a code coverage report
npm run test:coverage
```
