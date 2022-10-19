# Types of frontend testing

- Unit testing
- Integration testing
- E2E testing

## Unit tests

Applied to the smallest parts of a software, i.e. each component to ensure that it works correctly.
ensure that it works correctly. Unit testing is based on that testing
each unit separately not at the same time, you can't write a unit test to involve 10 components, they can be linked, but they can be
10 components, they can be linked, but you can't test a complete flow by implementing
unit testing

- re usable component

That's why there are integration tests

## Integration testing

It is a logical extension of unit testing. It is used to verify the functionality and security
of the components that have been integrated.

![2](/images/integration-testing.png)

Integration testing is that type of testing, which takes 2 components and sees how they work together.
their integrated operation, hence the name integration. If we have 6 components we have to
how unit A works with unit B, this is a type of test a little higher than the unit tests.
than unit testing.

## E2E tests

End to end tests. They are in charge of corroborating the start to end behavior of your software making sure it works the way it should.
software making sure that it works as expected. That is to say that all the grouped pieces
work correctly.

These will be in charge of checking complete flows of your application from start to finish, if for example you have an application that is going to be
for example you have an application that is going to be a bank transfer we are going to check that from the moment
that the user enters his card until the transaction is finished that all this flow, all the screens that involve it
all the screens that involve it work correctly as expected, you don't expect the user to see an error.
that the user sees an error, let's check that the code that we have written is placed in a testing environment that is not
testing environment that is not a real production environment works, we are automating this process and of course we are corroborating this
this process and of course we are corroborating that it works, this kind of end to end testing is expensive so it requires a lot of
are expensive that's why they require extra knowledge than unit testing and if they take a little bit more time to write.
more time to write them.
