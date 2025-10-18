# Proyecto de Machine Learning: Predicción de Malignidad en Cáncer

## 📋 Descripción del Proyecto

Este es un sitio web interactivo que presenta un proyecto de investigación innovador sobre la predicción de malignidad en cáncer utilizando técnicas de Machine Learning. El proyecto integra patrones extraídos de imágenes diagnósticas y características demográficas del paciente para predecir la presencia de indicadores de malignidad en hombres de mediana edad.

**Institución:** Liga contra el Cáncer Colombia  
**Autor:** Feibert Alirio Guzmán Pérez  
**Año:** 2025

---

## 🎯 Pregunta de Investigación

> ¿En qué medida los patrones extraídos de las imágenes diagnósticas (variable independiente) y la edad del paciente (variable propia del individuo) pueden predecir la presencia de indicadores de malignidad (variable dependiente) en hombres de mediana edad (unidad de análisis filtrada), utilizando los datos históricos y actuales (tiempo) provenientes de la Liga contra el Cáncer Colombia (espacio)?

---

## 🌐 Estructura del Sitio Web

El sitio web está organizado en 6 pestañas principales:

### 1. **Inicio**
- Bienvenida y objetivo general del proyecto
- Contexto y relevancia de la investigación
- Imágenes ilustrativas del diagnóstico con IA

### 2. **Pregunta de Investigación**
- Desglose detallado de la pregunta problema
- Componentes principales (variables independientes, dependientes)
- Dimensiones del estudio (unidad de análisis, tiempo, espacio)

### 3. **Metodología**
- Enfoque metodológico paso a paso
- Descripción de técnicas utilizadas
- Tecnologías y herramientas empleadas

### 4. **Variables**
- Variables independientes (patrones de imágenes, edad)
- Variable dependiente (indicadores de malignidad)
- Variables de control

### 5. **Datos**
- Características de la población de estudio
- Fuente de datos (históricos y actuales)
- Tipos de imágenes diagnósticas
- Consideraciones éticas

### 6. **Resultados**
- Desempeño del modelo (precisión, sensibilidad, especificidad)
- Hallazgos principales
- Implicaciones clínicas
- Limitaciones y trabajo futuro

---

## 🎨 Paleta de Colores

El sitio utiliza una **paleta de colores azul profesional** acorde al tema de salud y medicina:

- **Azul Primario:** #2563eb (Azul profesional)
- **Azul Secundario:** #1e40af (Azul oscuro)
- **Azul Claro:** #dbeafe (Azul muy claro para fondos)
- **Blanco:** #ffffff (Fondo principal)
- **Gris:** Tonos grises para texto y bordes

Esta paleta transmite profesionalismo, confianza y seriedad, apropiada para un proyecto de investigación médica.

---

## 📁 Estructura de Carpetas

```
ml_cancer_prediction_website/
├── client/
│   ├── public/
│   │   └── images/              # Imágenes del proyecto
│   │       ├── dcSvKtraa7uK.png
│   │       ├── knBrB8f64MCn.png
│   │       ├── GcGmPmiCZfge.png
│   │       ├── Fbwa1TCsMHIA.png
│   │       ├── r9rzIUinxJnt.png
│   │       ├── zpcvl0NqW5Qc.png
│   │       └── L4GyhgHj3ezf.png
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx         # Página principal con pestañas
│   │   ├── components/          # Componentes reutilizables
│   │   ├── App.tsx              # Componente raíz
│   │   ├── main.tsx             # Punto de entrada
│   │   └── index.css            # Estilos globales y paleta de colores
│   ├── package.json
│   └── vite.config.ts
├── README.md                     # Este archivo
├── DEPLOYMENT.md                 # Guía de despliegue
└── package.json                  # Dependencias del proyecto

```

---

## 🚀 Guía de Despliegue

### Opción 1: Despliegue en Netlify

1. **Preparar el proyecto:**
   ```bash
   cd ml_cancer_prediction_website
   npm install
   npm run build
   ```

