# Mocking timers

documentation [timer-mocks](https://jestjs.io/docs/timer-mocks)

Now we are going to see more advanced things, since sometimes we have a component where
we have a setTimeout(), setInterval(), clearTimeout(), clearInterval().
We need to know how to mock the timers to be able to use them
to be able to make the necessary tests supposing that we have a component
we are going to put the simplest example, we have a chronometer this one has
intervals and it goes down depending on where we assign it, in what time.
We can tell it to go from 0 to 1 minute -> it is going to increase every second.
or a timer that goes in reverse.

For example, if you are using your phone application, where we set the timer to show the alarm. We are going to realize that performing
unit tests of these components is not in the same way as we were doing it before.
We have to continue using jest to do mocking of those timers.
Imagine you have a timer of 5 seconds, your environment will collapse, eventually jest will launch a Timeout, like any other runner it has a time limit to execute the tests.

Enable Fake Timers
In the following example we enable fake timers by calling jest.useFakeTimers(). This is replacing the original implementation of setTimeout() and other timer functions. Timers can be restored to their normal behavior with jest.useRealTimers().

```js
timerGame.js;
function timerGame(callback) {
  console.log("Ready....go!");
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback && callback();
  }, 1000);
}

module.exports = timerGame;
```

this timer is going to be executed in a component or in any part of your javascript code,
as long as this certain amount of time passes, in this case it is 1sec -> 1000 ms.

Well as we would test that file, jest has a powerful tool called jest.useFake.
it is called jest.useFakeTimers(); -> what this function provides us is that in all this file where my unit test is, only here it is going to use false timers,
what we mean is that it is going to execute the timers, but in a different way it is not going to wait 2 to 3 minutes for a timer to finish, so we can check if the callbacks were
called, for example if we have a component that when a second passes sends to call the parent.

**tests**/timerGame-test.js

```js
jest.useFakeTimers(); //will use fake timers
jest.spyOn(global, "setTimeout");

test("waits 1 second before ending the game", () => {
  const timerGame = require("../timerGame");
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
```

- const timerGame = require('../timerGame'); -> we have the import of the file that we have
  above, which has a setTimeout
- timerGame(); -> then send it to call
- expect(setTimeout).toHaveBeenCalledTimes(1); -> the only thing it is going to test is that setTimeout has been called, setTimeout is basically the function that comes from window
  and the idea is that it has been called in only one occasion
- expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000); -> also that it has been called with a function that lasts 1 ms so it will work.

in the documentation below it describes us, you have to execute jest.useFakeTimers(); before executing each one of the test cases or otherwise it will not work, it will send you an error, then here in the file it does it in a global way or inside beforeEach before executing each one of the tests, which is cleaner so that you have clean timers in each test case.

let's look at another test case:

**tests**/timerGame-test.js

```js
jest.useFakeTimers();
test("calls the callback after 1 second", () => {
  const timerGame = require("../timerGame");
  const callback = jest.fn();

  timerGame(callback);

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.runAllTimers();

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
```

```js
const timerGame = require("../timerGame");
const callback = jest.fn();

timerGame(callback);
```

where we have a timerGame that has to be called, this callback has to be a jest.function -> a mocking function of jest that helps us to check if something has been called or not
has been called or not

expect(callback).not.toBeCalled(); -> then at this point we are going to place that it has not been called, so it has not been called before the matcher, it is a new matcher,
that we have not seen, until this point it has not been executed at least jest has not executed any timer, it is ignoring it.

Then when we execute -> jest.runAllTimers(); what is going to happen is that it is going to execute all the timers of that file and that moment we can already corroborate, that this has been called:

```js
// Now our callback should have been called!
expect(callback).toBeCalled();
expect(callback).toHaveBeenCalledTimes(1);
```

then we can use -> jest.runAllTimers(); or jest.useFakeTimers();

let's see another example of what happens when you have an infinite timer:

Let's imagine that we have a timer component or because some code is going to expire.
code is going to expire, you think that jest is going to last 15 min waiting, we are going to crash our
the memory is going to die and eventually jest is going to crash before that 15 minutes, so here we have a function that launches a function that
so here we have a function that launches an infinite timer, but since we are going to deal with infinite timers the idea is to
infinite timers the idea is that you only try to call this callback, but, nevertheless, that not all timers are called, otherwise it will collapse and it is useless to us

