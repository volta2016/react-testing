# Life cycle of a unit test

As each component has its life cycle, if we talk about or we go back to the class
component which is where everything originated from, each component had its own life cycle methods.
life cycle methods, then came the update of the hooks and this changed and became a
change and step to be with useEffect is the hook that allows us to update what we need when certain values change.
we need when certain values change.

So if it is necessary a life cycle in case our unit tests need to be updated in each test case
in each test case we need a new instance of that component.

Continuing with our unit tests in line 8 in line 14 and in line
21 we use exactly the same constant, we can use it in a global way or inside a
describe and it's going to work the same way at the end of the day it's JS we are optimizing
memory, we are not making declarations that are only of different scope
or different block so we are going to optimize this.

We are also going to know the life cycle of a unit test,
let's do the first optimization:

we upload component and header globally, the component is assembled only once and not in each case.
only once and not in each test case, what was happening was that in each test case we were mounting
in each test case we were mounting the component and it is a waste of memory,
but nevertheless in many occasions it is unnecessary, this case it is not necessary to do it, because we do not need to make a change of property to
we do not need to make a change of property to update a component.

We see that by mounting the component our tests pass without any problem.

If a life cycle is necessary, in case that our unit tests, each instance of tests we need a new instance of
of tests we need a new instance of that component, which is what we were doing at the beginning, most likely in each test case we will
in the beginning, very probably in each case this complicated that you need it
that is assembled in each of the test cases, each of the "it", but it is not necessary sometimes to be declaring
it is not necessary sometimes to be declaring something over and over again for that there are
the different test cases that we are going to see.

[repeating-setup](https://jestjs.io/docs/setup-teardown#repeating-setup)

These are the lifeCycles that work similar to the hooks, it is basically a component and receives its callback.
a component and receives its callback, this callback is for when they pass the different test cases depending on the name
cases of tests depending on the name and it is not necessary to import them either, they are previously
already imported in your project.

beforeEach is going to be the method that is going to be executed or make a call every time a test case is executed or every time a test case is executed.
a test case or each time that each of the it is executed.

```js
beforeEach(() => {
  initializeCityDatabase();
});
```

Then, if I place work for before each of the tests -> it would be specifically
in beforeEach() is executed in this case:

**initializeCityDatabase();** in case you want to load a database.
fake or not real and it is going to be before each of the "it" test cases, the second is:

```js
afterEach(() => {
  clearCityDatabase();
});
```

This is called after each of the test cases are executed, each of the `it`s, what this method does is **clearCityDatabase((; }; **>.
it", what this method does is **clearCityDatabase();** clear the database in case there has been any modification.
there has been any modification.

let's see all that encompasses all the test cases:

```js
beforeAll(() => {
  return initializeCityDatabase();
});
```

**beforeAll()** is sent to be called before all test cases, in this case they can be defined as test or as it either
be defined as test or as it either one of the 2, in this case if we have it as it before
as it before all of them are executed, we are going to send to call an instance.

```js
afterAll(() => {
  return clearCityDatabase();
});
```

**afterAll()** after all the test instances are finished, which is going to happen, this
is how the jest lifecycle methods work in a unit test file,
those four are the most used, in this case which one applies for us, I believe that I need the instance in each one of them.
that I need the instance in each one of these components, but I don't need a clean instance.
clean, with that same one we can do it because I do not need that it changes some property,

then I am going to use it before placing the test cases, it makes more sense the structure that we are proposing
that we propose that is to place first the cycles of lives and then all the test cases.
of test, that we are going to make that **beforeAll()** that before all the tests send me to call
and to mount these components, but this is going to be in a global way then it is going to be let component
if not otherwise it is only going to be inside this block and it is not going to exist in these blocks, also
let header in a first instance are undefined and once they are sent to call, I can use it in all test cases.
use it in all the test cases
