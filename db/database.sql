CREATE TABLE productos(
	id int primary key auto_increment,
    categoria_id int not null,
    nombre varchar(255) not null,
    precio int not null,
    cod_barra varchar(255),
    constraint fk_categoria_productos foreign key(categoria_id) references categorias(id)
)engine=InnoDB;

CREATE TABLE categorias (
	id int primary key auto_increment,
    nombre varchar(255)
)engine=InnoDB;

INSERT INTO categorias VALUES(null, 'carnes');
INSERT INTO categorias VALUES(null, 'bebidas');
INSERT INTO categorias VALUES(null, 'vegetales');