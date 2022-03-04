# Launch-X-FrontEnd-Mision

## Caso: Abogabot 


Descripción: Es un despacho de abogados que quiere automatizar las demandas de sus clientes, esto lo harán a través de una página web llenando un formulario. Al momento de llenar el formulario se manda al proceso de pago para finalizar la transacción. Para dar seguimiento a su demanda, el cliente crea una cuenta en la plataforma y verá el seguimiento de cada una de las actualizaciones del proceso legal. El administrador del sitio recibe la notificación de una nueva demanda y con los datos llenados del formulario se crea automáticamente el documento legal en formato word para empezar el proceso. El administrador recibe el pago y debe de ser capaz de verlo en un dashboard para ver la cantidad de ingresos recibidos. El administrador actualiza el proceso de la demanda y agrega comentarios en cada paso del proceso. Al usuario le llegan correos de notificación para saber el avance de su proceso. La página debe de ser responsive para poderla ver desde el celular. La preferencia de colores del cliente es azul marino y blanco, pero acepta propuestas.

## Usuarios:

### Cliente (Usuario)
El cliente desea crear una demanda: visita www.abogabot.com, lo cual lo redirige a un formulario para llenar los datos de demandante, datos de testigo y metodos de pago.
El usuario tendra acceso a ver el estado del la demanda e igual ser notificado via correo electronico por cada actualizacion que el abogado ingrese en su procedimiento.

### Administrador (Abogado)
El administrador tiene acceso a un dashboard para ver el total de casos asignados, pendientes y finalizados al igual que los ingresos totales de estos.
El administrador podra actualizar cada caso en especifico lo cual se procesa al ver el documento que fue creado automaticamente cuando el Cliente (Usuario) haya procesado su pago, y se le notifica al cliente
El administrador puede tener accesos de lectura y escritura para entrar a los distintos menus (Dashboard, Procesos y Configuracion (este se da de alta/baja/modificacion de usuarios.))

## Requerimientos:

1.	Formulario de Demanda
2.	Generacion automatica de documento legal para el Cliente(Usuario)
3.	Registro e inicio de sesion para los usuarios (Cliente, Aministrador)
4.	Vista general de las actividades de los casos y sus totales tanto casos como ingresos mostrados en el Dashboard
5.	Procesos y notificaciones en cada fase de la demanda
6.	Configuracion para las altas, bajas y modificaciones de los accesos de los usuarios (administradores)

## Buyer Persona:

Clientes potenciales para ser usuarios de Abogabot:

![buyer_persona](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/a99254b9de63589d2caecc63e9daff9449cd6dba/2.%20Buyer%20Persona/buyer_persona.png)

## Público Objetivo:

Clientes en general en el area demografica que cumplen con lo requisitos para calificar como usuarios.

![publico objetivo](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/3.%20Publico%20Objetivo/publico_objetivo.png)

## Wireframes (https://balsamiq.cloud/sqd38t8/pyqi4ml)


![mockup_registro](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_registro.png)
![mockup_iniciar_sesion](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_iniciar_sesion.png)
![mockup_demanda_1](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_demanda_1.png)
![mockup_demanda_2](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_demanda_2.png)
![mockup_demanda_3](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_demanda_3.png)
![mockup_demanda_4](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_demanda_4.png)
![mockup_dashboard](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/b6244ff684ee65a4f14bc5f3494f51b5bbfbbaab/4.%20Wireframe/mockup_dashboard.png)
![mockup_procesos](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_procesos.png)
![mockup_proceso_actualizar](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_procesos_actualizar.png)
![mockup_configuracion](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_configuracion.png)
![mockup_configuracion_agregar_usuario](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/4.%20Wireframe/mockup_configuracion_agregar_usuario.png)



## UI


![figma_registro](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_registro.png)
![figma_inicio_sesion](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_inicio_sesion.png)
![figma_demanda_1](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_demanda_1.png)
![figma_demanda_2](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_demanda_2.png)
![figma_demanda_3](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_demanda_3.png)
![figma_demanda_4](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_demanda_4.png)
![figma_dashboard](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_dashboard.png)
![figma_procesos](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_procesos.png)
![figma_procesos_actualizar](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_procesos_actualizar.png)
![figma_configuracion](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_configuracion.png)
![figma_configuracion_agregar_usuario](https://github.com/juliozm20/Launch-X-FrontEnd-Mision/blob/8eec64c0326f3a404ad11b5339354cea5f0840d1/5.%20UI/figma_configuracion_agregarUsuario.png)


