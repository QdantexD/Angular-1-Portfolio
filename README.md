# 🎨 Aplicación Angular de Personalización Avanzada

Una aplicación web compleja y avanzada construida con Angular 17, que incluye un sistema completo de personalización del frontend con temas, colores, layouts y configuraciones avanzadas. Esta aplicación demuestra las capacidades modernas de desarrollo frontend con Angular, Material Design y librerías avanzadas.

---

## 👨‍💻 Desarrollador

**🎯 Desarrollado completamente por: Eddi Andreé Salazar Matos**

Este proyecto fue diseñado, desarrollado e implementado íntegramente por **Eddi Andreé Salazar Matos** como demostración profesional de habilidades avanzadas en desarrollo frontend con Angular 17, TypeScript, Material Design y tecnologías modernas.

**📋 Información del Proyecto:**
- **Versión**: 2.1.0
- **Última actualización**: Noviembre 2024
- **Estado**: ✅ Producción Ready
- **Autor**: Eddi Andreé Salazar Matos
- **Tipo**: Single Page Application (SPA)
- **Propósito**: Demostración de habilidades y portfolio profesional

---

## 📖 Descripción

Esta aplicación es una demostración completa de desarrollo frontend avanzado, mostrando:
- Arquitectura de componentes escalable
- Integración de múltiples librerías modernas
- Sistema de personalización completo
- Efectos visuales y animaciones avanzadas
- Experiencia de usuario optimizada
- Código limpio y mantenible

## 🚀 Características

### Funcionalidades Principales

- **Dashboard Interactivo Avanzado**: 
  - Panel de control con estadísticas animadas
  - Widgets arrastrables (Drag & Drop)
  - Gráficos interactivos con Chart.js
  - Animaciones escalonadas al cargar
  
- **Sistema de Personalización Completo**:
  - Temas claro/oscuro con transiciones suaves
  - Personalización de colores en tiempo real
  - Presets de colores predefinidos
  - Selector de layouts (Grid, Lista, Compacto)
  - Configuración de densidad (Cómodo, Compacto, Espacioso)
  
- **Efectos Visuales Modernos**:
  - Glassmorphism (efecto vidrio)
  - Gradientes animados
  - Neumorphism
  - Hover effects avanzados
  - Microinteracciones
  
- **Componentes Avanzados**:
  - Command Palette (Ctrl+K / Cmd+K)
  - Quick Actions Menu
  - Toast Notifications
  - Gráficos interactivos
  - Drag & Drop para widgets
  
- **Gestión de Perfil**: Edición completa de información de usuario
- **Configuración Avanzada**: Panel de ajustes con múltiples opciones
- **Interfaz Moderna**: Diseño Material Design con animaciones suaves
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Persistencia**: Guarda preferencias en localStorage

### Componentes Principales

- **Header**: Barra de navegación con gradiente animado y menú de usuario
- **Sidebar**: Menú lateral con navegación y animaciones
- **Dashboard**: Panel principal con estadísticas, widgets arrastrables y gráficos
- **Profile**: Gestión de perfil de usuario con formularios reactivos
- **Settings**: Configuración completa de la aplicación
- **Theme Customizer**: Panel flotante para personalización de temas
- **Command Palette**: Búsqueda rápida de comandos (Ctrl+K)
- **Quick Actions**: Menú de acciones rápidas flotante
- **Chart Widget**: Componente de gráficos interactivos
- **Toast Notifications**: Sistema de notificaciones elegante
- **Widgets**: Componentes reutilizables (Stats Cards, Widget Cards)
- **Color Picker**: Selector de colores personalizado

### Servicios

- **ThemeService**: Gestión de temas y colores
- **PersonalizationService**: Configuraciones de personalización
- **UserService**: Gestión de datos de usuario

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 9 o superior) o yarn
- Angular CLI 17

## 🛠️ Instalación

1. **Instalar dependencias**:
```bash
npm install
```

2. **Iniciar el servidor de desarrollo**:
```bash
npm start
```

3. **Abrir en el navegador**:
La aplicación estará disponible en `http://localhost:4200`

### Atajos de Teclado

- **Ctrl+K / Cmd+K**: Abrir Command Palette
- **Escape**: Cerrar Command Palette o modales
- **Flechas ↑↓**: Navegar en Command Palette
- **Enter**: Ejecutar comando seleccionado

### Página de Demo

