# Tipos de testing en frontend

- Pruebas unitarias
- Pruebas de integración
- Pruebas E2E

## Pruebas unitarias

Se aplican en las partes más pequeñas de un software, es decir, cada componente para
asegurar que funciona correctamente. Las pruebas unitarias se basan en eso probar
cada unidad por separado no al mismo tiempo, no puedes escribir una prueba unitaria para involucrar
10 componentes, pueden estar enlazados, pero no puedes probar un flujo completo implementando
unit testing

- componente re usables

Es por eso que existen a pruebas de integración

## Pruebas de integración

Es una extensión lógica de las pruebas unitarias. Sirve para verificar la funcionalidad y la seguridad
de los componentes que han sido integrados.

![2](/images/integration-testing.png)

Las pruebas de integración son aquel tipo de pruebas, que toma 2 componentes y ve como es
su funcionamiento integrado por eso el nombre integración. Si tenemos 6 componentes hay que
ver como funciona la unidad A con la unidad B, esto es un tipo de prueba un poco más alto
que las pruebas unitarias.

## Pruebas de E2E

Pruebas end to end. Se encargan de corroborar el comportamiento de inicio a fin de tu
software asegurando que funcione de la manera esperada. Es decir que todas las piezas agrupadas
funcionen correctamente.

Estas se encargará de comprobar flujos completos de tu aplicación de inicio a fin, si por
ejemplo tienes una aplicación que va a ser una transferencia a banco vamos a corroborar que desde
que el usuario digite su tarjeta hasta que termina la transacción que todo este flujo, todas
las pantallas que lo involucran funcionen de manera correcta como uno lo espera, tu no esperas
que el usuario vea un error, vamos a revisar que el código que tenemos escrito colocado
en un ambiente de testing que no sea un ambiente real de producción funcione, estamos automatizando
este proceso y por supuesto estamos corroborando que funcione este tipo de pruebas end to end
son costosas por eso requiere un conocimiento extra al de unit testing y si llevan un poco
más de tiempo escribirlas.
