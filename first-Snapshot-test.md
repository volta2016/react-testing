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

We run once again our command **yarn run test**.

now we can see that everything is running successfully, thanks to the instance that we can access
through root we are going to be able to search the components, based on each of the elements that are in the component.
of the elements that are in the component.

1. If it renders correctly, the component has to be defined.
2. That the component.toJSON() that the method so that it converts it to me in the form of object
   it is going to bring a result and that result brings a point type, if it is form it means
   that this rendering correctly a form

```js
describe("<Form />", () => {
  beforeEach(() => {
    component = create(<Form {...props} />);
  });

  it("Render correctly", () => {
    expect(component).toBeDefined();
    expect(component.toJSON().type).toEqual("form");

    console.log(component.toJSON());
  });
});
```

![toJSON](/images/toJSON.png)

it returns me the parent component and everything inside that component
that has its respective properties, then I am accessing here that is of type form, that is another expect
of the type form, that is another expect that you can begin to use.

3. We expect that the instance of the component that is mounted .root that is to access to the
   instance of the component and to be able to occupy the selectors of react test render, to be able to
   to go and to look for the components that components -> the svg, the input the bottom
   findbyType("") receives a parameter which is a string, this parameter can be a string
   or the same component in case it is a component of our own, for which I am going to put input.
   I am going to put input. What it is going to make inside the instance of the component, go
   and I looked for an input that this for there descending of form and it tells me if it exists or not
   if it exists it is going to bring me the result that is an object

let's see if it exists we can see it in element type

```js
describe("<Form />", () => {
  beforeEach(() => {
    component = create(<Form {...props} />);
  });

  it("Render correctly", () => {
    expect(component).toBeDefined();
    expect(component.toJSON().type).toEqual("form");

    // console.log(component.toJSON());
    expect(component.root.findByType("input")).toBeDefined();
    expect(component.root.findByType("button")).toBeDefined();
    expect(component.root.findByType("svg")).toBeDefined();

    console.log(component.root.findByType("input"));
  });
});
```

what we are asking it to look for inside the instance of the
component if in fact exists an input a button and a svg -> if it does exist
is rendering correctly

PASS src/**test**/Form.test.js

  <Form />
    ✓ Renders correctly (21ms)

Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total
Snapshots: 0 total
Time: 3.474s
Ran all test suites related to changed files.

let's go first to my package.json to see the coverage although we know that it is very easy to cover.
easy to cover, let's add inside the script:

`````bash
"test": "react-scripts test --collectCoverage",
```

to see exactly the coverage of the folder we are in.
let's make coverage more precise

````bash
yarn run test test src/__tests__
```

we now have a coverage of:

13 |
Form.js | 66.67 | 0 | 33.33 | 66.67 | 0 | 33.33 | 66.67 | 0 | 33.33 | 66.67 | 0 | 33.33 | 66.67 | 0

`````
