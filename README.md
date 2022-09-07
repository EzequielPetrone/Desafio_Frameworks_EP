# DESAFIO: FRAMEWORK KOA
## EZEQUIEL PETRONE

## Comentarios del entregable actual:

- Framework elegido: KOA. Considero que es el más simple de adaptar cuando ya tenemos hecho una base en Express.

- Quizás si tuviese que empezar un proyecto de cero, hubiera elegido SAILS.

- Los cambios los tuve que realizar en server.js, en routes y principalmente en los controllers, ya que hay que pasar de los callbacks de request y response de express, a la implementación del concepto de contexto de KOA.

- Las capas de Negocio / Servicios y Persistencia las dejé intactas!

- Testee minuciosamente con POSTMAN y todo ok (o al menos funciona igual que los entregables anteriores)

## Comentarios del entregable anterior:

- Aproveché este desafio para reescribir las diferentes capas del server según lo último que estuvimos viendo. Lo hice porque hasta acá sólo manejaba get y post de productos a través de Socket.io y eso no me permitía hacer un testeo completo de todos los endpoints.

- Puse foco en la api restful de productos del lado del backend. Dejé de lado todo lo relacionado con authenticación y frontend, como habilitó el profe.