# W2m Technical Test

## Descripción

---

Se trata de una aplicación para visualizar datos de superhéroes y poder realizar acciones de borrado, creación y actualización de los datos.

## Tecnologías utilizadas

---

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1. junto con `json-server` para el backend.

## Arrancar la aplicación

---

Acceder a la carpeta app donde se encuentra la aplicación. Tras este paso en una terminal dentro de la misma ruta ejecutar `npm install` para instalar paquetes necesarios.

Una vez instalados ejecutar `npm run server` para levantar el backend.

En otra terminal dentro de la misma ruta ejecutar`npm run start` para arrancar la aplicación.

Una vez levantada la aplicación navegar a http://localhost:4200/.

## Arrancar la aplicación en docker

---

En una terminal posicionarse en la carpeta raíz **w2m-app**.

Ejecutar el comando `docker compose up` para levantar el contenedor. Una vez hecho el build navegar a http://localhost:4200 para visualizar la aplicación.

Para parar la ejecución escribir el comando `docker compose down`.

## Ejecutar los tests

---

Posicionarse dentro de la carpeta app. Tras esto escribir `npm run test` en la terminal para ejecutar los test.
