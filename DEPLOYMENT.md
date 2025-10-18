# Guía de Despliegue - ML Cancer Prediction Website

## 📦 Preparación del Proyecto

Antes de desplegar, asegúrate de que el proyecto esté completamente configurado:

```bash
# 1. Instalar dependencias
npm install

# 2. Compilar para producción
npm run build

# 3. Verificar que la carpeta 'dist' se ha creado
ls -la dist/
```

---

## 🌐 Opción 1: Despliegue en Netlify (Recomendado)

### Paso 1: Preparar el Repositorio en GitHub

```bash
# Inicializar git si no lo has hecho
git init
git add .
git commit -m "Initial commit: ML Cancer Prediction Website"

# Crear repositorio en GitHub y hacer push
git branch -M main
git remote add origin https://github.com/tu-usuario/ml-cancer-prediction.git
git push -u origin main
```

### Paso 2: Conectar a Netlify

1. **Visita Netlify:**
   - Accede a https://netlify.com
   - Inicia sesión con tu cuenta (o crea una nueva)

2. **Crear nuevo sitio:**
   - Haz clic en "New site from Git"
   - Selecciona "GitHub" como proveedor
   - Autoriza Netlify para acceder a tus repositorios
   - Selecciona el repositorio `ml-cancer-prediction`

3. **Configurar parámetros de compilación:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 o superior (opcional, Netlify usa la recomendada)

4. **Desplegar:**
   - Haz clic en "Deploy site"
   - Netlify compilará y desplegará automáticamente

### Paso 3: Configuración Personalizada (Opcional)

Para un dominio personalizado:

1. Ve a **Site settings** → **Domain management**
2. Haz clic en "Add custom domain"
3. Ingresa tu dominio personalizado
4. Sigue las instrucciones para configurar los registros DNS

---

## 🐙 Opción 2: Despliegue en GitHub Pages

### Paso 1: Configurar el Repositorio

```bash
# Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit: ML Cancer Prediction Website"
git branch -M main
git remote add origin https://github.com/tu-usuario/ml-cancer-prediction.git
git push -u origin main
```

### Paso 2: Actualizar vite.config.ts

