# Trivo University Landing Page

Una landing page moderna para Trivo University construida con Next.js 15, TypeScript y Tailwind CSS.

## Características

- 🎨 Diseño moderno y responsive
- 🚀 Construido con Next.js 15 y App Router
- 💅 Estilizado con Tailwind CSS
- 📱 Mobile-first design
- 🔍 Barra de búsqueda funcional
- 🎯 Cards de cursos interactivas
- 🌐 Listo para deploy en Vercel

## Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **React 19** - Biblioteca de UI

## Desarrollo Local

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Deploy en Vercel

### Opción 1: Deploy Automático desde GitHub

1. Sube tu código a un repositorio de GitHub
2. Ve a [Vercel](https://vercel.com)
3. Conecta tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Haz clic en "Deploy"

### Opción 2: Deploy Manual

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. En el directorio del proyecto, ejecuta:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

### Opción 3: Deploy desde Vercel Dashboard

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel configurará automáticamente el proyecto

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── CourseCard.tsx
    └── CoursesSection.tsx
```

## Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## Personalización

Para personalizar la landing page:

1. **Colores**: Modifica las clases de Tailwind en los componentes
2. **Contenido**: Actualiza los textos en `CoursesSection.tsx`
3. **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes
4. **Navegación**: Modifica los enlaces en `Header.tsx`

## Licencia

Este proyecto está bajo la Licencia MIT.
