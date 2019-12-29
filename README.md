# 🥳 PLACEHOLDER

DESCRIPTION OF THE LAMBDA

# .Env

```
DB_URI=
```

# How to run locally

First install all the modules
```
npm run install
```

then run the code

```
npm run locally
```

# How to fake a request

To run the Lambda locally you can fake a a request by using two files:

- lambda-payloads.json
- lambda-context.json

### lambda-payloads.json

This file is the fake payload that will be under the `event` variable name. Here you can put anything, from fake AWS resources messages to your own custom messages.

### lambda-context.json

This file normally is not necessary but since we are connecting to a regular SQL DB, we need to fake the `context` variable to mimic the environment in AWS.
