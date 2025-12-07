# Portfolio - Stephanie Poleo Ruiz

## Data Engineer & Full-Stack Developer

Portfolio profesional desarrollado en Angular con un diseño moderno y tecnológico en tema oscuro.

### 🚀 Características

- **Diseño Single Page**: Una sola página con scroll suave entre secciones
- **Header Fijo**: Navegación siempre visible con efecto glassmorphism
- **Tema Oscuro Tecnológico**: Diseño elegante con gradientes y efectos visuales
- **Responsive**: Adaptado para todos los dispositivos
- **Animaciones**: Transiciones suaves y efectos hover
- **Secciones**:
  - Hero/About: Presentación con imagen de perfil y badges tecnológicos
  - Skills & Credentials: Credenciales profesionales y expertise técnico
  - Experience: Línea de tiempo con experiencia profesional
  - Contact: Formulario de contacto e información

### 🎨 Paleta de Colores

- **Primario**: `#6366f1` (Indigo)
- **Secundario**: `#8b5cf6` (Violeta)
- **Accent**: `#ec4899` (Rosa)
- **Background**: `#0a0f1e` (Azul oscuro profundo)
- **Texto**: `#e2e8f0` (Gris claro)

### 🛠️ Tecnologías

- Angular 19+
- TypeScript
- SCSS
- Standalone Components

### 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve

# Abrir en navegador
# http://localhost:4200
```

### 🏗️ Build para Producción

```bash
# Construir aplicación
ng build

# Los archivos estarán en dist/portfolio-angular
```

### 📝 Personalización

#### Actualizar Información Personal

1. **Hero Section** (`src/app/components/hero/hero.html`):

   - Edita tu nombre, descripción, ubicación
   - Actualiza los links de redes sociales

2. **Skills Section** (`src/app/components/skills/skills.html`):

   - Modifica las tecnologías y herramientas
   - Actualiza las categorías de expertise

3. **Experience Section** (`src/app/components/experience/experience.html`):

   - Agrega o edita tus posiciones profesionales
   - Actualiza fechas y descripciones

4. **Contact Section** (`src/app/components/contact/contact.html`):
   - Cambia el email de contacto
   - Actualiza links de redes sociales

#### Cambiar Imagen de Perfil

Reemplaza el archivo `public/assets/profile.svg` con tu foto (puede ser JPG, PNG o SVG):

- Tamaño recomendado: 500x500px
- Formato: Circular para mejor efecto

#### Modificar Colores

Edita las variables en `src/styles.scss`:

```scss
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #ec4899;
  // ... más variables
}
```

### 📱 Secciones

#### Header

- Logo con tu nombre
- Navegación con scroll suave
- Fijo en la parte superior

#### Hero/About

- Presentación principal
- Imagen de perfil con efecto glow
- Badges de tecnologías
- Botones de contacto
- Estadísticas profesionales

#### Skills & Credentials

- Credenciales profesionales en cards
- Expertise técnico categorizado
- Tags interactivos con tecnologías

#### Experience

- Timeline vertical con experiencias
- Cards con información detallada
- Sección de educación

#### Contact

- Información de contacto
- Links a redes sociales
- Formulario de contacto
- Footer con información adicional

### 🎯 Próximas Mejoras

- [ ] Integrar formulario con backend
- [ ] Agregar sección de proyectos
- [ ] Implementar blog
- [ ] Agregar animaciones más complejas
- [ ] Modo claro/oscuro toggle
- [ ] Internacionalización (ES/EN)

### 📄 Licencia

Este proyecto es de código abierto y puede ser usado como plantilla para tu propio portfolio.

### 👩‍💻 Autor

**Stephanie Poleo Ruiz**

- GitHub: [@stephpoleo](https://github.com/stephpoleo)
- LinkedIn: [Stephanie Poleo Ruiz](https://www.linkedin.com/in/stephanie-poleo-ruiz)

---

Desarrollado con ❤️ usando Angular