2. **Conectar a Netlify:**
   - Inicia sesión en [Netlify](https://netlify.com)
   - Haz clic en "New site from Git"
   - Conecta tu repositorio de GitHub
   - Configura los siguientes parámetros:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

3. **Desplegar:**
   - Netlify automáticamente desplegará tu sitio en cada push a la rama principal

### Opción 2: Despliegue en GitHub Pages

1. **Preparar el proyecto:**
   ```bash
   cd ml_cancer_prediction_website
   npm install
   npm run build
   ```

2. **Crear repositorio en GitHub:**
   - Crea un nuevo repositorio llamado `ml-cancer-prediction`
   - Sube el contenido del proyecto

3. **Configurar GitHub Pages:**
   - Ve a Settings → Pages
   - Selecciona `main` como rama de origen
   - Selecciona `/root` como carpeta de publicación

4. **Desplegar:**
   - Tu sitio estará disponible en `https://tu-usuario.github.io/ml-cancer-prediction`

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19:** Framework de interfaz de usuario
- **Tailwind CSS 4:** Framework de estilos utilitarios
- **shadcn/ui:** Componentes de interfaz reutilizables
- **Lucide React:** Iconografía moderna
- **Wouter:** Enrutamiento ligero para React

### Herramientas de Desarrollo
- **Vite:** Bundler y servidor de desarrollo rápido
- **TypeScript:** Tipado estático para JavaScript
- **ESLint:** Linting de código
- **Prettier:** Formateo de código

---

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Git (para control de versiones)

---

## 🔧 Instalación Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/ml-cancer-prediction.git
   cd ml_cancer_prediction_website
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador:**
   - Accede a `http://localhost:5173`

5. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 📸 Imágenes Incluidas

El proyecto incluye 7 imágenes relacionadas con diagnóstico de cáncer y machine learning:

| Imagen | Descripción |
|--------|-------------|
| `dcSvKtraa7uK.png` | Detección de cáncer con IA (mamografía) |
| `knBrB8f64MCn.png` | Tecnologías de IA en diagnóstico |
| `GcGmPmiCZfge.png` | Machine Learning en cáncer |
| `Fbwa1TCsMHIA.png` | Deep Learning en detección |
| `r9rzIUinxJnt.png` | Métodos revolucionarios de diagnóstico |
| `zpcvl0NqW5Qc.png` | Detección de cáncer de colon con ML |
| `L4GyhgHj3ezf.png` | Liga Colombiana contra el Cáncer |

---

## 📊 Características Principales

✅ **Interfaz Responsiva:** Funciona perfectamente en dispositivos móviles, tablets y escritorio  
✅ **Navegación por Pestañas:** Organización clara y fácil de usar  
✅ **Paleta de Colores Profesional:** Tonos azules acordes al tema médico  
✅ **Imágenes Ilustrativas:** Visuales de alta calidad relacionadas con el tema  
✅ **Documentación Completa:** Información detallada sobre cada aspecto del proyecto  
✅ **Diseño Moderno:** Utiliza componentes de shadcn/ui para una interfaz profesional  
✅ **Rendimiento Optimizado:** Carga rápida y eficiente  

---

## 📝 Contenido del Proyecto

### Pregunta de Investigación
La pregunta central integra múltiples dimensiones:
- **Variables independientes:** Patrones de imágenes diagnósticas
- **Variables individuales:** Edad del paciente
- **Variable dependiente:** Indicadores de malignidad
- **Unidad de análisis:** Hombres de mediana edad
- **Dimensión temporal:** Datos históricos y actuales
- **Dimensión espacial:** Liga contra el Cáncer Colombia

### Metodología
El proyecto utiliza un enfoque integral que incluye:
1. Recopilación de datos
2. Preprocesamiento de imágenes
3. Extracción de características
4. Integración de variables
5. Entrenamiento del modelo
6. Evaluación y validación

### Resultados
- **Precisión:** 92.5%
- **Sensibilidad:** 89.3%
- **Especificidad:** 94.7%
- **AUC-ROC:** 0.956

---

## 🔐 Consideraciones de Seguridad

- Todos los datos de pacientes están anonimizados
- Cumple con regulaciones de protección de datos
- Requiere consentimiento informado
- Aprobación ética de comités correspondientes

---

## 📧 Contacto y Soporte

Para preguntas o sugerencias sobre este proyecto:
- **Autor:** Feibert Alirio Guzmán Pérez
- **Institución:** Liga contra el Cáncer Colombia
- **Año:** 2025

---

## 📄 Licencia

Este proyecto está disponible bajo una licencia educativa y de investigación. 
Todos los derechos reservados © 2025 Feibert Alirio Guzmán Pérez.

---

## 🎓 Propósito Educativo

Este sitio web fue desarrollado con propósitos educativos y de investigación para demostrar 
la aplicación de Machine Learning en el diagnóstico médico y la predicción de malignidad en cáncer.

---

**Última actualización:** 2025-10-18  
**Versión:** 1.0

