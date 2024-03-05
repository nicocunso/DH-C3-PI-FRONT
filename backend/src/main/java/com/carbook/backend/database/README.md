Crear/Conectar una conexión local
-  
- Si se conectan por MySQLWorkbench (Datos genericos):
  - Hostname: localhost
  - Username: root
  - Port: 3306
  - Password: (Contraseña si tienen, sino nada)

- Si se conectar por la terminal:
  - mysql -h localhost -u root (Si tienen contraseña: -pContraseña)

Correr scripts
-
- Correrlos en el siguiente orden:
  - *database*: Crea la base de datos "carbook"
  - *tables*: Crea las tablas dentro de carbook
  - *basedata*: Inserta los registros dentro de cada una de las tablas creadas
- Aclararicón: Deben seleccionar la totalidad del script, incluso las lineas comentadas
   