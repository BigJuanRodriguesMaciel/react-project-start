# Utrip dashboard

## How to run:

#### First install project dependencies:

```
yarn
```

#### Run with:

```
yarn dev
```

The project runs on port 5173 by default.

## Best Pratices

General rules:

1. Follow standard conventions.
2. Keep it simple stupid. Simpler is always better. Reduce complexity as much as possible.
3. Boy scout rule. Leave the campground cleaner than you found it.
4. Always find root cause. Always look for the root cause of a problem.

Names rules:

1. Choose descriptive and unambiguous names.
2. Make meaningful distinction.
3. Use pronounceable names.
4. Use searchable names.
5. Replace magic numbers with named constants.
6. Avoid encodings. Don't append prefixes or type information.

Functions rules:

1. Small.
2. Do one thing.
3. Use descriptive names.
4. Prefer fewer arguments.
5. Have no side effects.
6. Don't use flag arguments. Split method into several independent methods that can be called from the client without the flag.

Tests:

1. One assert per test.
2. Readable.
3. Fast.
4. Independent.
5. Repeatable.

These rules were taken from the book: Clean Code by Robert Cecil Martin.

## Imports

Import order: Third parties lib -> project components or hooks -> services -> constants -> styles

## Branch names

Lowecase
Branch names use kebab-case pattern.

## Component names

Captilized and camel case
Components and folders has the same name, don't use "index" in component name. If you have too many tabs opened, the name are very confuse.

## Type names

Captilized and camelCase

## Service names

Captilized and camelCase

## Page names

Lowercase in folders
index.ts because next make routes based on folder names
Page name captilized and camelCase
export { default } to export your page name

## Commit lint

The project use convetional commit messages and branch names. Husky runs pre-commit hook to prevent wrong commit messages and ESLint rules in every commit.

| Type     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| build    | Changes that affect the build system or external dependencies |
| ci       | Changes to our CI configuration files and scripts             |
| docs     | Documentation only changes                                    |
| feat     | Documentation only changes                                    |
| fix      | A bug fix                                                     |
| perf     | A code change that improves performance                       |
| refactor | A code change that neither fixes a bug or adds a feature      |
| style    | Changes that do not affect the meaning of the code            |
| test     | Adding missing tests or correcting existing tests             |

## Authentication

https://github.com/vvo/iron-session

## Styles

Styles are written using BEM methodology:  
https://getbem.com/introduction/

Styles are imported in the same father's folder using module

## Paths

All paths has absolute path setup, you can simplify your imports using @folder
`import {Button} from '@components'`
