...

npm init iy

npm init @eslint/config

... configuring wizard ...

modify - .eslintrc.json :

```json
{
    "root": true, // this Proj is Root - not search in Parent dirs
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended" //, "prettier", etc.
    ],
    "parserOptions": {
        "ecmaVersion": 12, // "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-console": "error"
    }
}
```

# ESLint VSC extention - will highlights errors in code.

add to Package.json:

```json
{
    "lint:check": "eslint .",
    "lint:fix": "eslint --fix .",
    "format:check": "prettier --check .",
    "format:write": "prettier --write ."
}
```
then: 

npm run lint:check 
npm run lint:fix
... 