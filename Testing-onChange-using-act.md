# Testing onChange-using-act

input let's check what is shown in the console

in this case the value changes if it is that the state changes, we go that comes onchange
we can see this property since it is a function, if we call it and we put the correct or corresponding values, then it will not send the result we expect.
correct values, or corresponding, then it is not going to send the result that we expect.
we are going to simulate that the user is actually typing because the oneChange is executed.
that is what happens when we write inside an input, in an internal way, then we can do exactly that and we can notice a behavior
do exactly that and we can notice some strange behavior

```js
it("The button should be enabled if the input has a non-empty value", () => {
  const form = component.root.findByType("form");
  const input = form.findByType("input");
  const button = form.findByType("button");

  console.log(button);
  expect(button.props.disable).toBeTruthy();
  expect(button.props.disable).toEqual("search-button null");

  input.props.onChange({ target: { value: { value: "birds" } });
});
```

{ target: { value: { value: "birds" } } this is the event that is normally triggered, so
let's save and you're going to see something unusual

we run our test and we get an error:

![2](/images/error-onchage.png)

the error explains that what happens is that when you're going to make a state change in a component
that is going to change for X or Y reason, it is going to come out an error because when you execute a function or something,
it makes a change in component in an internal way, for which it is necessary to use act

```js
act(() => {
  /*fire events that updates state*/
});
```

act is going to be used every time I change my component.
It is a function that has a callback, inside that callback it is necessary to execute that action that your
you want that it goes and it changes something of that component of asynchronous way or that it makes a setState
let's leave it like this, we are going to import the action that we are going to use it too much.

This statement we have to enclose it inside act

```js
input.props.onChange({ target: { value: "birds" } });
```

then we are going to place act and its respective callback, inside that callback is going to be the line
that we have just called from onChange, now if we have to test if the button has changed, because
if there is already text button it has to be disabled

```js
expect(button.props.disable).toBeFalsy();
expect(button.props.disable).toEqual("search-button active");
```

will change to .toBeFalsy() and "search-button active" since it has a valid value,
we execute and we see that we have more matcher

We verify in the UI, that the button is deactivated and if the user starts to write,
then it has to be shown, it is a very innocent error, but it is better to avoid it, sometimes the user gives a space and the
user gives a space and the button is enabled, it should not go to search for an empty query

# Validating onSubmit

for the moment we can check the value of the input but it's not necessary.
It is not necessary to test the value that one is showing you because it is a setter that is being done, the setet
that of react can fail but that is strange that it happens and it is not good practice to do it.

The last thing that we are going to corroborate is if the handleSubmit -> is being called with the
obSubmit, but to do this I am going to leave it somewhat incomplete, since when we finish
of making our first unit test,

we can access in a fast way to the properties of the form by means of props.

```js
it("The onSubmit should be called without a problem", () => {
  const form = component.root.findByType("form");
  form.props.onSubmit();
});
```

the form has 100% in its coverage lines we have covered each of the lines of code of this component, but there is going to be a 100% coverage left.
of this component, but this test case is going to be a little incomplete, so we are going to leave a
we are going to leave a flag of TODO to make it as solid as possible.

Translated with www.DeepL.com/Translator (free version)
