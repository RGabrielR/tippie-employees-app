# Tabla de Empleados de Tippie

Esta tabla permite ver a todos los empleados y ordenarlos por nombre, edad, sector e email de manera alfabetica.

Para el armado de esta pagina se utilizo React, Redux, Formik, Yup y Tailwind.

Al ingresar a la pagina te pide las credenciales las cuales impide que navegues hacia la tabla. Estas credenciales son: demo@tipieapp.com como mail y "Tipie2022" como contraseña, al loguearte ya no puedes ingresar a la pagina de login. Dentro del Login se validan los campos y si las credenciales son incorrectas aparece un momentaneo mensaje de alerta.

Al loguearse correctamente se accede a la tabla la cual consulta a una base de datos creada a tal fin en la pag https://employees-data-challenge.herokuapp.com/ la cual al buscar los datos figura cargando hasta que la puede renderizar.

Al hacer click en cada una de las cabeceras de tabla ordena a los empleados alfabeticamente, en el caso de hacer click en el campo "edad" ordenara los empleados de mas jovenes a mas viejos.