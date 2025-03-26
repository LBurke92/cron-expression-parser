# cron-expression-parser

A Node.js application which parses a cron string

To execute this file, you will need to be able to run node.js from your machine.

To install node.js either download it directly from the [official site](https://nodejs.org/en/download) or the preffered method is using `nvm` to control which version of node you want to run at any time on your device. Installation instructions can be found [here](https://github.com/nvm-sh/nvm).

Note: Application was built using node v20.12.1, but this does not have to be the same for the user, as long as using v18.0 or above. 

Once node is installed run 

```sh
npm install
```

You can then execute the application with the example code below or altering the cron string as you like (ensure you are in the correct directory):

```sh
node index.js "*/15 0 1,15 * 1-5 /usr/bin/find"
```
OR
```sh
npm run cron-parser "*/15 0 1,15 * 1-5 /usr/bin/find"
```