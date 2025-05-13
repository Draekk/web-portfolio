# **Web Portfolio**

This repository contains my personal portfolio, where I present who I am, my areas of expertise, and the projects I have developed.

---

## Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Project Structure](#project-structure)
5. [API Endpoints](#api-endpoints)
6. [Deployment](#deployment)
7. [Installation & Usage](#installation--usage)

---

## Description

My web portfolio is a fullstack application that shares a bit about me, my skills and technologies, and showcases the projects I've worked on. The frontend is built with React + TypeScript and Tailwind CSS, while the backend runs on Spring Boot with Spring Data JPA, Hibernate, and PostgreSQL as the database.

## Features

* **Project Listing**: all projects can be viewed from the frontend.
* **Backend CRUD**: endpoints to Create, Read, Update, and Delete projects (restricted to private access for security).
* **Technology Management**: each technology shows the projects it was used in, and each project displays the technologies it used.

## Technologies

* **Frontend**:
  * React
  * TypeScript
  * Tailwind CSS

* **Backend**:
  * Spring Boot
  * Spring Data JPA
  * Hibernate

* **Database**:
  * PostgreSQL

## Project Structure

```
/
├── client/   # Frontend code (React + TypeScript + Tailwind CSS)
├── server/   # Backend service (Spring Boot + Spring Data JPA + Hibernate)
└── README.md # Main project documentation
```

## API Endpoints

All available API endpoints are documented at the following base URL:

```
https://draekkdev-portfolio.onrender.com/api
```

Just visit this URL to view the complete list of backend resources and supported methods.

## Deployment

* **Frontend:** hosted on Vercel `https://web-portfolio-two-lilac.vercel.app`

* **Backend:** deployed on Render `https://draekkdev-portfolio.onrender.com`

## Installation & Usage

To set up and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Draekk/web-portfolio.git
   cd web-portfolio
   ```
2. Create the environment variables file inside the `server/` folder:
   ```bash
   cd server
   touch .env
   ```
3. Open `.env` and add the following sample variables:
   ```env
   ### PostgreSQL (default)
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=example_postgres_db
   DB_USERNAME=example_pg_user
   DB_PASSWORD=example_pg_pass
   
   ###Token
   SECRET_TOKEN=example_secret_token_123 # Token used for all POST, PUT and DELETE requests

   ### Mail
   MAIL_HOST=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USERNAME=example@mail.com
   MAIL_PASSWORD=example_mail_password
   ```
4. Build and run the backend:
   ```bash
   cd server
   ./mvnw clean -DskipTests
   export $(cat .env | xargs)
   java -jar target/web-portfolio-0.0.1-SNAPSHOT.jar
   ```
5. Set up frontend environment variables and run the frontend:
   ```bash
   cd ../client
   touch .env
   ```
   Open `.env` and add:
   ```env
   VITE_API_URL=http://localhost:8080/api
   ```
   Install dependencies and run the app:
   ```bash
   npm install
   npm run dev
   ```
