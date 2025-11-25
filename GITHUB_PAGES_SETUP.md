# 🚀 Configuración Rápida de GitHub Pages

## Pasos Rápidos (5 minutos)

### 1. Subir el Código a GitHub

```bash
# Si aún no tienes repositorio
git init
git add .
git commit -m "Initial commit - Angular Personalization App"
git branch -M main
git remote add origin https://github.com/[tu-usuario]/Angular-1.git
git push -u origin main
```

### 2. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings**
3. En el menú lateral, click en **Pages**
4. En "Source", selecciona **"GitHub Actions"**
5. Guarda (no necesitas hacer nada más)

### 3. El Deploy es Automático

- Cada vez que hagas `git push` a `main`, se desplegará automáticamente
- Ve a la pestaña **Actions** para ver el progreso
- En 2-3 minutos tu app estará en: `https://[tu-usuario].github.io/Angular-1/`

## ✅ Verificar que Funciona

1. Ve a la pestaña **Actions** en GitHub
2. Deberías ver un workflow llamado "Deploy to GitHub Pages"
3. Cuando termine (check verde), tu app estará lista
4. Ve a `Settings > Pages` para ver la URL

## 🔧 Si tu Repositorio tiene Otro Nombre

Si tu repositorio NO se llama "Angular-1", actualiza:

1. **angular.json** (línea ~42):
   ```json
   "baseHref": "/[tu-nombre-repo]/"
   ```

2. **package.json** (línea ~10):
   ```json
   "build:gh-pages": "ng build --configuration production --base-href=/[tu-nombre-repo]/"
   ```

## 🎯 Comandos Útiles

```bash
# Ver el build localmente antes de desplegar
npm run build:gh-pages
npx http-server dist/angular-personalization-app -p 8080

# Deploy manual (si prefieres)
npm run deploy:gh-pages
```

## ❓ Problemas Comunes

**El workflow no se ejecuta:**
- Verifica que el archivo `.github/workflows/deploy.yml` existe
- Verifica que estás haciendo push a `main` o `master`

**404 en las rutas:**
- Verifica que el `baseHref` esté correcto
- Debe coincidir con el nombre de tu repositorio

**La app no carga:**
- Espera 2-3 minutos después del deploy
- Limpia la caché del navegador (Ctrl+Shift+R)

---

**¡Listo! Tu aplicación estará en línea en minutos** 🎉

