# Backup de Archivos del Fork - 2025-02-18

## Información del Backup

- **Fecha:** 2025-02-18
- **Hora:** 17:46 (aproximadamente)
- **Total archivos respaldados:** 10
- **Total archivos nuevos a crear:** 2 (no existían en el fork)
- **Propósito:** Respaldo antes de sincronizar con proyecto original (configuración Vercel/Aiven)

---

## Archivos Nuevos (No existían en el fork)

Estos archivos se crearán nuevos al sincronizar:

| Archivo | Ruta Destino | Estado en Fork |
|---------|-------------|----------------|
| .gitignore | fork/RiegoAutomatizadoMobile-Web/backend/.gitignore | ❌ No existe |
| vercel.json | fork/RiegoAutomatizadoMobile-Web/backend/vercel.json | ❌ No existe |

---

## Archivos Respaldados (10 archivos)

### Backend (4 archivos)

| Archivo | Ruta en Backup | Ruta Destino | Descripción |
|---------|---------------|--------------|-------------|
| config.py | backup-2025-02-18/backend/config.py | fork/RiegoAutomatizadoMobile-Web/backend/config.py | Configuración BD local |
| database.py | backup-2025-02-18/backend/database.py | fork/RiegoAutomatizadoMobile-Web/backend/database.py | Conexión a BD sin SSL |
| app.py | backup-2025-02-18/backend/app.py | fork/RiegoAutomatizadoMobile-Web/backend/app.py | Aplicación Flask |
| product_routes.py | backup-2025-02-18/backend/routes/product_routes.py | fork/RiegoAutomatizadoMobile-Web/backend/routes/product_routes.py | Rutas de productos (sin finally) |

### Frontend (6 archivos)

| Archivo | Ruta en Backup | Ruta Destino | Descripción |
|---------|---------------|--------------|-------------|
| package.json | backup-2025-02-18/frontend/web/package.json | fork/RiegoAutomatizadoMobile-Web/frontend/web/package.json | Dependencias (con react-google-maps) |
| auth.ts | backup-2025-02-18/frontend/web/src/api/auth.ts | fork/RiegoAutomatizadoMobile-Web/frontend/web/src/api/auth.ts | API auth (localhost) |
| products.ts | backup-2025-02-18/frontend/web/src/api/products.ts | fork/RiegoAutomatizadoMobile-Web/frontend/web/src/api/products.ts | API products (localhost) |
| AdminDashboard.tsx | backup-2025-02-18/frontend/web/src/pages/Admin/AdminDashboard.tsx | fork/RiegoAutomatizadoMobile-Web/frontend/web/src/pages/Admin/AdminDashboard.tsx | Panel admin (localhost) |
| About.tsx | backup-2025-02-18/frontend/web/src/pages/About/About.tsx | fork/RiegoAutomatizadoMobile-Web/frontend/web/src/pages/About/About.tsx | Página about (localhost) |
| Footer.tsx | backup-2025-02-18/frontend/web/src/components/Footer/Footer.tsx | fork/RiegoAutomatizadoMobile-Web/frontend/web/src/components/Footer/Footer.tsx | Footer (localhost) |

---

## Cambios Planificados (Para Referencia)

### Backend:

1. **config.py**
   - DB_HOST: "localhost" → "mysql-91a4811-jorg-cfd0.l.aivencloud.com"
   - DB_PORT: Agregar 11416
   - DB_USER: "root" → "avnadmin"
   - DB_PASSWORD: "admin" → "AVNS_xFw4DeDiUE77D7LZ3Lb"
   - Agregar: DB_SSL, DB_USE_PURE

2. **database.py**
   - Agregar import: DB_PORT
   - Agregar en conexión: port=DB_PORT
   - Agregar: ssl_disabled=False
   - Agregar: use_pure=True

3. **app.py**
   - Cambiar orden de imports (formato)

4. **routes/product_routes.py**
   - Mejorar función get_products():
     - Agregar inicialización: conn = None, cursor = None
     - Agregar bloque finally para cerrar conexiones siempre

### Frontend:

5. **package.json**
   - Agregar: "@vis.gl/react-google-maps": "^1.7.1"

6. **src/api/auth.ts**
   - Cambiar: "http://localhost:5000/api/auth" → "https://riego-automatizado-mobile-web.vercel.app/api/auth"

7. **src/api/products.ts**
   - Cambiar: "http://localhost:5000/api/products" → "https://riego-automatizado-mobile-web.vercel.app/api/products"

8. **src/pages/Admin/AdminDashboard.tsx**
   - Cambiar: "http://localhost:5000/api/products" → "https://riego-automatizado-mobile-web.vercel.app/api/products"

9. **src/components/Footer/Footer.tsx**
   - Cambiar: "http://localhost:5000/api/maps-key" → "https://riego-automatizado-mobile-web.vercel.app/api/maps-key"

10. **src/pages/About/About.tsx**
    - Cambiar: "http://localhost:5000/api/maps-key" → "https://riego-automatizado-mobile-web.vercel.app/api/maps-key"

---

## Archivos que NO se Modificarán

Los siguientes archivos son idénticos entre el fork y el original, por lo que NO necesitan cambios:

- ❌ backend/routes/auth_routes.py
- ❌ backend/models/user_model.py
- ❌ backend/models/product_model.py
- ❌ backend/requirements.txt

---

## Notas de Seguridad

⚠️ **ADVERTENCIA:** Las credenciales de la base de datos y API keys están hardcodeadas en los archivos. En un entorno de producción real, estas deberían moverse a variables de entorno.

---

## Restauración

Para restaurar cualquier archivo desde este backup:

```bash
# Ejemplo: restaurar config.py
cp backup-2025-02-18/backend/config.py fork/RiegoAutomatizadoMobile-Web/backend/config.py

# Ejemplo: restaurar package.json
cp backup-2025-02-18/frontend/web/package.json fork/RiegoAutomatizadoMobile-Web/frontend/web/package.json
```

---

**Backup creado el:** 2025-02-18  
**Por:** Sistema de backup automático
