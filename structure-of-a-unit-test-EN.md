# Structure of a unit test

Our App.test.js file we are going to start it from 0 so we erase
its content. Since it's predefined with testing library for the moment
we are going to use **react test render**.

We are going to import:

```js
import { render } from "react-test-render";
```

it comes packed inside create react app, you don't see it inside package.json
but if we check in the app we will see that package over there

`````bash
npm run test
```

Install important

````bash
yarn add --dev react-test-renderer.
```

what comes basically is the coverage, that we already showed in the previous video, besides
of all these options that we can place, we are in watch mode

to what we refer is that if I apply a change inside my file, the tests
are going to run by itself again,

now it is going to mark an error

![first-error](./images/first-error.png)

if your test file does not contain any unit tests or any test cases, an error will be raised
it will throw an error, which is the one we are throwing here.

Each file or each test file must have at least one unit test, an empty test file will
file is going to mark an error, so to avoid the error, we must write the structure of a unit test with its respective test cases.
unit test with its respective test cases.

We are going to define this unit test with the structure of describe() as well as expect().
same expect() works in the same way it is injected globally by the test
runer which is jest it is not necessary to import it from somewhere else.

This is a function that receives 2 arguments:

- first argument is a string as we are going to write our unit test, good practice is to call it with the name of the unit test.
  practice is to call it with the name of the component, either you describe it or you put the component tag.
  you put the tag of the component
- as second argument it receives a callback, which is a function that can be a traditional function or it can be an arrow function.
  function or it can be an arrow function

therefore a decribe can have tests or test cases, let's use an arrow function to have all the test cases.
an arrow function to have all the test cases.

```js
describe("<App />", () => {});
```

if I save I will still get the error, this is the base structure of a unit test.
unit.

The first test case that we can do is to mount or render
correctly the component

## it();

The first argument is a string, the second argument is a function
arrow

```js
it("", () => {});
```

just inside it is going to pass all the work of all the expect and all the validations
that we have to do with their respective matcher to validate if it is actually
it is executing correctly

````bash

  <App />
    ✓ render correctly (2ms)

----------|----------|----------|----------|----------|-------------------|
File | % Stmts | % Branch | % Branch | % Funcs | % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files | Unknown | Unknown | Unknown | Unknown | Unknown | Unknown | Unknown |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total
Snapshots: 0 total
Time: 1.612s
```

here we have that the test has passed, but we don't have any valid test cases,
it's passing but we're going to notice that the test case is still not covering with something,
% Stmts 0 we don't have any stament that is executing yet

but we already have the body of a unit test

```js
describe("<App />", () => {
  it("render successfully", () => {});
});
```

you have to familiarize yourself with it, not memorize it but know what it does, inside describe we have a callback
of describe we have a callback that is going to have all the test cases, that we can have 1 to ene test cases.
up to ene test cases. **This is the starting point, the first test is that it is mounted or rendered correctly.
or render correctly.

The difference is that the render method is created inside react test render,
then we must import our component. Then we are going to put the component as if we were calling it inside another parent component.
inside another parent component, what it is going to do is that it is going to mount the parent component,
but as you can see it is simply mounting it is executing it. But, however,
we are not using expect(); of nothing, in fact I already changed the stament change to 100%.
the whole coverage report, which is quite nice, but nevertheless we still don't know what it is
we still don't know what's going on here.

```js
expect(component).toBeDefine();
```

toBeDefine(); -> doesn't need any parameter or argument to function
`````
