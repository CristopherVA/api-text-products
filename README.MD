# API PRODUCTOS

_Aplicacion del lado del backend para llevar las gestiones de productos_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Herramientas utilizadas para el desarrollo del proyecto_

```
NODE JS
EXPRESS JS
MYSQL
POSTMAN
```

### Instalación 🔧

_Para poder correr del proyecto debemos de hacer lo siguiente:_

_Clonar el proyecto_

```
git clone 
```

### Instalar las dependencias

```
npm install o npm i
```

### Creacion de base de datos 🔧

```
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
```

### Insertar variables de entorno para poder conectar con la base de datos 🔧

```
Estan en el archivo .env.example !borrar .example!

PORT_WEB = PUERTO PARA CORRER EL SERVIDOR
HOST = HOST DE LA BASE DE DATOS
ROOT = USUARIO DE LA BASE DE DATOS
PASSWORD = PASSWORD DE LA BADE DE DATOS
DATABASE = NOMBRE DE LA BASE DE DATOS
PORT_DB = YOUR PUERTO DE LA BASE DE DATOS
```

### Correr el servidor desde la terminal con el siguiente comando 🔧

```
npm start
```


### Rutas utilizadas 🛠️

```
    Ejecutar todos los endpoint en posman u otra opcion
```
 
# Obtener todos los productos

```
    http://localhost:8080/api/productos/
```

# Obtener producto por ID

```
    http://localhost:8080/api/productos/ + id
```

# Agregar nuevo producto
```
    http://localhost:8080/api/productos/create

    En el body colocar los siguientes datos para poder agregar
    {
        "categoria_id":   INT, # DEPENDIENDO DE LA CANTIDAD QUE TENGAS AGREGADAS SE AGREGARA POR ID
        "nombre":         STRING, # NOMBRE DEL PRODUCTO
        "precio":         # ING PRECIO DEL PRODUCTO
    }   
```

# Actualizar producto

```
    http://localhost:8080/api/productos/ + id
```

# Elimianr producto
```
     http://localhost:8080/api/productos/ + id
```

### Construido con 🛠️

_Los siguientes paquete son los utilizados para el desarrollo_

* [Express JS](https://expressjs.com/es/) - El framework backend usado para hacer las request y response
* [Body Parser](https://www.npmjs.com/package/body-parser) - Paquete para poder utilizar JSON
* [Cors](https://www.npmjs.com/package/cors) - Paquete para poder utilizar solicitar recursos restringidos
* [Dotenv](https://www.npmjs.com/package/dotenv) - Paquete para poder utilizar leer variables de entornos
* [Nodemon](https://www.npmjs.com/package/nodemon) - Paquete para 
* [MySql](https://www.npmjs.com/package/mysql) - Paquete usado para la conexion a la base de datos

_
### Paquetes utilizados para la creacion del codigo de barra ! FUNCION NO AGREGADA !

* [JSbarcode](https://www.npmjs.com/package/jsbarcode) - Paquete utilizado para generar los codigo de barra
* [Canvas](https://rometools.github.io/rome/) - Paquete Usado para la conexion a la base de datos

### Autor ✒️

* **Cristopher Valentin ALmonte** - *Trabajo Inicial* - [cristopherva](https://github.com/cristopherva)

### Expresiones de Gratitud 🎁

* Gracias por la oportunidad espero que llene sus expectativas y trabajar juntos .

---
⌨️ con ❤️ por [CristopherVA](https://github.com/cristopherva) 😊