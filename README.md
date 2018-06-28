![nem token sale](/readme-images/nemtokensale.png?raw=true "NEM Token Sale")

# NEM Coinbase Token Sale Website

This repo provides all of the code needed to operate a token sale on the [NEM](https://nem.io) blockchain. 

This code powered the [Cache Token Sale](https://getcache.io).

The code will do the following:

 1. Send your NEM Token (Mosaic) to purchasers
 2. Let purchasers buy with XEM
 3. Let purchasers buy through Coinbase Commerce
 4. Process KYC for XEM and manual crypto payments


## Getting Started

1.  Clone Repo
2.  `npm install -g @angular/cli`
4.  `npm install`

## Start API

You must have the API project up and running with seed data in order to start developing the client.

[NEM Coinbase Token Sale API](https://github.com/blockstart/nem-coinbase-token-sale-api)

With the API running, you will need to enter an initial value for funds raised.
Using an app like [Paw](https://paw.cloud/) make a request:


```
PUT http://localhost:3005/localdev/v1/info/update-usd

body
{
  "currentRaised": 116087.49,
  "nextMilestone": 500000
}
```

The `nextMilestone` is used by the front end to show the milestone that is being worked against.

`currentRaised` is the total amount raised. We manually update this because there are too many
things to account for to calculate amount raised in an automated fashion (bounties, airdrops, etc)

## Local Dev

1.  To run the website, run `npm start` for a local dev instance. Navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

## Server Builds

Run `ng run prod` to build the project for proudction. The build artifacts will be stored in the `dist/` directory.

Run `ng run dev` for dev.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## License

The logos and images in this repository are NOT open source. All logos and images have various copyright ownership and must be removed prior to launching.

Aside from logos and images, the code is under the MIT license - use it as you see fit. We are not responsible for any bugs or issues in this code. Please review before publishing.