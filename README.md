# gapsi-back
Proyecto Gapsi

## Instalar docker desktop
Es necesario descargar docker desktop para poder utilizar la base de datos de manera local. Para poder descargarlo es necesario ingresar al siguiente link `https://www.docker.com/products/docker-desktop/`.

## Base de datos
Para almacenar toda la información del proyecto usaremos la base de datos de PostgreSQL.

## Sequelize ORM
Se estará utilizando el ORM de Sequelize. Para mayor información acerca del ORM visitar su documentación completa en `https://sequelize.org/` en su versión 6.

## Environments
Todas las variables de entorno estarán guardadas dentro del archivo `.env` que esta en la raíz del poroyecto.

## Ejecución en modo local
Lo primero es tener abierto el docker desktop que descargamos previamente. Después debemos ejecutar el comando `make start` y esto internamente comenzará a descargar las imagenes para generarnos el ambiente de back-end y descargar la base de datos de manera local. Una vez finalizado el proceso necesitaremos ingresar a la imagen llamada `api` y en la terminar ejecutar el comando `npm run migrate` esto generará las tablas para la base de datos y finalmente ejecutar `npm run seeders` esto para generar las semillas.