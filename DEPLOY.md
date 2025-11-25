# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar tu aplicación Angular en GitHub Pages de forma sencilla.

## 📋 Requisitos Previos

- Repositorio en GitHub
- Node.js y npm instalados
- Git configurado

## 🔧 Configuración Inicial

### 1. Verificar el Nombre del Repositorio

El proyecto está configurado para un repositorio llamado `Angular-1`. Si tu repositorio tiene otro nombre:

1. Edita `angular.json`:
   ```json
   "baseHref": "/[tu-nombre-repo]/"
   ```

2. Edita `package.json`:
   ```json
   "build:gh-pages": "ng build --configuration production --base-href=/[tu-nombre-repo]/"
   ```

### 2. Instalar Dependencias

```bash
npm install
```

La dependencia `angular-cli-ghpages` ya está incluida en `devDependencies`.

## 🚀 Métodos de Despliegue

### Método 1: Deploy Automático con GitHub Actions (Recomendado)

Este método despliega automáticamente cada vez que haces push a la rama main.

#### Pasos:

1. **Habilita GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings > Pages
   - En "Source", selecciona "GitHub Actions"
   - Guarda los cambios

2. **Haz push de tu código**:
   ```bash
   git add .
   git commit -m "Configurar GitHub Pages"
   git push origin main
   ```

3. **Verifica el deploy**:
   - Ve a la pestaña "Actions" en GitHub
   - Verás el workflow ejecutándose
   - Cuando termine, tu app estará en: `https://[tu-usuario].github.io/Angular-1/`

#### Ventajas:
- ✅ Automático
- ✅ Se actualiza con cada push
- ✅ No necesitas hacer nada manualmente

### Método 2: Deploy Manual

Si prefieres controlar cuándo se despliega:

```bash
npm run deploy:gh-pages
```

Este comando:
1. Compila la aplicación para producción
2. La despliega en la rama `gh-pages` de tu repositorio

#### Pasos:

1. **Compilar y desplegar**:
   ```bash
   npm run deploy:gh-pages
   ```

2. **Habilitar GitHub Pages**:
   - Ve a Settings > Pages
   - Source: rama `gh-pages` / carpeta `/ (root)`
   - Guarda

3. **Esperar unos minutos** y tu app estará disponible

## 🔍 Verificar el Deploy

### URL de tu Aplicación

Tu aplicación estará disponible en:
```
https://[tu-usuario-github].github.io/Angular-1/
```

Ejemplo:
```
https://eddisalazar.github.io/Angular-1/
```

### Solución de Problemas

#### Error: "Repository not found"
- Verifica que el repositorio existe en GitHub
- Verifica que tienes permisos de escritura

#### Error: "Base href incorrecto"
- Verifica que el `baseHref` en `angular.json` coincida con el nombre de tu repositorio
- Si tu repo es `mi-proyecto`, usa `/mi-proyecto/`

#### Las rutas no funcionan (404)
- Asegúrate de que el `baseHref` esté configurado correctamente
- GitHub Pages requiere el `baseHref` para rutas de Angular

#### El deploy no se ejecuta automáticamente
- Verifica que GitHub Actions esté habilitado en Settings > Actions
- Verifica que el workflow esté en `.github/workflows/deploy.yml`
- Verifica que estés haciendo push a la rama `main` o `master`

## 📝 Notas Importantes

1. **Primera vez**: El primer deploy puede tardar 5-10 minutos
2. **Actualizaciones**: Los siguientes deploys son más rápidos (2-3 minutos)
3. **HTTPS**: GitHub Pages siempre usa HTTPS
4. **Dominio personalizado**: Puedes agregar un dominio personalizado en Settings > Pages

## 🎯 Comandos Útiles

```bash
# Compilar para producción local
npm run build

# Compilar para GitHub Pages
npm run build:gh-pages

# Deploy manual completo
npm run deploy:gh-pages

# Ver el build localmente
npx http-server dist/angular-personalization-app -p 8080
```

## ✅ Checklist de Deploy

- [ ] Repositorio creado en GitHub
- [ ] Código subido al repositorio
- [ ] GitHub Pages habilitado (Source: GitHub Actions)
- [ ] Workflow de GitHub Actions configurado
- [ ] Base href configurado correctamente
- [ ] Push realizado a la rama main/master
- [ ] Workflow ejecutado exitosamente
- [ ] Aplicación accesible en la URL de GitHub Pages

---

**Desarrollado por Eddi Andreé Salazar Matos**

