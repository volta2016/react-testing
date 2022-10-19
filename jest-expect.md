# jest expect

## expect();

Es una función que nos ayuda a corroborar cada uno de los casos de prueba, es por eso el nombre en inglés
expect, vamos a esperar algo y vamos a validarlo. Vamos a colocar el valor de un componente de cualquier
elemento que vayamos a inspecionar o incluso el valor que regresa una función

- no es necesario hacer un import de expect, ya que viene auto importado de manera
  global
- como expect es una función viene un argumento "expect();" el argumento es el valor que
  vamos a probar, le vamos a pasar una función que me regresa la suma de 2 números, se la
  pasamos por aquí la ejecuta y la evaluá.

## matcher();

Los matcher vienen incluidos dentro de esta función. Nos ayudará a comprar el valor
regresado con el correcto.

Imagina a expect() como una función que cuando la llamas te regresa un objecto el objeto
tiene muchos keys, que son todos los matchers para nosotros validar que está funcionando,
eso matchers nos va a ayudar a corroborar lo que acaba de pasar con el argumento de la función
expect() pero por si sola no ca funcionar.

Por ejemplo acá tenemos un matcher que se llama toEqual(5); igual que la traducción en inglés
es igual a 5, el matcher también recibe un argumento en algunas ocasiones dependiendo de tipo
de matcher en este caso al toEqual(5); le pasamos un y corroboramos que lo que le acabamos de pasar
en a función vale 5 esto se coloca en los casos de prueba jest lo ejecuta y si esto esta con
check es que paso correctamente

```js
tuFunction() {
  return 5;
}

expect(tuFunction()).toEqual(5);
```

Matchers más usados

- toBeDefined();
  lo que va evaluar es que en el expect el resultado este definido, verifica un valor que no sea
  definido

- toBeUndefined();
  si tenemos un valor que sea indefinido, lo vamos a evaluar con toBeundefined, los primeros
  2 no llevan argumento, pero que no es necesario validar nada, el matcher ya lo hace por si solo

- toEqual(valor);
- toBe();
- toBeIntanceOf();
  cuando quieres corroborar la instancia de algo, por ejemplo si tu función regresa un objeto
  hay que validar si es un instancia de object, de lo contrario de si es una arreglo toBeIntanceOf()
  array

- toBeTruthy();
  con esto valida si el resultado en verdadero ya sea 1 o true

- toBeGreatherThan();
  el resultado va validar si el resultado que viene por agumento es mayor
  el resultado del expect() es mayor que del toBeGreatherThan();

- toHaveLength();
  este es muy utilizando cuando estamos trabajando con arreglos, suponiendo que vamos que en una
  función al arreglo se le va a agregar un nuevo elemento, si era de tamaño 5 y agregamos uno
  queremos que sea de tamaño 6 en logitud, el valor que pasamos por argumento es lo que validar
  con lo que está dentro del expect()
