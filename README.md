**Portafolio Web**

Este repositorio contiene mi portafolio personal, donde presento quién soy, mis áreas de expertise y los proyectos que he desarrollado.

---

## Contenido

1. [Descripción](#descripción)
2. [Características](#características)
3. [Tecnologías](#tecnologías)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [API Endpoints](#api-endpoints)
6. [Despliegue](#despliegue)
7. [Instalación y Uso](#instalación-y-uso)

---

## Descripción

Mi portafolio web es una aplicación fullstack que habla un poco sobre mí, mis habilidades y tecnologías, y muestra los proyectos que he realizado. El frontend está desarrollado con React + TypeScript y Tailwind CSS, y el backend corre sobre Spring Boot con Spring Data JPA, Hibernate y PostgreSQL como base de datos.

## Características

* **Listado de Proyectos**: desde el frontend se pueden consultar todos los proyectos.
* **CRUD en Backend**: endpoints para Crear, Leer, Actualizar y Borrar proyectos (solo acceso privado para mayor seguridad).
* **Gestión de Tecnologías**: cada tecnología muestra los proyectos en los que se utilizó, y cada proyecto muestra las tecnologías empleadas.

## Tecnologías

* **Frontend**:

  * React (librería)
  * TypeScript
  * Tailwind CSS
* **Backend**:

  * Spring Boot
  * Spring Data JPA
  * Hibernate
  * Lombok
* **Base de datos**:

  * PostgreSQL

## Estructura del Proyecto

```
/
├── client/   # Código del frontend (React + TypeScript + Tailwind CSS)
├── server/   # Servicio backend (Spring Boot + Spring Data JPA + Hibernate)
└── README.md # Documento principal del proyecto
```

## API Endpoints

Todos los endpoints disponibles de la API están documentados en la URL base:

```
https://draekkdev-portfolio.onrender.com/api
```

Simplemente navegando a esta ruta podrás ver la lista completa de recursos y métodos soportados por el backend.

## Despliegue

* **Frontend**: alojado en Vercel (`https://web-portfolio-two-lilac.vercel.app`).
* **Backend**: desplegado en Render (`https://draekkdev-portfolio.onrender.com`).

## Instalación y Uso

Para configurar y ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Draekk/web-portfolio.git
   cd web-portfolio
   ```

2. Crea el archivo de variables de entorno dentro de la carpeta `server/`:

   ```bash
   cd server
   touch .env
   ```

3. Abre `.env` y añade las siguientes variables de ejemplo:

   ```env
   ### PostgreSQL (predeterminado)
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=example_postgres_db
   DB_USERNAME=example_pg_user
   DB_PASSWORD=example_pg_pass

   ### Token
   SECRET_TOKEN=example_secret_token_123

   ### Mail
   MAIL_HOST=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USERNAME=example@mail.com
   MAIL_PASSWORD=example_mail_password
   ```

4. Construye y arranca el backend:

   ```bash
   cd server
   ./mvnw clean -DskipTests
   export $(cat .env | xargs)
   java -jar target/web-portfolio-0.0.1-SNAPSHOT.jar
   ```

5. Configura las variables de entorno del frontend y arranca la aplicación:

   ```bash
   cd ../client
   touch .env
   ```

   Abre `.env` y añade:

   ```env
   VITE_API_URL=http://localhost:8080/api
   ```

#
