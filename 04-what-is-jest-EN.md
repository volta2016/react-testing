# What is Jest

It is a testing framework created in javascript that can be used in projects that
use:

- Babel
- TypeScript
- React JS
- Node JS
- Angular
- Vue

This framework was created by the facebook engineering team.

# What Jest brings us

- Zero config
- SnapShots (it is a copy of your component from the tree of your component, that you save it in a place of your
  project, it is usually saved where the unit tests are)
- Isolate Test (all the tests that are executed in jest are isolated from the normal environment.
  the development environment and the test environment)
- API

# SnapShots Testing

consists in comparing the UI file that should be working, against snapshots
that is generated at the moment of executing the unit test, the comparison is made and if
the result that you just gave me is different from the snapshots that I have saved means that something unexpectedly changed in your UI.
unexpectedly changed in your UI so the test has failed.
