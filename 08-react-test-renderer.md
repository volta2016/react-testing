## React Test renderer

## What is it?

It is basically a test library that allows us to assemble the components that we have in our project.
project.

For example, we have a container that is going to make a call to an API, when the component is mounted in the DOM of the browser we see the component mounted in the tree.
is mounted in the DOM of the browser we see the component mounted in the tree.
\*\*But in a test environment using jest as test runner what happens is that we create an environment that is not real.
environment that is not real, therefore we have to mount our components there.

**react test renderer** is the one that is going to help us to mount the components in the test environment
to be able to check how is the result or what is being launched.

```js
import { create } from "react-test-renderer";
```

Here in screen we import create that basically we can see it as a renderer
create -> render the component <App />

- This is a fictitious representation of the browser DOM, but the result is similar.
  is similar, this is to check that it is giving the expected output.

Test Renderer
Importing

```js
import TestRenderer from "react-test-renderer"; // ES6
const TestRenderer = require("react-test-renderer"); // ES5 with npm
```

dentro de la documentación oficial de react tenemos un apartado que dice
renderizador de prueba, básicamente dice que hay que importarlo como
react-test-renderer que no es necesario instalarlo como un paquete adicional.

Al menos con create react App que ya viene pre instalado con este paquete, así que
lo podemos usar con es6 o es5 usando el require

This package provides a React renderer that can be used to render React components to pure
JavaScript objects, without depending on the DOM or a native mobile environment.

Essentially, this package makes it easy to grab a snapshot of the platform view
hierarchy (similar to a DOM tree) rendered by a React DOM or React Native component without using a browser or jsdom.

## Example:

```js
import TestRenderer from "react-test-renderer";

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

const testRenderer = TestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);

console.log(testRenderer.toJSON());
// { type: 'a',
// props: { href: 'https://www.facebook.com/' },
// children: [ 'Facebook' ] }
```

Let's see the result that it throws at me, since the create instance returns an object
we can convert the object to json and start parsing it, this is what
would return the create in case of mounting a component of type <a></a>

create helps us to mount the component, in an environment that is not the browser,
but, nevertheless, we can see the output just as if we were riding on a
real browser, that to check that it is working

## Estos son todos los métodos que trae test rénder

TestRenderer
TestRenderer.create()
TestRenderer.act()

## TestRenderer instance

testRenderer.toJSON() -> Nos convierte el árbol en forma de objeto para poder verificar la información
testRenderer.toTree() -> lo podemos convertir al arbol
testRenderer.update() -> lo podemos actualizar si queremos montar de nuevo mi componente
testRenderer.unmount() -> de lo contrario si queremos desmontarlo o mandar a llamar la función de desmontar
si estas haciendo cualquier tarea síncrona o asíncrona en el unmount lo vamos a corroborar aquí
testRenderer.getInstance() -> la instancia de tu componente
testRenderer.root -> objeto instancia del array

lo siguiente es todo lo que podemos obtener de una instancia

# TestInstance

testInstance.find() -> selectores para buscar dentro de ese componente, para un componente
que tiene mas elemento no solamente tiene un <a>, por ejemeplo un componente con más contenedores o
testInstance.findByType() -> buscamos por el tipo del elemento
testInstance.findByProps() -> si tiene un propiedad buscamos por ella
testInstance.findAll() -> buscar uno o más resultados
botones
testInstance.findAllByType()
testInstance.findAllByProps()
testInstance.instance
testInstance.type -> el tipo de la instancia
testInstance.props -> podemos ver las propiedades de la instancia
testInstance.parent
testInstance.children

we can verify this with the matcher