Visita `/demo` para ver un showcase completo de todas las características:
- Grid interactivo de funcionalidades
- Controles rápidos de personalización
- Tour guiado
- Demostración de todas las características

### 🌐 Demo en Vivo (GitHub Pages)

Si el proyecto está desplegado en GitHub Pages, puedes verlo en:
```
https://[tu-usuario].github.io/Angular-1/
```

**Nota**: Reemplaza `[tu-usuario]` con tu nombre de usuario de GitHub.

## 📦 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run watch` - Compila y observa cambios
- `npm test` - Ejecuta las pruebas unitarias

## 🎨 Personalización

### Cambiar Tema

1. Haz clic en el icono de tema en el header (🌙/☀️)
2. O ve a Configuración > Apariencia > Tema

### Personalizar Colores

1. Haz clic en el botón flotante de paleta (🎨) en la esquina inferior derecha
2. Selecciona un preset de colores o personaliza manualmente
3. Los cambios se aplican instantáneamente

### Cambiar Layout

1. Ve a Configuración > Apariencia > Layout
2. Selecciona entre Grid, Lista o Compacto

## 📁 Estructura del Proyecto

```
Angular-1/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── header/          # Header con gradiente animado
│   │   │   ├── sidebar/         # Menú lateral responsive
│   │   │   ├── theme-customizer/# Personalizador de temas
│   │   │   ├── widget-card/     # Cards de widgets
│   │   │   ├── stats-card/      # Cards de estadísticas animadas
│   │   │   ├── chart-widget/    # Componente de gráficos
│   │   │   ├── command-palette/ # Command Palette (Ctrl+K)
│   │   │   ├── quick-actions/   # Menú de acciones rápidas
│   │   │   ├── color-picker/    # Selector de colores
│   │   │   ├── layout-selector/ # Selector de layouts
│   │   │   └── toast/           # Componente de toasts
│   │   ├── pages/               # Páginas principales
│   │   │   ├── dashboard/       # Dashboard interactivo
│   │   │   ├── demo/            # Página de demostración
│   │   │   ├── profile/         # Perfil de usuario
│   │   │   └── settings/        # Configuración
│   │   ├── services/            # Servicios
│   │   │   ├── theme.service.ts
│   │   │   ├── personalization.service.ts
│   │   │   └── user.service.ts
│   │   ├── shared/              # Módulos compartidos
│   │   │   └── material.module.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/                  # Recursos estáticos
│   ├── styles.scss              # Estilos globales
│   ├── index.html
│   └── main.ts
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions - Deploy automático
├── CHANGELOG.md                 # Historial de cambios
├── DEMO_GUIDE.md                # Guía de demostración
├── SECURITY.md                  # Notas de seguridad
├── AUTHOR.md                    # Información completa del desarrollador
├── GITHUB_PAGES.md              # Guía de despliegue en GitHub Pages
├── README.md                    # Este archivo (documentación principal)
├── 404.html                     # Manejo de rutas para GitHub Pages
├── .nojekyll                    # Desactiva Jekyll en GitHub Pages
├── package.json                 # Dependencias
├── angular.json                 # Configuración de Angular
└── tsconfig.json                # Configuración de TypeScript
```

## 🎯 Tecnologías Utilizadas

### Core Framework
- **Angular 17.3.0**: Framework principal
- **TypeScript 5.4.5**: Lenguaje de programación
- **RxJS 7.8.1**: Programación reactiva
- **Zone.js 0.14.8**: Detección de cambios

### UI Libraries
- **Angular Material 17.3.0**: Componentes UI
- **Angular CDK 17.3.0**: Drag & Drop y utilidades
- **Material Icons**: Iconografía

### Data Visualization
- **Chart.js 4.4.0**: Motor de gráficos
- **ng2-charts 5.0.0**: Wrapper de Chart.js para Angular

### Utilities
- **ngx-toastr 17.0.2**: Notificaciones toast
- **ngx-spinner 17.0.0**: Spinners de carga
- **AOS 2.3.4**: Animaciones al hacer scroll (preparado)
- **Swiper 11.0.5**: Carousel/Slider (preparado)

### Build Tools
- **Angular CLI 17.3.0**: Herramientas de desarrollo
- **Angular DevKit Build Angular 17.3.0**: Sistema de build

### Styling
- **SCSS**: Preprocesador CSS
- **CSS Variables**: Para temas dinámicos
- **Material Design**: Sistema de diseño

## 🔧 Configuración Avanzada

### Variables CSS Personalizables

