# Monorepo Fullstack Test

Este es un monorepo construido con Next.js 15, utilizando Turborepo para la gestión eficiente de los paquetes y aplicaciones. El monorepo incluye un backend y un frontend, ambos desarrollados con Next.js, y organizados con un paquete central llamado `@repo/core`, que contiene la lógica compartida.

##  Descripción del Proyecto

-   **Backend**: Implementado con Next.js 15, expone endpoints para manejar productos y carritos de compra.
-   **Frontend**: Desarrollado con Next.js 15, consume los endpoints del backend para mostrar productos y gestionar el carrito de compras.
-   **Core**: Contiene datos, configuraciones y lógica compartida entre el frontend y el backend.

##  Tecnologías Utilizadas

-   Next.js 15 (Frontend y Backend)
-   React 19
-   Turborepo (Monorepo Management)
-   TypeScript
-   Zustand (State Management)
-   TailwindCSS (Estilos)
-   ESLint & Prettier (Calidad de Código)

##  Scripts Disponibles (Raíz del Monorepo)

### ️ Desarrollo y Construcción

-   `npm run dev` → Ejecuta el frontend y el backend en modo desarrollo.
-   `npm run build` → Construye todas las aplicaciones dentro del monorepo.
-   `npm run build-backend` → Construye solo el backend.
-   `npm run build-frontend` → Construye solo el frontend.

##  Cómo Ejecutar el Proyecto

1.  Clonar el repositorio:

    ```bash
    git clone https://github.com/jhonortizgomez/monorepo-fullstack-test.git
    cd monorepo-fullstack-test
    ```

2.  Instalar dependencias:

    ```bash
    npm install
    ```

3.  Iniciar el entorno de desarrollo:

    ```bash
    npm run dev
    ```

##  Notas

-   Se recomienda usar Node.js 18+ para compatibilidad.
-   Este monorepo usa Turborepo, lo que mejora el rendimiento al compilar y ejecutar los proyectos.

##  Autor

Jhon Esteban Ortiz Gómez

##  Licencia

MIT