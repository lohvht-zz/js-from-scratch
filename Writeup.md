# Installation steps
1) Upon cloning the app, type 'yarn install' to install all the dependencies

# Technologies Used
Yarn - As a replacement for NPM, package manager and also used to run scripts as well
Babel and Babel CLI - Builds and compiles ES6 into ES5 files
	Babel Node - Replaces call to node, used in dev environment
Babel-preset-env - Install a babel preset package called env, contains config for the most recent ECMAscript features supported
ESLint - Linter for ES6 code
	We are using configuration settings and dependencies from AirBnb
	(es-config-airbnb, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react)
Compat - Plugin for ESLint to warn if Javascript API is not available with browsers
Flow - static type checker by Facebook, detects inconsistent types in code
	flow-bin - to run flow in scripts
	babel-preset-flow - preset for Babel to understand Flow
	eslint-plugin-flowtype - ESLint plugin to lint Flow annotations
Husky: Git hooks, runs test on precommit and push
    if pushing right after commit, can type "git push --no-verify"
Express
compression - Express Middleware to activate Gzip compression on server
Nodemon - Used on dev mode, automatically restarts node server when file changes in watched directory
PM2 - Used in Production! Process manager for node, keeps process alive in production, features to manage and monitor
rimraf - Used for production! package to delete files, cross platform support
cross-env - cross-environment syntax to make passing in variables the same from Windows and *nix systems
Webpack - module bundler, processes all the files and assembles them into a bundle.js to send to client to run
    Has a webpack dev server!
React/ReactDOM
Hot Module Replacement (using react-hot-loader@next)
Redux/Redux-actions: Redux helps to keep predictable container state for javascript apps, redux-actions is used to reduce boilerplate code for redux actions


React/ReactDOM

Hot Module Replacement (using react-hot-loader@next)

# Tests
To write a test file, save the files as <fileName>.test.js


Flow suppress comment ==> //flow-disable-next-line
Add flow annotation ==> // @flow
ESLint allow comments ==> /* eslint-disable no-console */


# END NOTE
- Added something to ignore warnings for eslint-plugin-jsx-a11y as there might be a bug with the dependency for Flow in .flowconfig
    - Exact like would be under the [ignore]