# multer-TLP2

# Contexto

Una tienda de productos necesita un servidor básico que permita a los empleados
agregar nuevos productos y adjuntar una imagen que se guardará en el servidor. El
sistema no utiliza una base de datos, los productos se guardarán temporalmente en
memoria dentro de un array de objetos. Al agregar un producto, se deberá retornar el
producto creado con la URL de la imagen adjunta.

# Solucion

Mediante el uso de "Postman" se pueden agregar nuevos productos(nombre, descipcion, precio e imagen) los cuales se guardan temporalmente en una base de datos local. Dichos productos poseen validaciones que se aseguran que solo se pueda realizar una carga de datos especifica.

# Dependencias utilizadas

express
express-validator
cors
multer

# Comandos para usar las funcionalidades del proyecto

Instalar dependencias: npm i(install)
Asegurarse de encontrarse en las carpetas correctas, tanto "client" como "server"
Iniciar el servidor: npm run dev (en "client" y "server")

