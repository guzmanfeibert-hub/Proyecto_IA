# Guía de Despliegue Corregida - ML Cancer Prediction Website

Este documento proporciona instrucciones actualizadas para desplegar el sitio web sin problemas de rutas de carpetas.

## ✅ Cambios Realizados

- **Rutas de Imágenes:** Se utilizan rutas absolutas `/images/` que funcionan correctamente con Vite
- **Configuración de Netlify:** Se incluye archivo `netlify.toml` con configuración optimizada
- **Configuración de GitHub Pages:** Se incluye workflow automático en `.github/workflows/deploy.yml`
- **Estructura de Carpetas:** Las imágenes están en `client/public/images/` y se sirven automáticamente

## 🚀 Despliegue en Netlify

### Opción 1: Despliegue Manual

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Construir el proyecto:**
   ```bash
   npm run build
   ```

3. **Descargar la carpeta `dist/public`:**
   - La carpeta generada contiene todos los archivos listos para despliegue
   - Incluye todas las imágenes en la carpeta `images/`

4. **Subir a Netlify:**
   - Ir a [Netlify](https://netlify.com)
   - Crear una nueva cuenta o iniciar sesión
   - Hacer clic en "Add new site" → "Deploy manually"
   - Arrastrar la carpeta `dist/public` al área de carga
   - ¡Listo! El sitio estará disponible en una URL de Netlify

### Opción 2: Despliegue Automático (Recomendado)

1. **Conectar repositorio Git:**
   - Subir el proyecto a GitHub
   - En Netlify, hacer clic en "New site from Git"
   - Seleccionar el repositorio
   - Configurar:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist/public`
   - Hacer clic en "Deploy"

2. **Despliegues automáticos:**
   - Cada vez que hagas push a la rama principal, Netlify construirá y desplegará automáticamente

## 🐙 Despliegue en GitHub Pages

### Opción 1: Usando el Workflow Automático

1. **Subir el proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/ml_cancer_prediction_website.git
   git push -u origin main
   ```

2. **Habilitar GitHub Pages:**
   - Ir a Settings del repositorio
   - Buscar "Pages" en el menú lateral
   - En "Source", seleccionar "Deploy from a branch"
   - Seleccionar rama "gh-pages" (se creará automáticamente)
   - Hacer clic en "Save"

3. **El workflow se ejecutará automáticamente:**
   - El archivo `.github/workflows/deploy.yml` construirá y desplegará automáticamente
   - El sitio estará disponible en `https://tu-usuario.github.io/ml_cancer_prediction_website`

### Opción 2: Despliegue Manual

1. **Construir el proyecto:**
   ```bash
   npm run build
   ```

2. **Subir la carpeta `dist/public` a GitHub Pages:**
   ```bash
   npm install -g gh-pages
   gh-pages -d dist/public
   ```

## 🔍 Verificación Post-Despliegue

Después de desplegar, verifica que:

1. ✅ El sitio carga correctamente
2. ✅ Todas las imágenes se muestran (especialmente la foto de Feibert en el footer)
3. ✅ Las pestañas funcionan correctamente
4. ✅ Los estilos CSS se aplican correctamente
5. ✅ No hay errores en la consola del navegador

## 🛠️ Solución de Problemas

### Las imágenes no cargan

**Causa:** Las rutas de imágenes pueden estar incorrectas en el entorno de despliegue.

**Solución:**
- Verificar que la carpeta `images/` esté en `dist/public/images/`
- Asegurarse de que los nombres de archivo coincidan exactamente (sensible a mayúsculas/minúsculas)
- Verificar en la consola del navegador si hay errores 404

### El sitio no se despliega correctamente

**Causa:** Puede haber problemas con la configuración de build.

**Solución:**
- Verificar que `npm run build` se ejecuta sin errores localmente
- Revisar los logs de despliegue en Netlify o GitHub Actions
- Asegurarse de que `dist/public` es el directorio de publicación correcto

### Las rutas de navegación no funcionan

**Causa:** Puede haber problemas con la configuración de enrutamiento.

**Solución:**
- En Netlify: El archivo `netlify.toml` redirige todas las rutas a `index.html`
- En GitHub Pages: Verificar que el repositorio es público
- Limpiar el caché del navegador (Ctrl+Shift+Delete)

## 📝 Notas Importantes

- **Rutas de Imágenes:** Todas las imágenes usan rutas absolutas `/images/` que funcionan en cualquier entorno
- **Caché de Navegador:** Las imágenes tienen caché de 1 año (31536000 segundos)
- **Seguridad:** Se incluyen headers de seguridad en `netlify.toml`
- **Año de Desarrollo:** El proyecto está marcado como 2025

## 👨‍💻 Información del Desarrollador

- **Desarrollador:** Feibert Alirio Guzmán Pérez
- **Institución:** Liga contra el Cáncer Colombia
- **Año:** 2025
- **Especialidad:** Machine Learning y Análisis de Imágenes Médicas

---

**Última actualización:** Octubre 18, 2025
**Versión:** 1.0 Final