Si despliegas en una ruta específica (no en la raíz), actualiza:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/ml-cancer-prediction/',  // Si el repo es 'ml-cancer-prediction'
})
```

### Paso 3: Compilar para GitHub Pages

```bash
npm run build
```

### Paso 4: Configurar GitHub Pages

1. **Ve a tu repositorio en GitHub**
2. **Settings** → **Pages**
3. **Source:** Selecciona "Deploy from a branch"
4. **Branch:** Selecciona `main` y `/root`
5. **Guarda los cambios**

### Paso 5: Despliegue Automático

Ahora, cada vez que hagas push a la rama `main`, GitHub Pages se actualizará automáticamente.

Tu sitio estará disponible en:
```
https://tu-usuario.github.io/ml-cancer-prediction/
```

---

## 🔧 Opción 3: Despliegue Manual en Servidor Propio

### Requisitos

- Servidor web (Apache, Nginx, etc.)
- Acceso SSH al servidor
- Node.js instalado (para compilación local)

### Pasos

1. **Compilar localmente:**
   ```bash
   npm run build
   ```

2. **Transferir archivos:**
   ```bash
   # Usando SCP
   scp -r dist/* usuario@tu-servidor.com:/var/www/ml-cancer-prediction/
   ```

3. **Configurar servidor web:**

   **Para Nginx:**
   ```nginx
   server {
       listen 80;
       server_name tu-dominio.com;

       root /var/www/ml-cancer-prediction;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache para archivos estáticos
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

   **Para Apache:**
   ```apache
   <Directory /var/www/ml-cancer-prediction>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </Directory>
   ```

4. **Reiniciar servidor:**
   ```bash
   # Nginx
   sudo systemctl restart nginx

   # Apache
   sudo systemctl restart apache2
   ```

---

## 🔒 Consideraciones de Seguridad

### Headers de Seguridad

Asegúrate de incluir estos headers en tu servidor:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

### HTTPS

- **Netlify:** Proporciona certificado SSL automáticamente
- **GitHub Pages:** Proporciona certificado SSL automáticamente
- **Servidor propio:** Usa Let's Encrypt (certbot)

```bash
# Instalar certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtener certificado
sudo certbot certonly --nginx -d tu-dominio.com
```

---

## 📊 Monitoreo Post-Despliegue

### Verificar que el sitio funciona

```bash
# Verificar que el sitio es accesible
curl -I https://tu-dominio.com

# Verificar que todas las imágenes cargan correctamente
curl -I https://tu-dominio.com/images/dcSvKtraa7uK.png
```

### Herramientas de Monitoreo

- **Google Analytics:** Para rastrear visitantes
- **Lighthouse:** Para auditar rendimiento
- **Uptime Robot:** Para monitoreo de disponibilidad

---

## 🐛 Solución de Problemas

### Problema: Las imágenes no cargan

**Solución:**
- Verifica que las imágenes están en `client/public/images/`
- Asegúrate de que los nombres de archivo coinciden exactamente
- Comprueba que las rutas en el código son `/images/nombre.png`

### Problema: Las pestañas no funcionan

**Solución:**
- Limpia la caché del navegador (Ctrl+Shift+Delete)
- Verifica que React y Wouter están correctamente importados
- Revisa la consola del navegador para errores

### Problema: Estilos no se aplican

**Solución:**
- Asegúrate de que Tailwind CSS está compilado (`npm run build`)
- Verifica que `index.css` se importa en `main.tsx`
- Limpia la caché: `npm run clean && npm install`

### Problema: Error 404 en rutas

**Solución:**
- Configura el servidor para redirigir todas las rutas a `index.html`
- En Netlify: Crea un archivo `_redirects` en `public/`
  ```
  /* /index.html 200
  ```

---

## 📈 Optimización Post-Despliegue

### Mejorar Rendimiento

1. **Comprimir imágenes:**
   ```bash
   # Usar herramientas como ImageOptim o TinyPNG
   ```

2. **Minificar CSS/JS:**
   - Vite lo hace automáticamente en `npm run build`

3. **Lazy loading para imágenes:**
   ```html
   <img src="/images/..." loading="lazy" />
   ```

### Mejorar SEO

Actualiza `index.html` con meta tags:

```html
<meta name="description" content="Proyecto de Machine Learning para predicción de malignidad en cáncer">
<meta name="keywords" content="machine learning, cáncer, diagnóstico, IA">
<meta name="author" content="Feibert Alirio Guzmán Pérez">
<meta property="og:title" content="ML Cancer Prediction">
<meta property="og:description" content="Predicción de Malignidad mediante Machine Learning">
<meta property="og:image" content="https://tu-dominio.com/images/dcSvKtraa7uK.png">
```

---

## 🔄 Actualizar el Sitio

### Después de realizar cambios:

```bash
# 1. Hacer cambios en el código
# 2. Compilar
npm run build

# 3. Hacer commit y push (para Netlify/GitHub Pages)
git add .
git commit -m "Descripción de cambios"
git push origin main

# 4. El sitio se actualizará automáticamente
```

---

## 📞 Soporte

Si encuentras problemas durante el despliegue:

1. **Revisa los logs:**
   - Netlify: Dashboard → Deploys → Logs
   - GitHub Pages: Actions → Workflow runs

2. **Verifica la configuración:**
   - Asegúrate de que todos los archivos están presentes
   - Comprueba que las dependencias están instaladas

3. **Contacta al autor:**
   - Feibert Alirio Guzmán Pérez
   - Liga contra el Cáncer Colombia

---

**Última actualización:** 2025-10-18  
**Versión:** 1.0