Las variables CSS están definidas en `src/styles.scss`:

```scss
:root {
  --primary-color: #3f51b5;
  --secondary-color: #ff4081;
  --accent-color: #00bcd4;
  --background-color: #f5f5f5;
  --surface-color: #ffffff;
  --text-primary: #212121;
  --text-secondary: #757575;
}
```

### Agregar Nuevos Componentes

```bash
ng generate component components/nombre-componente
```

### Agregar Nuevos Servicios

```bash
ng generate service services/nombre-servicio
```

## 📱 Responsive Design

La aplicación es completamente responsive:
- **Desktop**: Sidebar siempre visible
- **Tablet**: Sidebar colapsable
- **Mobile**: Sidebar oculto por defecto, se muestra con toggle

## 💾 Persistencia de Datos

Todas las configuraciones se guardan automáticamente en `localStorage`:
- Preferencias de tema
- Colores personalizados
- Configuraciones de personalización
- Datos de usuario

## 🚀 Despliegue

### Compilar para Producción Local

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/angular-personalization-app`

### Despliegue en GitHub Pages

El proyecto está completamente configurado para desplegarse en GitHub Pages. Tienes dos opciones:

#### 🚀 Opción 1: Deploy Automático (Recomendado)

1. **Habilita GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings > Pages
   - En "Source", selecciona **"GitHub Actions"**
   - Guarda los cambios

2. **Haz push a la rama main**:
   ```bash
   git add .
   git commit -m "Preparar para GitHub Pages"
   git push origin main
   ```

3. **El workflow se ejecutará automáticamente** y desplegará tu aplicación en:
   ```
   https://[tu-usuario].github.io/Angular-1/
   ```

#### 📦 Opción 2: Deploy Manual

```bash
npm run deploy:gh-pages
```

Este comando compila y despliega la aplicación en la rama `gh-pages`.

**Nota**: Si tu repositorio tiene un nombre diferente a "Angular-1", actualiza el `baseHref` en `angular.json` y `package.json`.

📖 **Para más detalles, consulta [DEPLOY.md](DEPLOY.md)**

### Desplegar en GitHub Pages

El proyecto está configurado para GitHub Pages. Para desplegar:

#### Opción 1: Deploy Automático (Recomendado)

1. **Habilita GitHub Pages** en tu repositorio (Settings > Pages)
2. **Selecciona "GitHub Actions"** como fuente
3. **Haz push** a la rama `main` - el deploy será automático

El workflow de GitHub Actions (`.github/workflows/deploy.yml`) se ejecutará automáticamente.

#### Opción 2: Deploy Manual

```bash
# Instalar herramienta (solo la primera vez)
npm install -g angular-cli-ghpages

