# LVL Consulting - Dashboard & Management System

Plataforma administrativa para LVL Consulting, diseñada con una arquitectura moderna orientada a componentes. Este sistema permite la gestión de páginas web, recursos humanos, logística y configuración avanzada de formularios dinámicos a través de una interfaz de usuario limpia

## Tecnologías Principales

Este proyecto está construido con las herramientas más modernas del ecosistema frontend:

- **[React 18](https://reactjs.org/)** - Librería principal para la construcción de interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para un código más robusto y predecible.
- **[Vite](https://vitejs.dev/)** - Empaquetador y servidor de desarrollo ultrarrápido.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de estilos de utilidad para un diseño ágil y responsivo.
- **[React Router DOM](https://reactrouter.com/)** - Gestión de rutas y navegación SPA (Single Page Application).

## Arquitectura y Componentes Clave

El proyecto sigue una estructura modular y de buenas prácticas (Clean Code), separando la lógica de negocio del maquetado visual:

- **Layouts:** Diseño dividido (Split-Layout) para paneles de administración.
- **Navegación:** Menú lateral expansible (Acordeón) con memoria de estado basado en la URL.
- **Modales Reutilizables:** Componentes superpuestos (Overlays) con "State Lifting" para configuraciones complejas.
- **UI Kit Propio:** Iconografía SVG modular (`/assets` y componentes propios) y controles personalizados (Toggles, Checkboxes).

## Instalación y Configuración Local

Sigue estos pasos para levantar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18+ recomendada).

### Pasos

1. Clonar el repositorio:

   ```bash
   git clone [https://github.com/Cronolblade/lvl-consulting.git]

   ```

2. Entrar al directorio del proyecto:

   ```bash
   cd lvl-consulting

   ```

3. Instalar las dependencias:

   ```bash
   npm install

   ```

4. Levantar el servidor de desarrollo:

   ```bash
   npm run dev

   ```

5. Abrir el navegador en la ruta indicada en la terminal
   ```bash
   ➜  Local:   http://localhost:5173/
   ```

## 🗺️ Mapa de Rutas

La aplicación utiliza `react-router-dom` para la navegación. A continuación se detallan los puntos de acceso disponibles:

| Ruta                          | Componente           | Descripción                                               |
| :---------------------------- | :------------------- | :-------------------------------------------------------- |
| `/`                           | `Maps`               | Redirección automática a la página de registro.           |
| `/registro`                   | `VistaRegistro`      | Pantalla de acceso y creación de cuenta.                  |
| `/dashboard`                  | `VistaDashboard`     | Panel principal con métricas y resumen del sistema.       |
| `/paginas-webs`               | `VistaPaginasWebs`   | Listado general de sitios y servicios web.                |
| `/paginas-webs/administrador` | `VistaAdministrador` | Panel de gestión avanzada y configuración de formularios. |

---

## 📁 Estructura del Proyecto

La arquitectura del código sigue un enfoque modular, separando responsabilidades lógicas, visuales y de tipado. Todo el código fuente reside dentro del directorio `src/`.

```text
src/
 ├── assets/          # Recursos estáticos que no son procesados por React
 │   ├── images/      # Imágenes generales del proyecto (PNG, JPG, etc.)
 │   └── svg/         # Archivos vectoriales crudos
 │
 ├── components/      # Componentes reutilizables de UI
 │   ├── auth/        # Componentes relacionados a la autenticación (login, registro)
 │   ├── icons/       # Íconos SVG encapsulados en componentes React
 │   ├── layout/      # Componentes estructurales menores (botones del menú, cabeceras)
 │   └── views/       # Componentes modulares que componen las vistas principales
 │
 ├── data/            # Datos estáticos, mocks, constantes o configuraciones
 ├── hooks/           # Custom Hooks de React para abstraer lógica de negocio
 ├── layouts/         # Contenedores maestros de vistas (ej. DashboardLayout)
 ├── types/           # Definiciones globales de Tipos e Interfaces (TypeScript)
 ├── views/           # Páginas o vistas principales orquestadoras (las que se enrutan)
 │
 ├── App.tsx          # Punto de entrada de la aplicación y configuración de Rutas
 ├── index.css        # Archivo de estilos globales y directivas de Tailwind CSS
 └── main.tsx         # Inyección principal de React en el DOM

```