infiniteTimerGame.js

```js
function infiniteTimerGame(callback) {
  console.log("Ready....go!");

  setTimeout(() => {
    console.log("Time's up! 10 seconds before the next game starts...");
    callback && callback();

    // Schedule the next game in 10 seconds
    setTimeout(() => {
      infiniteTimerGame(callback);
    }, 10000);
  }, 1000);
}

module.exports = infiniteTimerGame;
```

**tests**/infiniteTimerGame-test.js

```js
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("infiniteTimerGame", () => {
  test("schedules a 10-second timer after 1 second", () => {
    const infiniteTimerGame = require("../infiniteTimerGame");
    const callback = jest.fn();

    infiniteTimerGame(callback);

    // At this point in time, there should have been a single call to
    // setTimeout to schedule the end of the game in 1 second.
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // Fast forward and exhaust only currently pending timers
    // (but not any new timers that get created during that process)
    jest.runOnlyPendingTimers();

    // At this point, our 1-second timer should have fired its callback
    expect(callback).toBeCalled();

    // And it should have created a new timer to start the game over in
    // 10 seconds
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });
});
```

right here we have the file that is importing the function, we are going to place its callback, to be able to make the expect below

```js
const infiniteTimerGame = require("../infiniteTimerGame");
const callback = jest.fn();

infiniteTimerGame(callback);
```

here setTimeout should have been called only once, because it should have already executed the timer, but the file is going to keep generating over and over again, until this
we are only corroborating that it was called only once, but we can no longer continue corroborating, however, the memory will start to run out, jest is going to drop
so we are going to get an error.

```js
// At this point in time, there should have been a single call to
// setTimeout to schedule the end of the game in 1 second.
expect(setTimeout).toHaveBeenCalledTimes(1);
expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
```

but what happens if further down I execute the function that also comes the jest gloabal object,
so what it means that our timer of 1 second, only that one is going to be executed, only the ones that are pending or scheduled there in the test runner and it is not going to allow to execute the ones that are pending or scheduled there in the test runner and it is not going to allow to execute the ones that are pending or scheduled there in the test runner.
will not allow to execute the rest that are Infinite timer.

It only executes this and no longer executes any timer, it kills it so to speak.

```js
jest.runOnlyPendingTimers();
```

then at this point we are going to corroborate that the callbak has been called, if in fact the callback has already been called then we can corroborate or verify that in fact this works, up to this point setTimeout must have already called in 2 occasions, because in 2 occasions, because we have a Timeout inside another Timeout we are going to check that we have 2:

```js
function infiniteTimerGame(callback) {
  console.log("Ready....go!");

  setTimeout(() => {
    console.log("Time's up! 10 seconds before the next game starts...");
    callback && callback();

    // Schedule the next game in 10 seconds
    setTimeout(() => {
      infiniteTimerGame(callback);
    }, 10000);
  }, 1000);
}

module.exp;
```

1- first, the one with the console.log is launched.
2- the second one is scheduled to be executed when it calls the timers that are pending, and this one will be called infinitely, because it
and this one is going to be called infinitely, because it comes and calls recursively.
recursively
3- infiniteTimerGame(callback); -> this is a recursive function, what you have to do is that jest executes the pending ones, otherwise this will fail.

```js
// And it should have created a new timer to start the game over in
// 10 seconds
expect(setTimeout).toHaveBeenCalledTimes(2);
expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
```

Up to this point setTimeout has already been called, setTimeout is from the window object, so there is no need to import it here.

a good practice is to clear all timers after each test case or even when the test is finished.
even when the test is finished

```js
timerGame.js;
function timerGame(callback) {
  console.log("Ready....go!");
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback && callback();
  }, 1000);
}

module.exports = timerGame;

__tests__ / timerGame - test.js;
jest.useFakeTimers();
it("calls the callback after 1 second via advanceTimersByTime", () => {
  const timerGame = require("../timerGame");
  const callback = jest.fn();

  timerGame(callback);

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.advanceTimersByTime(1000);

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
```

simply, using jest.clearAllTimers() so that they are not left around as
garbage in memory and that can cause us some particular memory leak, as well as if some timers are left if there are some pending timers, then it will clear them and it will not be executed
