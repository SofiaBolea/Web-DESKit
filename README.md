# Web-DESKit 🚀

Plataforma web interactiva para la comprensión, documentación y simulación de la arquitectura de **DESKit** (Simulador de Eventos Discretos en Java).

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

* **[Node.js](https://nodejs.org/)** (versión 18.0.0 o superior recomendada)
* **npm** (incluido habitualmente con Node.js) o cualquier otro gestor de paquetes (`yarn`, `pnpm`, `bun`).

---

## Instrucciones para Ejecutar la Plataforma en Consola

Sigue estos pasos en tu terminal/consola (PowerShell, Bash, CMD, etc.):

### 1. Abrir la consola en la carpeta del proyecto
Asegúrate de estar en la carpeta raíz del proyecto (`Web-DESKit`).

### 2. Instalar las dependencias *(solo la primera vez o si cambian los paquetes)*
Si es la primera vez que vas a ejecutar el proyecto o recién lo clonas, instala las dependencias necesarias:

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
Ejecuta el siguiente comando para levantar el servidor local:

```bash
npm run dev
```

### 4. Abrir la plataforma en el navegador
Una vez iniciado, abre tu navegador web e ingresa a:

👉 **[http://localhost:3000](http://localhost:3000)**

---

## Otros Comandos Disponibles

Puedes utilizar los siguientes comandos en la consola:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente (*Hot Reload*). |
| `npm run build` | Compila y optimiza la aplicación para producción. |
| `npm run start` | Inicia el servidor en modo producción (requiere haber ejecutado `npm run build` previamente). |
| `npm run lint` | Ejecuta el análisis estático de código con ESLint. |

---

## Estructura del Proyecto

```text
Web-DESKit/
├── public/                  # Diagramas e imágenes estáticas
├── src/
│   ├── app/                 # Rutas y páginas de la aplicación
│   ├── components/          # Componentes UI y secciones interactivas
│   │   ├── sections/        # Secciones (Flujos, Clases, Configuración XML, Ejemplos, Anexo)
│   │   └── ui/              # Componentes reutilizables (FlipCards, ZoomableImage, etc.)
│   └── data/                # Datos y ejemplos interactivos
├── package.json             # Dependencias y scripts de ejecución
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Guía de inicio y ejecución
```

---

## Tecnologías Utilizadas

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React** (iconos)
