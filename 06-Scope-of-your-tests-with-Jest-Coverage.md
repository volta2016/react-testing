# Alcance de tus pruebas con Jest Coverage

[collectcoverage](https://jestjs.io/docs/configuration/#collectcoverage-boolean)

en nuestro test vamos a agregar

## collectCoverage=true

Es un comando esencial a la hora de trabajar con las pruebas unitarias, desde el inicio
te darás cuenta que porcentaje de tu código has estado cubriendo con pruebas, para verificar
si en realidad las pruebas que estás haciendo están cumpliendo con los requisitos para evitar bugs
collectCovarage es un comando si lo sentíamos a true lo que va a hacer es que por si solo, va a lanzar un pequeño
reporte de las pruebas que tenemos en nuestro proyecto.

## collectCovarageFrom

Es otro comando que también lo podemos agregar a nuestro jest.config, a este le debo
pasar un arreglo en donde quiero que se vaya y se busque ese coverage. Es decir
por default el coverage o la cobertura que va a verificar es de toda la aplicación de manera
global, pero llega el momento en donde quieres saber la cobertura de cierta carpeta por tener
mil o muchas pruebas unitarias, en este caso collectCovarageFrom sirve para eso.

```js
const config = {
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};

module.exports = config;
```

Este es el Covarage de lo que yo considero el reporte de pruebas unitarias

![Covarage](/images/collectCovarageFrom.png)

- primero fue a todos los archivos (primero vamos a ir la cobertura de todos los archivos)
- Stmts o sentencia en inglés que han sido cubiertas
- Branch no esta relacionada con un rama de git, lo que significa es que si esa sentencia
  si tenemos un switch o if else, todas esas estructuras que necesitan de cierto valor o
  de cierta sentencia han sido cubiertas por pruebas si o no, entonces hay que hacer que entre
  en cada caso de prueba que entre al if y en otro caso la verificación del else, el 100
  de nuestro código ha sido ejecutado entonces no tenemos ninguna condición que se nos haya
  escapado
- Funcs si tenemos en nuestro componente o utilerías que nos pueden ayudar, si todas
  las funciones fueron cubiertas con pruebas unitarias o fueron ejecutadas de manera correcta
  lo va a marcar
- Lines son la líneas que están cubiertas con pruebas unitarias, ha sido cada una de las líneas
  de ese archivo ejecutadas que tiene un 100% de covarage
- Uncovered Line #s las líneas que no han sido cubiertas con pruebas unitarias
