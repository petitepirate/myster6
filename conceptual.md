## Conceptual Exercise

Answer the following questions below:

#### What are some ways of managing asynchronous code in JavaScript?
* Using Async Functions (Async / Await)
* Promises
* Callback functions

#### What is a Promise?
* an object that may produce a single value sometime in the future.  Can return a resolved value or error/reason its not resolved

#### What are the differences between an async function and a regular function?
* The only difference between the two functions is that asyncFn is declared with the async keyword. This means that Javascript will make sure that the asnycFn will return with a Promise (either resolved or rejected) even if an error occured in it  
* On a lower level, regular functions block the event loop, but async functions don't until you await them.
#### What is the difference between Node.js and Express.js?
* Node.js is a platform for building applications which are server-side event-driven and made using JavaScript.
* Express.js is a framework based on Node.js for which is used for building web-application.

#### What is the error-first callback pattern?
* The error-first pattern consists of executing a function when the asynchronous operation ends (such as an incoming AJAX response) which takes an error as the first argument

#### What is middleware?
* Code that runs in the middle of the request / response cycle.

#### What does the `next` function do?
* Tells Express to continue on to the next route

#### What does `RETURNING` do in SQL? When would you use it?
*Allows you to retrieve values of columns and expressions that were modified by an insert, delete, or update so you don't have to run a SELECT statement to get the new values.

#### What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
* Promise.all could be used to run/initiate the requests at the same time instead of one after another.
* The URL base could be pulled out into a variable.
* No error handleing - add a try/catch.
* Everything is hardcoded.  This could be changed with an array of names and a loop.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
