# Mr. Movies

Mr. Movies es una aplicación desarrollada en React que permite visualizar una lista de series y películas, filtrarlas por año (mostrando únicamente películas del 2010 en adelante) y ver detalles adicionales. La aplicación utiliza React, Redux, Material-UI (MUI) y carga los datos desde un archivo JSON local.

## Instalación y Uso

### Requisitos Previos
- **Node.js**: Asegúrate de tener instalado Node.js. Si no lo tienes, puedes descargarlo desde [aquí](https://nodejs.org/).

### Pasos para Instalar y Ejecutar

1. **Clonar el Repositorio**
   
   Puedes clonar el repositorio usando Git o descargar el archivo manualmente.

   ```sh
   git clone https://github.com/EdwardCG1607/Movie.git
   cd mr-movies
   ```

2. **Ingresar a la carpeta Movie**
   
   Una vez clonado o descargado el archivo, entra a la carpeta `Movie` con el siguiente comando:

   ```sh
   cd Movie
   ```

3. **Abrir en Visual Studio Code**
   
   Se recomienda abrir el proyecto con Visual Studio Code para facilitar su desarrollo y edición.

4. **Instalar Dependencias**
   
   Ejecuta el siguiente comando en la terminal para instalar todas las dependencias necesarias:
   
   ```sh
   npm install
   ```
   
   Estos paquetes permiten el uso de React, Material-UI, Redux para el manejo de estado, Axios para peticiones HTTP y Vite para optimizar el desarrollo.

5. **Ejecutar la Aplicación**
   
   Para correr la aplicación, usa el siguiente comando:
   
   ```sh
   npm run dev
   ```
   
   Tras ejecutarlo, aparecerá una URL en la terminal. Ábrela en tu navegador para visualizar la aplicación.

## Estructura del Proyecto

```
mr-movies/
|-- src/
|   |-- components/  # Componentes reutilizables (Header, Footer, HeaderLogin)
|   |-- pages/       # Páginas principales (Home, Series, Movies, Login, Register, ForgotPassword)
|   |-- store/       # Configuración de Redux y manejo del estado global
|-- public/          # Archivos estáticos como el logo y el archivo JSON (sample.json)
```

## Funcionalidades Principales

### **Página de Login**
- Contiene dos campos de texto (usuario y contraseña).
- Incluye opciones para registrar y recuperar contraseña.
- El login es solo una maqueta y permite el acceso sin autenticación real, pero es obligatorio ingresar al menos un carácter en los campos para evitar una alerta.

### **Página de Inicio**
- Muestra dos tarjetas principales: **Series** y **Películas**.
- Cada tarjeta redirige a su respectiva página.

### **Página de Series**
- Lista de series filtradas por año.
- Posibilidad de seleccionar el tamaño de los resultados.
- Implementación de paginación con botones **"Siguiente"** y **"Anterior"**.
- Incorporación de un círculo de progreso.

### **Página de Películas**
- Lista de películas con las mismas funcionalidades que la página de series.

### **Carta de Detalles**
- Al hacer clic en una serie o película, se abre un popup con información adicional (título, descripción, año de lanzamiento e imagen).

## Mejoras Pendientes

- **Optimización de Imágenes**: Reducir el tamaño y peso de las imágenes para mejorar el rendimiento, especialmente en dispositivos móviles.
- **Deploy Automático**: Configurar CI/CD para despliegue automático de la aplicación.
- **Soporte para Modo Oscuro**: Implementar una opción para cambiar entre modo claro y oscuro para mejorar la experiencia del usuario.
- **Mejora en la Accesibilidad**: Asegurar que la aplicación cumpla con estándares de accesibilidad (WCAG) para usuarios con discapacidades visuales o motoras.

## Futuras Implementaciones

- **Consumo de una API Externa**: Implementar una API real para obtener datos actualizados y mejorar la experiencia de usuario.
- **Sistema de Usuarios**: Agregar autenticación y perfiles de usuario para permitir listas personalizadas y favoritos.
- **Recomendaciones Inteligentes**: Usar algoritmos para sugerir contenido basado en el historial del usuario.
- **Modo Offline**: Permitir la visualización de contenido sin conexión mediante almacenamiento en caché.
- **Integración con Redes Sociales**: Permitir compartir películas y series en redes sociales.
- **Comentarios y Reseñas**: Habilitar un sistema de calificaciones y opiniones de los usuarios sobre cada película o serie.
- **Rankings**: Permitir que los usuarios voten por las películas para destacar los títulos más populares.

## Capturas de Pantalla

### **Página de Login**
https://github.com/user-attachments/assets/95bc8af0-24dc-4bde-bbf0-ac122bc81853

### **Página de Login resposive**
https://github.com/user-attachments/assets/77ddca2d-6e85-4230-981b-79ca63223b28

### **Página de Home**
https://github.com/user-attachments/assets/fdbfbf20-acd1-40ee-be41-9c2b1d325c35

### **Página de Home resposive**
https://github.com/user-attachments/assets/6a23041f-bb7d-4e05-a402-7f3a96d2d5bc

### **Página de Serie**
https://github.com/user-attachments/assets/483a0fd0-aa0f-4015-8f28-83728934ae78

### **Página de Serie resposive**
https://github.com/user-attachments/assets/9682649b-bb4b-4620-89fc-3af4567d0662





