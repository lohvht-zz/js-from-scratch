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


