### Installation

- ``` yarn install ``` to install all the dependencies
- ``` yarn dev ``` to start the server
- ``` yarn test ``` to run tests

### What it does

It takes an array of transactions and calculate balances of each user. It can be thought as:

Input:``` [{user_id: string, currency: 'USD' | 'EUR' | 'GBP', amount: string, timestamp: string}]```
Output: ``` [{user_id: string, USD?:string, EUR?: string, GBP?:string , lastActivity: string}] ```
