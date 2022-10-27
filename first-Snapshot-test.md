# First Snapshot test

First of all we are going to see a component that is form, for that we have to analyze what it does, what is the expected output.
what it does what is the expected output.

1. This is going to be the first component that we are going to test, that we need to
   to test each one of the units of our project

![oganize-your-test](/images/form.png)

- It is necessary to check what this component receives and what it does

Form -> is a functional component that receives the 2 properties handleSubmit and history
also it has a state value, when you are writing unit tests it is recommended not to be testing the state of the
it is recommended not to be testing the state of the component, but if that value has an impact on the
in something to show the component supposing that we have a flag that if it is true
something will be shown, otherwise something else will be shown, then we must test it, but
it is not always necessary to test the value of the state.

```js
const updateSearchInput = (e) => {
  setSearchEntry(e.target.value);
};
```

when I change the value of input with the onChange -> comes and sets it to the value of the local state
of the component, then everything is inside a form tag, also it shows a button
and a svg that an icon or illustration, then said that given a small review, of what it does the first component to which we are going to
first component to which we are going to write tests, we are going to begin to write its respective unit test, so we
respective unit test, for which we are going to follow as it is recommended in the jest documentation.
of jest.

We execute our test and it says that our file at least has to execute a test

FAIL src/**test**/form.test.js
● Test suite failed to run

    Your test suite must contain at least one test.

## install

All react projects come preconfigured with a testing library.

now let's install react test render

```bash
yarn add react-test-renderer
```

That's more than enough since the testing library is written on top of react.
test renderer so when you want to use testing library it will be too familiar.
familiar.

Of course it has other helpers or utilities.

The first thing we have to do is to import the component.

import Form from "../components/Form";

Let's remember the structure of a unit test. Let's write our first test case
test case, which is the starting point and that it actually shows what you expect.

That a button is shown, that the inputs are shown, that the svg is shown.
With that we are going to start.

```js
let component;

describe("<Form />", () => {
  before(() => {});
  it("Render correctly", () => {});
});
```

here we are going to start using our first lifecycle within a unit test
that we want to call i.e. the lifecycle methods of a unit test, what I need is that in each one of the
I need is that in each of the tests.

Before each one of these test cases, what we are going to do is to execute or to create a new
instance, that is to say to be assembling the component. This is a good practice so that in each one of the cases you will
of the cases you have a totally new instance because probably you have already modified it in some other case.
in some other case.

Component is going to be the same to mount the component to mount it inside a fictitious dom, we are going to pass inside create the component Form
to pass inside create the Form component, then we apply the spread operator and we place the
props. We have to declare them above, since the properties are read only.
read only.

```js
const props = {
  history: {},
  handleSubmit: () => {},
};
```

This is going to be modified later, because we still don't see how to mock the functions,
therefore there is a test case that we are not going to complete yet, but we are going to complete it as the course progresses.
We are going to complete it as the course progresses, we will complement it with new knowledge.

Within each one of the test cases, I can already put the value of clean component
just assembled.

FAIL src/**test**/Form.test.js

  <Form />
    ✕ Renders correctly (22ms).

● <Form /> ' Renders correctly

    ReferenceError: React is not defined

      11 | describe("<Form />", () => {
      12 | beforeEach(() => {
    > 13 | component = create(<Form {...props} />);
         | ^
      14 | });
      15 |
      16 | it("Render correctly", () => {

      at Object.<anonymous> (src/__test__/Form.test.js:13:24)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)

console.log src/**test**/Form.test.js:17
undefined

We have to undefined -> we have to mount react

Translated with www.DeepL.com/Translator (free version)
