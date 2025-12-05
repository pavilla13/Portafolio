# 🚀 React Development Portfolio

¡Bienvenido a mi portafolio de desarrollo con React!

Este repositorio agrupa una colección de aplicaciones progresivas que documentan mi trayectoria de aprendizaje y dominio de React, desde los fundamentos hasta arquitecturas Full Stack.

Aquí encontrarás implementaciones prácticas de **Hooks**, estrategias de **navegación (Router)**, gestión de estado con **Redux/Context**, y la integración con backends robustos usando **NestJS** y bases de datos en la nube. Cada proyecto está desplegado y cuenta con su propia demo en vivo.

---

## 📂 Índice de Proyectos

1.  04-Hooks App: Profundizando en la lógica de React
2.  05-Heroes App: SPA con Rutas y Protección
3.  07-Teslo Shop: E-commerce Full Stack

---

## 🎣 04-Hooks App: Profundizando en la lógica de React

Una aplicación diseñada para dominar el uso de los Hooks estándar de React y la creación de Custom Hooks.

* **Demo en vivo:** [https://react-hooks-app-ochre.vercel.app/](https://react-hooks-app-ochre.vercel.app/)
* **Tecnologías:** React, Vite, Bootstrap.

**Características Clave:**
* **useState & useEffect:** Ejemplos complejos de gestión de estado y efectos secundarios.
* **useContext:** Implementación de un sistema de login simple para gestión de estado global.
* **useReducer:** Gestión de estados complejos (ej: lista de tareas TODO).
* **Custom Hooks:** Creación de hooks reutilizables para formularios (`useForm`), peticiones HTTP (`useFetch`) y contadores (`useCounter`).
* **Optimizaciones:** Uso de `useMemo` y `useCallback` para mejorar el rendimiento y evitar renderizados innecesarios.

---

## 🦸‍♂️ 05-Heroes App: SPA con Rutas y Protección

Una Single Page Application (SPA) completa que simula una enciclopedia de superhéroes de DC y Marvel. Este proyecto marca la transición hacia aplicaciones más estructuradas.

* **Frontend Demo:** [https://05-heroes-app.vercel.app/](https://05-heroes-app.vercel.app/)
* **Backend API:** [https://react-heroes-backend-br1b.onrender.com](https://react-heroes-backend-br1b.onrender.com)

**Arquitectura y Funcionalidades:**
* **React Router DOM v6:** Manejo avanzado de rutas, parámetros por URL y redirecciones.
* **Rutas Privadas y Públicas:** Sistema de protección de rutas que impide el acceso a usuarios no autenticados y mantiene el historial de navegación.
* **Búsqueda:** Implementación de Query Parameters para filtrar héroes.
* **Diseño:** UI moderna y responsiva utilizando librerías de componentes.

**Backend (Proyecto 06):**
Para dar soporte real a esta aplicación, se desarrolló un backend dedicado en **NestJS** alojado en Render, que provee la información de los héroes mediante una API RESTful.

---

## 🛒 07-Teslo Shop: E-commerce Full Stack

El proyecto más ambicioso del portafolio: una tienda en línea completa con autenticación, base de datos real y gestión de productos. Se ha migrado de una arquitectura local a una arquitectura **Cloud Native**.

### 🏗 Arquitectura del Despliegue

La aplicación se ha dividido en tres servicios conectados entre sí:

1.  **Frontend (React + Vite):** Alojado en **Vercel**.
2.  **Backend (NestJS):** Alojado en **Render**.
3.  **Base de Datos (PostgreSQL):** Alojada en **Neon Tech**.

### 1. Base de Datos (Neon) 🐘
* **Motor:** PostgreSQL 14.
* **Seguridad:** Conexión forzada mediante SSL (`sslmode=require`).
* **Datos:** Poblados mediante el endpoint de SEED del backend una vez desplegado.

### 2. Backend - API Rest (Render) ⚙️
El backend (`/backend-teslo-shop`) se despliega como un *Web Service* en Render.

* **Build Command:** `yarn install && yarn run build`
* **Start Command:** `yarn start:dev` (Ejecuta la versión compilada en producción).
* **Configuración SSL:** Se ajustó la configuración de TypeORM en `app.module.ts` para aceptar certificados SSL de Neon cuando el entorno es `prod`.

### 3. Frontend - Cliente Web (Vercel) 🛍️
El cliente web (`/teslo-shop`) se despliega en la red Edge de Vercel.

* **Root Directory:** `07-teslo-shop/teslo-shop`.

---

### 📝 Notas Generales de Despliegue

* **Cold Starts:** Los servicios backend alojados en el plan gratuito de Render pueden entrar en suspensión tras 15 minutos de inactividad. La primera petición puede tardar hasta 60 segundos en responder.
* **CI/CD:** Todos los proyectos cuentan con despliegue continuo (Continuous Deployment) conectado al repositorio de GitHub.
