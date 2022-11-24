# Creating the first Gallery test

![gallery](./images/gallery.png)

We have the gallery component, that basically receives data shows all the images that come inside the API.
that come inside the API, then we are going to look for the component of gallery it is a component
that renders all the images.

We are going to declare the component to be able to mount it, inside beforeEach I am going to put
a component equal to create(); we are going to pass it gallery that we are going to import it
it is the component that we are going to work and it is necessary to pass the properties to him with the spread
to make validations later on, we are going to declare the constant props, as we saw
gallery is a component that receives data is the only property that we saw in the inspector
for which data is going to be equal to an empty array

```js
describe("<Gallery />", () => {
  beforeEach(() => {
    component = create(<Gallery {...props} />);
  });
});
```

now we are going to place fictitious data, but for the moment we are going to see that it has gallery, gallery
is a functional component that receives properties, what it really receives is the data,
it stores it in result, it has a variable of images and noImages, that are idefinidas for the moment,
then if the result exists, then it shows all the images, it puts them inside another component called <Image />.
component that is called <Image />, the same we can create of components unit tests,
in addition all the properties that you can pass to this component if only if the result is empty or not, otherwise
is empty or not, otherwise we are going to show <noImages />, this is because there is no
images, noImages is equal to true. The only thing that we show if there are no images we show
no images. If there are images we show the unordered list and all the images, this will help us to hear more from matcher.
will help us to listen more of matcher will help us to listen to the specific components.

## First test case that correctly displays everything

expect(component).toBeDefined(); -> we are going to wait for it to mount it but it is very ambiguous
that response.

We are going to look inside the instance for a div which is the main container and also we are going to
we are going to look for the not ordered list, because independently of that they come images or that they do not come
images will show the unordered list
