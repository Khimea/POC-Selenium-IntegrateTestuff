# Devsu-E2E Prueba tecnica

## Proyecto desarrollado con [Selenium](https://www.selenium.dev/selenium/docs/api/javascript/index.html) + [Cucumber-JS](https://github.com/cucumber/cucumber-js)

- Dependencia de framework [NodeJS](https://nodejs.org/en/download)
### Ejecucion simple

---

- Clonar repo
- Instalar dependencia `npm install`
- lanzar test `npm run test:cucumber`


### Features
---
Compra.feature es el unico feature del proyecto.
- Escenario 1 = Completamos los productos desde el gherkin
- Escenario 2 = Completamos los productos desde una tabla
- Escenario 3 = Completamos el login desde el gherkin
- Escenario 4 = Completamos el login desde una tabla
- Escenario 5 = Completamos el login y los productos desde la tabla


- Modificar o agregar productos
  ```
    | producto1         | producto2      |
    | Samsung galaxy s7 | Sony xperia z5 |
    | Nokia lumia 1520  | Sony vaio i7   |
  ```
- Modificar usuario y contraseña
  ```
    | Username      | password     |
    | standard_user | secret_sauce |
  ```

---
