# Mocking of functions

In order for us to be able to do testing of the functions if they are called, if they
return a specific value and those functions are arrow functions, for example,
we can't check it, this function's constructor is an object, an empty object.
empty so we can't do anything because this function returns nothing.

That's why jest provides us with mocking functions

```js
const props = {
  history: {},
  handleSubmit: () => {}, //TODO
};
```

then we can't do anything because this function doesn't return anything, that's why
that jest provides us with mocking functions with a constructor that is based on a dummy constructor
constructor -> we refer to mocking.

This constructor brings functions or values that let us corroborate through expect, if that function was called and what it was called with.
function was called and what it was called with -> jest.function

documentation

[mock-function-ap](https://jestjs.io/docs/mock-function-api/#jestfnimplementation)

```js
const mockAdd = jest.fn();
```

this function jest.fn() when we declare it is the same as making a function
empty function -> () => {}, but this function can be tested through the expect matchers
and see if it was actually called with the specific matcher of **toHaveBeenCalled** is a
matcher that tells us, if this function was actually called, so the value is 1
what we mean is that it was called only once.

```js
expect(mockAdd).toHaveBeenCalled();
```

not only we can do that matcher, we can do more matcher

```js
const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled(); //true

//with a mock implementation;
const returnsTrue = jest.fn(() => true);
console.log();
```

returnsTrue(); -> when this function is called it returns true, because it is a custom implementation, you can put the
it's a custom implementation, you can put the value of what you actually want this to return, so
you want this to return, so it is powerful, to use jest.fn(); helps me to check if the functions
to corroborate if the functions have been called in time and form.

if you call this mockFn function, which we store in a constant it will be true
this result:

expect(mockFn).toHaveBeenCalled();//true

let's go to practice

```js
const props = {
  history: {},
  handleSubmit: () => {}, //TODO.
};
```

in my code I have the habdleSubmit -> let's replace with jest.fn();
HanldeSubmit is going to be equal jest.fn();
Then in last test case we have below

we have: "The onSubmit should be called without problem".
so when the user submits this button or submits this form
it is necessary to call to the function and we can already test it, since onSubmit, is
inside the properties of this object in this file.

```js
it("The onSubmit should be called without any problem", () => {
  const form = component.root.findByType("form");
  form.props.onSubmit();

  console.log(props.handleSubmit);
  expect(props.handleSubmit).toHaveBeenCalled();
  expect(props.handleSubmit).toHaveBeenCalledTimes();
});
```

Let's see which properties handleSubmit has

PASS src/**test**/Form.test.js
● Console

    console.log
      [Function: mockConstructor] {
        _isMockFunction: true,
        getMockImplementation: [Function (anonymous)],
        mock: [Getter/Setter],
        mockClear: [Function (anonymous)],
        mockReset: [Function (anonymous)],
        mockRestore: [Function (anonymous)],
        mockReturnValueOnce: [Function (anonymous)],
        mockResolvedValueOnce: [Function (anonymous)],
        mockRejectedValueOnce: [Function (anonymous)],
        mockReturnValue: [Function (anonymous)],
        mockResolvedValue: [Function (anonymous)],
        mockRejectedValue: [Function (anonymous)],
        mockImplementationOnce: [Function (anonymous)],
        mockImplementation: [Function (anonymous)],
        mockReturnThis: [Function (anonymous)],
        mockName: [Function (anonymous)],
        getMockName: [Function (anonymous)], getMockName: [Function (anonymous)].
      }

It is a function that has a mock constructor, a fictitious mock, the function
is derived from that constructor so we can access all those values,
that come inside that constructor.

Let's do another matcher. let's go to the documentation
[tohavebeencalled](https://jestjs.io/docs/expect#tohavebeencalled)

```js
expect(props.handleSubmit).toHaveBeenCalledTimes(2);
```

This is to check how many times the function has been called, i.e., it receives an argument which is a number, how many times the function has been called.
argument that is a number, how many times it has been called 1 or 2 times, for example,
if in my code I put 2, it will throw an error, because it has not been 2 times,
in fact it will tell me:

● <Form /> ' The onSubmit should be called without problem.

    expect(jest.fn()).toHaveBeenCalledTimes(expected)

    Expected number of calls: 2
    Received number of calls: 1

It is obvious because we send the submit in only one occasion, with a 1 this would be enough.
There is another matcher

## .toHaveBeenCalledWith(arg1, arg2, ...)

that serves me to corroborate with which arguments the function was called, what if
the function was called with arguments that should not be:

```js
expect(props.handleSubmit).toHaveBeenCalledWith(2);
```

I am going to see the arguments to my form component, we send to call handleSubmit
with 3 arguments, the idea is that we send to call it with the history, that is empty
because we are sending it by property, the searchEntry and the event. The event
event if it is necessary to trace it a little by that it is an event that can bring a lot of
information

```js
<form
  className="search-form"
  onSubmit={(e) => handleSubmit(e, history, searchEntry)}
></form>
```

```js
expect(props.handleSubmit).toHaveBeenCalledWith(undefined, props.history, "");
```

because at the empty end, due to the fact that we have in our test a beforEach, where
we are saying before every test give me a new instance, if I didn't have a
beforeEach then in the empty string it would be aves, because a first instance
value is empty, and the first argument undefined, because the argument,
does not really exist. Ready is working correctly.

```js
it("The onSubmit should be called without problem", () => {
  const form = component.root.findByType("form");
  form.props.onSubmit();

  console.log(props.handleSubmit);
  expect(props.handleSubmit).toHaveBeenCalled();
  expect(props.handleSubmit).toHaveBeenCalledTimes(1);
  expect(props.handleSubmit).toHaveBeenCalledWith(undefined, props.history, "");
});
```

Let's replace the axios mock function by replacing with:

```js
export default {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
};
```

don't use traditional arrow functions but use jest.fn functions to do a
matcher and check if it is working as expected
