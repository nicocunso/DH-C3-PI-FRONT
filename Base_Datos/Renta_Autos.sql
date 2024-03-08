### Borrar la base de datos y las tablas si existen 
drop database if exists renta_autos;
drop table if exists renta_autos.clientes;
drop table if exists renta_autos.pagos;
drop table if exists renta_autos.facturas;
drop table if exists renta_autos.rentas;
drop table if exists renta_autos.tipo_autos;
drop table if exists renta_autos.autos;
drop table if exists renta_autos.usuarios;
drop table if exists renta_autos.tipo_usuarios;

### Crear la Base de datos de Renta de Autos
CREATE database if not exists renta_autos;

### Crear tablas de renta de autos
CREATE table if not exists renta_autos.clientes(
id int not null auto_increment, 
tipo_documento varchar (3) not null,
numero_documento varchar (20) not null,
nombres varchar (50) not null,
apellidos varchar (50) null,
licencia_conducir varchar (50) not null,
direccion varchar (50) not null,
correo_electronico varchar (50)  not null,
fecha_nacimiento date not null,
creado timestamp not null,
actualizado timestamp null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id)
);

CREATE table if not exists renta_autos.tipo_autos(
id int not null auto_increment,
tipo_auto varchar (50) not null, 
creado timestamp not null,
actualizado timestamp not null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id)
);

CREATE table if not exists renta_autos.autos(
id int not null auto_increment,
id_tipo_auto int not null, 
matricula varchar (50) not null, 
marca varchar (50) not null,
modelo varchar (50) not null, 
tipo_combustible varchar (50),
trasmision varchar (50),
kilometraje int not null,
precioXdia decimal not null,
estado varchar (20) not null,
nro_puertas int not null,
nro_maleteros int not null, 
nro_pasajeros int not null,
creado timestamp not null,
actualizado timestamp null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id),
foreign key (id_tipo_auto) references renta_autos.tipo_autos (id)
);

CREATE table if not exists renta_autos.rentas(
id int not null auto_increment,
id_cliente int not null, 
id_auto int not null, 
fecha_inicio timestamp not null,
fecha_entrega timestamp not null,
creado timestamp not null,
actualizado timestamp null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id),
foreign key (id_cliente) references renta_autos.clientes (id),
foreign key(id_auto) references renta_autos.autos (id)
);

CREATE table if not exists renta_autos.facturas(
id int not null auto_increment,
id_renta int not null, 
valor_unitario decimal not null,
valor_impuestos decimal null,
valor_total decimal not null,
fecha_factura timestamp not null,
creado timestamp not null,
actualizado timestamp null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id),
foreign key (id_renta) references renta_autos.rentas (id)
);

CREATE table if not exists renta_autos.pagos(
id int not null auto_increment,
id_factura int not null, 
valor_pago decimal not null,
forma_pago varchar(20) not null,
estado_pago varchar(20) not null,
creado timestamp not null,
actualizado timestamp null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id),
foreign key (id_factura) references renta_autos.facturas (id)
);

CREATE table if not exists renta_autos.tipo_usuarios(
id int not null auto_increment,
tipo_usuario varchar (20) not null, 
descripcion varchar (50) null,
creado timestamp not null,
actualizado timestamp null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id)
);

CREATE table if not exists renta_autos.usuarios(
id int not null auto_increment,
id_tipo_usuario int not null, 
usuario varchar (20) null,
contrasena varchar (20) null,
creado timestamp not null,
actualizado timestamp null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id),
foreign key (id_tipo_usuario) references renta_autos.tipo_usuarios (id)
);

CREATE table if not exists renta_autos.imagenes(
id int not null auto_increment, 
id_auto int not null, 
url varchar (400) not null,
creado timestamp not null,
actualizado timestamp not null,
creado_por varchar (20) not null,
actualizado_por varchar (20) not null,
primary key (id),
foreign key (id_auto) references renta_autos.autos (id)
); 







