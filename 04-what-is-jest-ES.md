# Qué es Jest

Es un framework de pruebas creado en javascript que puede ser utilizado en proyectos que
usan:

- Babel
- TypeScript
- React JS
- Node JS
- Angular
- Vue

Este framework fue creado por el equipo de ingenieros de facebook

# Que nos aporta Jest

- Zero config
- SnapShots (es una copia de tu componente del árbol de tu componente, que lo guardas en un lugar de tú
  proyecto normalmente, se guarda en donde están las pruebas unitarias)
- Isolate Test (todas las pruebas que se ejecutan en jest son aisladas del ambiente normal, hay que tener
  en cuenta el ambiente de desarrollo y el ambiente de prueba)
- API

# SnapShots Testing

consiste en comparar el archivo de UI que debería de estar funcionando, contra snapshots
que se genera al momento de ejecutar la prueba unitaria, se hace la comparación y si
el resultado que me acaba de dar es diferente al snapshots que tengo guardado significa que algo
inesperadamente, cambio en tú UI por lo cual la prueba ha fallado.
