Repositorio BACKEND del grupo 16 de la materia Desarrollo de Aplicaciones (UNAHUR).

## Integrantes del grupo
- Marcos Cravero  
- Nicolás García  
- Jonathan Bravetti  
- Federico Depaulo  
- Marco Musillario  

---

## Proyecto: Prestadores (Backend)

Este repositorio contiene el ``backend`` para la aplicación de Prestadores, necesario para que el ``frontend`` pueda recibir los datos necesarios para poder funcionar correctamente. 

Incluye la base de datos de:
- Login y autenticación de sesión.
- Dashboard con métricas y gráfico de evolución.
- Módulo de Solicitudes (alta, gestión de estados y detalle).
- Módulo de Afiliados (búsqueda y alta rápida).
- Historia Clínica (gestión de notas).
- Turnos (calendario mensual navegable).

---

## Dependencias usadas
- Nodemon  
- Cors
- Express  

---

## Requisitos previos
- Tener instalado Node.js (v18 o superior recomendado).  
- Tener instalado npm (incluido con Node).  

---

## Cómo levantar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/DesApp-2025c2-Grupo16/backend2.git
   cd backend2
2. Crear los contenedores de docker:
   ```bash
   docker compose up -d
3. Instalar dependencias:
   ```bash
   npm install
4. Levantar en modo desarrollo:
   ```bash
   npm run dev
5. Abrir en el navegador:
http://localhost:3001

---
