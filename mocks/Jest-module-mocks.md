# Jest module mocks

We have the Container component, which is located inside the component folder.
this component has wrapping that means that it is wrapped by a context.
It may not present us with a problem but it does present us with a problem that this component
makes the API call -> **how to mock the API call**.

- we are going to create the file Container.test.js

for the moment we are not going to add anything to it because if we try to assemble this component
that container is going to mark us an error because inside useEffect if it is familiarized.

Practically when I change the parameter of searchTerm, it is going to execute the search **runSearch**.
and, therefore, it will put me the Loader if it is loading or it will show me the gallery if
is no longer loading.

- That can be the main test case

```jsx
import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
```

que si este componente cambia o searchTerm cambia, vamos a mandar a llamar a la API
y vamos a mostrar el cargando y después cuando no esté cargando, es muy sencillo
pero lo que no es sencillo, si nosotros nos vamos a useContext de PhotoContextProvider
porque este proyecto esta hecho con context API -> Te darás cuenta que viene un provider.

```js
import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
```

This provider basically is a component, which makes me wrap all my project that I pass to it or all the components that I pass to it.
that I pass to it or all the components that I pass to it, this is simply a wrapper, thanks to this wrapper we can access the
to this wrapper we can access to the methods of runSearch, the loading and images,
we can access to the methods or to the data of the whole App. As a state management
that's the way context API behaves, but it's interesting when we are doing axios.get -> get -> get -> get -> get -> get -> get -> get -> get -> get -> get.
we are doing axios.get -> we are calling axios in a real way, which is not going to work in a
is not going to work in a test environment, but it is that we are going to see that it is a mocking of a module.
So inside Container.test we are going to work, but let's go to the documentation

[bypassing-module-mocks](https://jestjs.io/docs/26.x/bypassing-module-mocks)

jest allows us to mock the whole module in a complete way. This is quite useful when we are working with
this is quite useful when we are working with third party axios dependencies, date utilities
any utility for storage to save in cookies, any library that you are using just by passing the module name
using just passing the module name to jest, for example we have that test case here, where we have import of
test case here, where we have import of fetch is a javascript file in which we are importing the node-fetch module.
importing the node-fetch module, we import it as fetch, then we export the createUser method.
method of createUser.

Inside the createUser we get the response of a call with the post method and if we go to
to the userId -> the response.text() converts it to text we are simply making a call using fetch, which comes from the modem
using fetch, which comes from the node-fetch module.

createUser.js

```js
import fetch from "node-fetch";

export const createUser = async () => {
  const response = await fetch("https://website.com/users", { method: "POST" });
  const userId = await response.text();
  return userId;
};
```

but we can't make calls to the api with unit testing, it won't work and we must occupy
fictitious information, that is not real, that's why it is a test environment.

There are 2 ways to do it.

**jest** is a global constant, it is not necessary to import it.

```js
jest.mock("namemodule");
```

let's mock that dependency globally

to import the module we need

everything we can do with jest we can see it in an object

console.log
{
advanceTimersByTime: [Function: advanceTimersByTime],
advanceTimersToNextTimer: [Function: advanceTimersToNextTimer],
autoMockOff: [Function: disableAutomock],
autoMockOn: [Function: enableAutomock],
clearAllMocks: [Function: clearAllMocks],
clearAllTimers: [Function: clearAllTimers],
createMockFromModule: [Function: createMockFromModule],
deepUnmock: [Function: deepUnmock],
disableAutomock: [Function: disableAutomock],
doMock: [Function: mock],
dontMock: [Function: unmock],
enableAutomock: [Function: enableAutomock],
fn: [Function: bound fn],
genMockFromModule: [Function: genMockFromModule],
getRealSystemTime: [Function: getRealSystemTime],
getTimerCount: [Function: getTimerCount],
isMockFunction: [Function: isMockFunction],
isolateModules: [Function: isolateModules],
mock: [Function: mock],
mocked: [Function: bound mocked],
requireActual: [Function: bound requireActual],
requireMock: [Function: bound requireMock],
resetAllMocks: [Function: resetAllMocks],
resetModules: [Function: resetModules],
restoreAllMocks: [Function: restoreAllMocks],
retryTimes: [Function: retryTimes],
runAllImmediates: [Function: runAllImmediates],
runAllTicks: [Function: runAllTicks],
runAllTimers: [Function: runAllTimers],
runOnlyPendingTimers: [Function: runOnlyPendingTimers],
setMock: [Function: setMock],
setSystemTime: [Function: setSystemTime],
setTimeout: [Function: setTimeout],
spyOn: [Function: bound spyOn],
unmock: [Function: unmock],
unstable_mockModule: [Function: mockModule],
useFakeTimers: [Function: useFakeTimers],
useRealTimers: [Function: useRealTimers]
}

we can add:

- mocking
- timer
- functions

in the documentation we have what are the mocking functions manually.
manually.

[bypassing-module-mocks](https://jestjs.io/docs/26.x/bypassing-module-mocks)

Manual mocks are defined by writing a module in a **mocks**/subdirectory immediately adjacent to the module.
adjacent to the module. For example, to mock a module called user in the models
directory, create a file called user.js and put it in the models/**mocks** directory.
Note that the **mocks** folder is case-sensitive, so naming the directory **MOCKS** will
break on some systems.

When we require that module in our tests (meaning we want to use the manual mock
instead of the real implementation), explicitly calling jest.mock('./moduleName') is required.

We can create a new folder inside src called mocks, we are going to place all the files where we are going to use the
to place all the files where we are going to mock the dependencies, that is to say, if I want to mock the
if I want to do mocking of axios in a global way

inside the file we can do this

```js
jest.mock("axios");
```

**The other alternative,** most of them can be objects that can be imported,
objects that are functions -> the functions ultimately in javascript are objects

```js
import { Axios } from "axios";

jest.mock("axios");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: () => {
    return 10;
  },
  post: () => {},
  put: () => {},
};

Axios.get();
```

if the API call returns me a 10 then this works and we are doing it
dummy if we need to go and call an API that is not what we want, if you want to call an API then if you don't
want, if you want to call an API then it is no longer a unit test.

Having this is the same as having jest.mock("axios"); but with the difference that this is customizable.

```js
export default {
  get: () => {},
  post: () => {},
  put: () => {},
};
```

let's see how to use this in PhotoContext, we no longer need jest.mock("axios"); because this file will be injected before jest.
file will be injected before it is executed by jest.

Examples
.
├── config.
├─── **mocks**
│ └└── fs.js
├── models.
│ ├─── **mocks**
│ │ └└── user.js
│ └└─── user.js
├── node_modules.
└─── views.
