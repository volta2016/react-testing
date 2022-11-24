## jest expect

## expect();

It is a function that helps us to corroborate each of the test cases, that's why the name in English
expect, we are going to expect something and we are going to validate it. We are going to place the value of a component of any element that we are going to inspecionar.
element that we are going to inspecionar or even the value that a function returns

- it is not necessary to make an import of expect, since it comes auto imported in a global way.
  global
- as expect is a function it comes with an argument "expect();" the argument is the value that we are going to test, we are going to pass it the value that we are going to test.
  we are going to test, we are going to pass it a function that returns the sum of 2 numbers, we pass it here, it executes and
  we pass it here, it executes it and evaluates it.

## matcher();

The matcher is included inside this function. It will help us to buy the value
returned with the correct one.

Imagine expect() as a function that when you call it returns an object.
has many keys, which are all the matchers for us to validate that it is working,
that matchers will help us to corroborate what just happened with the argument of the function
expect() function argument, but by itself it will not work.

For example here we have a matcher that is called toEqual(5); as the translation in english
is equal to 5, the matcher also receives an argument in some occasions depending on the type of the matcher in this case to toEqual(5).
of matcher in this case toEqual(5); we pass an and we corroborate that what we have just passed to it
in to function is worth 5 this is placed in the test cases jest executes it and if this this is with
check is that it passed correctly

```js
yourFunction() {
  return 5;
}

expect(tuFunction()).toEqual(5);
```

Most used matchers

- toBeDefined();
  what it is going to evaluate is that in the expect the result is defined, it checks a value that is not
  defined

- toBeUndefined();
  if we have a value that is undefined, we are going to evaluate it with toBeUndefined, the first 2 do not take argument, but that do not take argument.
  2 do not take argument, but it is not necessary to validate anything, the matcher already does it by itself.

- toEqual(value);
- toBe();
- toBeIntanceOf();
  when you want to corroborate the instance of something, for example if your function returns an object
  you have to validate if it is an instance of object, otherwise if it is an array toBeIntanceOf()
  array

- toBeTruthy();
  with this validates if the result is true either 1 or true

- toBeGreatherThan();
  the result will validate if the result that comes from the argument is higher
  the result of expect() is greater than toBeGreatherThan();

- toHaveLength();
  this is very useful when we are working with arrays, supposing that we are going to add an array to a function.
  function we are going to add a new element to the array, if it was of size 5 and we add a new element we
  we want it to be of size 6 in logitude, the value that we pass as argument is what we validate
  with what is inside the expect()
