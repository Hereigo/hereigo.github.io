
# TESTS:

```sh

npm init -y

npm i mocha chai -D # Devs only
```

# Create launch.json (for Node.js) in VSC.
# and configure it:

```json
{
    "...": "...",
    "program": "${workspaceFolder}\\node_gen_4\\node_modules\\mocha\\bin\\_mocha",
    "args": [
        "-u",
        "bdd", // set to bdd, not to tdd
        "--timeout",
        "999999",
        "--colors",
        "${workspaceFolder}\\node_gen_4\\tests\\**\\*.js"
    ],
    "internalConsoleOptions": "openOnSessionStart"
}
```
