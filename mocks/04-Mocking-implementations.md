# Mocking implementations

we have already seen jest.fn() -> how powerful it is, this specific jest function that
helps us to corroborate with the help of matcher, if in fact the functions were called and return what we expect.
called and return what we expect, but what happens when we want to implement custom values in these functions?
implement in these functions values in a customized way, that's why we are going to see the mocking implementation.
to see the mocking implementation.

We refer to give a little more customization to what is jest.fn()

```js
const myMockFn = jest.fn((cb) => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true
```

as we can notice myMockFn -> is doing a callback, this callback is handling it
as a cb and I'm going to call the cb -> with this 2 arguments cb(null, true) we are
telling this function what it has to do or what it has to return, so we are doing the custom implementation.
we are doing the custom implementation, then when we send to call this function console.log(null, true)
to call this function console.log(val) -> it will be equal to true, because we are telling it here to be true.
we are telling it here to be true

Translated with www.DeepL.com/Translator (free version)

## mockFn.mockImplementation(fn)

Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself – the only difference is that the implementation will also be executed when the mock is called.

TIP
jest.fn(implementation) is a shorthand for jest.fn().mockImplementation(implementation).

```js
const mockFn = jest.fn((scalar) => 42 + scalar);

mockFn(0); // 42
mockFn(1); // 43

mockFn.mockImplementation((scalar) => 36 + scalar);

mockFn(2); // 38
mockFn(3); // 39
```

## mockFn.mockImplementationOnce(fn)

Accepts a function that will be used as an implementation of the mock for one call to the mocked function. Can be chained so that multiple function calls produce different results.

```js
const mockFn = jest
.fn()
.mockImplementationOnce(cb => cb(null, true))
.mockImplementationOnce(cb => cb(null, false));

mockFn((err, val) => console.log(val)); // true
mockFn((err, val) => console.log(val)); // false

When the mocked function runs out of implementations defined with .mockImplementationOnce(), it will execute the default implementation set with jest.fn(() => defaultValue) or .mockImplementation(() => defaultValue) if they were called:

const mockFn = jest
.fn(() => 'default')
.mockImplementationOnce(() => 'first call')
.mockImplementationOnce(() => 'second call');

mockFn(); // 'first call'
mockFn(); // 'second call'
mockFn(); // 'default'
mockFn(); // 'default'
```

what we are doing is that during the first call and the second call different arguments are executed, this is quite powerful and lets us do different types of
of matcher

```js
const mockFn = jest
  .fn()
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false));

mockFn((err, val) => console.log(val)); // true
mockFn((err, val) => console.log(val)); // false
```

means that during the first call it will return true and the second call it will return false

mockFn.mockName(name)
Accepts a string to use in test result output in place of 'jest.fn()' to indicate which mock function is being referenced.

For example:

```js
const mockFn = jest.fn().mockName("mockedFunction");

// mockFn();
expect(mockFn).toHaveBeenCalled();
```

Will result in this error:

expect(mockedFunction).toHaveBeenCalled()

Expected number of calls: >= 1
Received number of calls: 0

we can also change the name to the function since now it is not going to be called mockFn, now we are going to place a specific mocking that is called 'mockedFunction' we are going to wait if it was really called, this is going to throw an error because we want to call a function that does not exist.
we will wait if in fact it was called, this will throw us an error because we want to call a function that does not exist, we have mockName that will customize the name of the function, as this commented it will not work, it will tell us that -> expect(mockFn).toHaveBeenCalled(); but it was not called -> it means that here we change the name but in a more descriptive way

Translated with www.DeepL.com/Translator (free version)

## mockFn.mockReturnValue(value)

Accepts a value that will be returned whenever the mock function is called.

```js
const mock = jest.fn();

mock.mockReturnValue(42);
mock(); // 42

mock.mockReturnValue(43);
mock(); // 43
```

## mockFn.mockReturnValueOnce(value)

Accepts a value that will be returned for one call to the mock function. Can be chained so that successive calls to the mock function return different values. When there are no more mockReturnValueOnce values to use, calls will return a value specified by mockReturnValue.

```js
const mockFn = jest
  .fn()
  .mockReturnValue("default")
  .mockReturnValueOnce("first call")
  .mockReturnValueOnce("second call");

mockFn(); // 'first call'
mockFn(); // 'second call'
mockFn(); // 'default'
mockFn(); // 'default'
```

mockFn.mockResolvedValue(value)
Shorthand for:

```js
jest.fn().mockImplementation(() => Promise.resolve(value));
```

here is the example that we have to solve a promise that returns a value, the value you want, we are going to use it when we are our API call with axios, but now we apply the mockImplementation()

## mockFn.mockRejectedValue(value)

Shorthand for:

```js
jest.fn().mockImplementation(() => Promise.reject(value));
```
