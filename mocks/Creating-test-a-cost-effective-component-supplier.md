# Creating a test to an inexpensive component supplier

let's continue with the container test

● <Container /> ' renders correctly.

    TypeError: Cannot destructure property 'images' of '(((cov_15lyjo5rtp(...).s[1]++) , (0 , _react.useContext)(...))' as it is undefined.

       5 |
       6 | const Container = ({ searchTerm }) => {
    > 7 | const { images, loading, runSearch } = useContext(PhotoContext);
         | ^
       8 | useEffect(() => {
       9 | runSearch(searchTerm);

the test says that it is using the context but it cannot do the destructuring, because the component is being assembled in a way where no information is being passed to it, so what we are going to do is to simulate that this component has a provider.

A provider are those components that encompass and return the same component,
as it is but as information as property to be used.

This provider is the one that goes and makes a call to the API and it is using axios each time that runSearch is activated.
that runSearch is activated, then this provider can pass it:

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

then inside this object we can pass functions, values, primitives and objects to it.

our test to the provider we pass a props that in a first instance will be an empty string.
empty string

we are going to access .root and we are going to raise our tests, we have the PhotoContextProvider
which is the parent component and it is the one that our child component will have.

console.log
ReactTestInstance {
\_fiber: <ref *1> FiberNode {
tag: 0,
key: null,
elementType: [Function: PhotoContextProvider],
type: [Function: PhotoContextProvider],
stateNode: null,
return: FiberNode {
tag: 3,
key: null,
elementType: null,
type: null,
stateNode: [FiberRootNode],
return: null,
child: [Circular *1],
sibling: null,
index: 0,
ref: null,
pendingProps: null,
memoizedProps: null,
updateQueue: [Object],
memoizedState: [Object],
dependencies: null,
mode: 0,
flags: 256,
nextEffect: null,
firstEffect: [FiberNode],
lastEffect: [Circular *1],
lanes: 0,
childLanes: 0,
alternate: [FiberNode],
actualDuration: 0,
actualStartTime: -1,
selfBaseDuration: 0,
treeBaseDuration: 0,
\_debugID: 1,
\_debugSource: null,
\_debugOwner: null,
\_debugNeedsRemount: false,
\_debugHookTypes: null
},
child: FiberNode {
tag: 10,
key: null,
elementType: [Object],
type: [Object],
stateNode: null,
return: [Circular *1],
child: [FiberNode],
sibling: null,
index: 0,
ref: null,
pendingProps: [Object],
memoizedProps: [Object],
updateQueue: null,
memoizedState: null,
dependencies: null,
mode: 0,
flags: 0,
nextEffect: null,
firstEffect: [FiberNode],
lastEffect: [FiberNode],
lanes: 0,
childLanes: 0,
alternate: null,
actualDuration: 0,
actualStartTime: -1,
selfBaseDuration: 0,
treeBaseDuration: 0,
\_debugID: 4,
\_debugSource: [Object],
\_debugOwner: [Circular *1],
\_debugNeedsRemount: false,
\_debugHookTypes: null
},

in this case we do not have a real dom, but a fictitious dom.

```js
import React from "react";
import { create } from "react-test-renderer";
import Container from "../components/Container";
import PhotoContextProvider from "../context/PhotoContext";

jest.mock("axios"); // modulo de tercero

console.log(jest);
// eslint-disable-next-line no-unused-vars
let component;

describe("<Container />", () => {
  beforeEach(() => {
    component = create(
      <PhotoContextProvider>
        <Container searchTerm="" />
      </PhotoContextProvider>
    );
  });

  it("renderiza correctamente", () => {
    console.log(component.root);
  });
});
```

```js
it("renderiza correctamente", () => {
  expect(component.root).toBeDefined();
  expect(component.root.toBeType(Container));
});
```

we pass the component as it is because it is not a component of html said that we are going to see that it is defined -> if it is defined it means that if it has a container and if it is rendering correctly

we are going to go to container to see that it has in the first load:

- It is going to place a loader if it is loading otherwise it is going to show a gallery.

if we go to the context that is where we have the call to the API the first instance is true, so it will always be true.

```js
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

because in the call we are not telling it to make the false one, because this call is not
then we are going to corroborate that there is a file, that there is a component inside the instance, then that it is a loader in a first instance, then by logic if there is a Loader there should not be a Gallery, because it is not loading the component, then there should not be any information.

```js
it("renderiza correctamente", () => {
  expect(component.root).toBeDefined();
  expect(component.root.findAllByType(Container)).toBeDefined();
  expect(component.root.findAllByType(Loader));
  expect(component.root.findAllByType(Gallery).length.toEqual(0));
});
```

the toEqual will be equal to 0 because it will not see any component inside that array,
that findAllByType() -> is not going to have anything.
Everything is fine, the component is rendered, we have a loader, we have a container, the instance is working, therefore we don't have any gallery component, we don't have anything to show.

We are going to place another test case

```js
it("render successfully", () => {});
```

let's go back to the implementations we made of axios

```js
export default {
  get: jest.fn().mockImplementation(() => Promise.resolve([])),
  post: jest.fn().mockImplementation(() => Promise.reject("")),
  put: jest.fn(),
};
```

When they are actually called, but we are not corroborating it, as we mentioned it is a global mocking when this package is used in the same way as axios anywhere var go for get, post and put objects. These values which are functions, in this case
are test functions mocking functions, that said let's go back to container, and we are going to update the component, we are going to update using act. We import act of react test renderer, here we have a new instance, we mount the component, the searchTerm we change it as text and this will produce an update, it has to call the API because if we remember when we change searchTerm in the useEffect **executes the search this method comes from the context and it will make the call to the API as we are using the mocking it has to grab it and not the node_modules one once that we have to corroborate that they are making the call to the API**.