# Deploy
npm run deploy:gh-pages
```

#### Configuración

- **URL base**: `/Angular-1/` (ajusta según tu repositorio)
- **URL base**: `/Angular-1/` (ajusta según tu repositorio)
- **Archivo de configuración**: Ver `GITHUB_PAGES.md` para detalles completos

**📖 Guías de despliegue**:
- **⚡ Quick Start**: `DEPLOY_QUICK_START.md` - Despliegue rápido en 3 pasos
- **📚 Guía completa**: `GITHUB_PAGES.md` - Instrucciones detalladas

## 📝 Notas Técnicas

- La aplicación utiliza localStorage para persistir configuraciones
- Los temas y colores se aplican dinámicamente usando CSS Variables
- Todos los componentes son completamente reutilizables
- El código sigue las mejores prácticas de Angular
- Optimizado para rendimiento con lazy loading
- Animaciones GPU-accelerated para mejor performance
- Código modular y escalable

## 📊 Estadísticas del Proyecto

### Métricas de Desarrollo

- **Componentes**: 15+ componentes reutilizables
- **Páginas**: 4 páginas principales (Dashboard, Demo, Profile, Settings)
- **Servicios**: 3 servicios principales (Theme, Personalization, User)
- **Librerías**: 6 librerías modernas integradas
- **Líneas de código**: ~5000+ líneas de TypeScript/SCSS
- **Archivos TypeScript**: 30+ archivos
- **Archivos SCSS**: 20+ archivos de estilos
- **Tiempo de desarrollo**: Proyecto completo con todas las características avanzadas

### Detalles Técnicos

- **Framework**: Angular 17.3.0 (última versión estable)
- **Lenguaje**: TypeScript 5.4.5
- **Build Tool**: Angular CLI 17.3.0
- **Package Manager**: npm
- **Dependencias**: 13 dependencias principales
- **Dev Dependencies**: 5 herramientas de desarrollo
- **Tamaño del Bundle**: ~1.26 MB (optimizado)
- **Tiempo de Build**: ~10-12 segundos
- **Tiempo de Carga**: < 2 segundos

## 🎯 Características Implementadas

### ✅ Completadas

- [x] Dashboard interactivo con estadísticas animadas
- [x] Sistema de personalización completo (temas, colores, layouts)
- [x] Command Palette (Ctrl+K)
- [x] Drag & Drop para widgets
- [x] Gráficos interactivos (Chart.js)
- [x] Toast Notifications
- [x] Contadores animados
- [x] Página de Demo/Showcase
- [x] Quick Actions Menu
- [x] Efectos visuales modernos (Glassmorphism, Gradientes)
- [x] Responsive Design completo
- [x] Persistencia de configuraciones
- [x] Sistema de routing
- [x] Formularios reactivos
- [x] Validaciones de formularios

## 📚 Documentación Adicional

- **CHANGELOG.md**: Historial completo de cambios y versiones
- **DEMO_GUIDE.md**: Guía detallada para demostración
- **SECURITY.md**: Notas sobre seguridad y vulnerabilidades
- **DEPLOY.md**: Guía completa de despliegue en GitHub Pages
- **GITHUB_PAGES_SETUP.md**: Configuración rápida de GitHub Pages (5 minutos)
- **AUTHOR.md**: Información completa del desarrollador

## 📋 Información del Proyecto

### Datos del Proyecto

- **Nombre del Proyecto**: Angular Personalization App
- **Versión**: 2.1.0
- **Autor**: Eddi Andreé Salazar Matos
- **Fecha de Desarrollo**: Noviembre 2024
- **Tipo de Proyecto**: Aplicación Web SPA (Single Page Application)
- **Propósito**: Demostración de habilidades avanzadas en Angular y desarrollo frontend

### Estructura de Versiones

- **v1.0.0**: Versión inicial con funcionalidades básicas
- **v2.0.0**: Mejoras visuales y funcionales avanzadas
- **v2.1.0**: Mejoras de demostración y utilidad (versión actual)

### Características por Versión

**v2.1.0 (Actual)**
- ✅ Contadores animados en Stats Cards
- ✅ Sistema de toasts integrado en todas las acciones
- ✅ Página de Demo/Showcase completa
- ✅ Command Palette mejorado con más comandos
- ✅ Gráficos con datos realistas
- ✅ Actualización automática de datos
- ✅ Tour guiado integrado

**v2.0.0**
- ✅ Command Palette (Ctrl+K)
- ✅ Drag & Drop para widgets
- ✅ Gráficos interactivos
- ✅ Efectos visuales modernos
- ✅ Quick Actions Menu

**v1.0.0**
- ✅ Dashboard básico
- ✅ Sistema de temas
- ✅ Personalización de colores
- ✅ Páginas principales

## 🔗 Enlaces Útiles

- [Angular Documentation](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [Chart.js Documentation](https://www.chartjs.org/)
- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)

## 🤝 Contribuir

Este es un proyecto de demostración desarrollado por **Eddi Andreé Salazar Matos** para mostrar capacidades avanzadas de Angular. 

### Desarrollo Original

El desarrollo completo de este proyecto, incluyendo:
- Arquitectura y diseño
- Implementación de componentes
- Integración de librerías
- Estilos y animaciones
- Documentación

Fue realizado íntegramente por **Eddi Andreé Salazar Matos**.

### Contribuciones

Si deseas contribuir al proyecto, puedes:
- Agregar nuevas funcionalidades
- Mejorar el diseño
- Optimizar el rendimiento
- Agregar pruebas unitarias
- Reportar issues o sugerencias
- Mejorar la documentación

**Nota**: Todas las contribuciones deben mantener el crédito al desarrollador original.

## 📄 Licencia y Créditos

### Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

### Créditos y Autoría

**Desarrollador Principal**: Eddi Andreé Salazar Matos

Este proyecto fue desarrollado completamente por **Eddi Andreé Salazar Matos** como parte de su portfolio profesional. Todas las características, componentes, servicios y funcionalidades fueron diseñadas e implementadas por el autor.

### Reconocimiento de Tecnologías

Este proyecto utiliza las siguientes tecnologías de código abierto:
- Angular (Google)
- Angular Material (Google)
- Chart.js
- ngx-toastr
- Y otras librerías open source mencionadas en las dependencias

### Uso del Proyecto

Este proyecto puede ser usado como:
- Referencia de desarrollo Angular
- Ejemplo de implementación de características avanzadas
- Base para proyectos similares
- Material educativo

**Importante**: Al usar este proyecto, se debe mantener el crédito al desarrollador original: **Eddi Andreé Salazar Matos**.

## 👨‍💻 Desarrollador

### Información del Autor

**Nombre**: Eddi Andreé Salazar Matos  
**Rol**: Desarrollador Frontend Full Stack  
**Especialización**: Angular, TypeScript, UI/UX Design

### Sobre el Proyecto

Este proyecto fue desarrollado completamente por **Eddi Andreé Salazar Matos** como una demostración profesional de habilidades avanzadas en desarrollo frontend. El proyecto muestra competencia en:

#### Tecnologías y Habilidades Demostradas

✅ **Framework y Lenguajes**
- Angular 17.3.0 (Framework principal)
- TypeScript 5.4.5 (Lenguaje de programación)
- RxJS 7.8.1 (Programación reactiva)
- SCSS (Preprocesador CSS avanzado)

✅ **UI/UX Design**
- Material Design completo
- Diseño responsive (Mobile, Tablet, Desktop)
- Animaciones y microinteracciones
- Efectos visuales modernos (Glassmorphism, Gradientes)
- Sistema de temas avanzado

✅ **Integración de Librerías**
- Chart.js para visualización de datos
- ngx-toastr para notificaciones
- Angular CDK para Drag & Drop
- Integración exitosa de múltiples librerías

✅ **Arquitectura y Patrones**
- Arquitectura de componentes modular
- Servicios inyectables (Dependency Injection)
- Reactive Forms
- State Management con RxJS
- Routing y navegación

✅ **Características Avanzadas Implementadas**
- Command Palette (Ctrl+K) - Inspirado en VS Code
- Drag & Drop nativo
- Contadores animados
- Personalización en tiempo real
- Persistencia de datos
- Sistema de notificaciones

### Detalles del Desarrollo

- **Fecha de Inicio**: Noviembre 2024
- **Fecha de Finalización**: Noviembre 2024
- **Metodología**: Desarrollo iterativo con mejoras continuas
- **Versiones**: 2.1.0 (versión actual con todas las características)
- **Estado**: ✅ Completado y listo para producción

### Características Destacadas del Desarrollo

1. **Código Limpio y Mantenible**
   - Estructura modular y organizada
   - Componentes reutilizables
   - Servicios bien definidos
   - Comentarios y documentación

2. **Performance Optimizado**
   - Animaciones GPU-accelerated
   - Lazy loading preparado
   - Bundle optimizado
   - Carga rápida

3. **Experiencia de Usuario**
   - Interfaz intuitiva
   - Feedback inmediato
   - Animaciones suaves
   - Responsive design

4. **Extensibilidad**
   - Fácil agregar nuevos componentes
   - Sistema de temas extensible
   - Arquitectura escalable

### Certificación de Desarrollo

Este proyecto fue desarrollado íntegramente por **Eddi Andreé Salazar Matos**, demostrando:
- Dominio completo de Angular 17
- Habilidades avanzadas en TypeScript
- Conocimiento profundo de Material Design
- Capacidad para integrar múltiples librerías
- Habilidades en UI/UX Design
- Comprensión de arquitectura de software
- Buenas prácticas de desarrollo

---

## 🏆 Reconocimiento

**Desarrollado con ❤️ y dedicación por Eddi Andreé Salazar Matos**

Este proyecto representa un esfuerzo completo de desarrollo frontend, desde la concepción hasta la implementación de todas las características avanzadas. Cada línea de código, cada componente y cada característica fue diseñada e implementada por **Eddi Andreé Salazar Matos**.

### Contacto y Portfolio

Este proyecto forma parte del portfolio profesional de **Eddi Andreé Salazar Matos**, demostrando habilidades avanzadas en:
- Desarrollo Frontend con Angular
- Diseño de Interfaces de Usuario
- Integración de Tecnologías Modernas
- Arquitectura de Aplicaciones Escalables

---

**Proyecto de demostración profesional - Noviembre 2024**  
**Autor**: Eddi Andreé Salazar Matos  
**Versión**: 2.1.0  
**Licencia**: Código abierto para uso personal y educativo
