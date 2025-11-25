# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar tu aplicación Angular en GitHub Pages de forma automática.

## 📋 Requisitos Previos

1. **Cuenta de GitHub** (gratuita)
2. **Repositorio creado** en GitHub
3. **Git configurado** en tu máquina local

## 🛠️ Configuración Inicial

### Paso 1: Preparar el Repositorio

1. **Inicializar Git** (si no está inicializado):
```bash
cd Angular-1
git init
git add .
git commit -m "Initial commit - Angular Personalization App by Eddi Andreé Salazar Matos"
```

2. **Conectar con GitHub**:
```bash
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git branch -M main
git push -u origin main
```

### Paso 2: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - **Branch**: `gh-pages` o `main`
   - **Folder**: `/ (root)` o `/docs` según tu configuración
5. Click en **Save**

## 🔄 Opción 1: Deploy Automático con GitHub Actions (Recomendado)

### Configuración Automática

El proyecto ya incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que:
- ✅ Se ejecuta automáticamente al hacer push a `main` o `master`
- ✅ Compila la aplicación
- ✅ Despliega en GitHub Pages
- ✅ No requiere configuración adicional

### Pasos para Activar

1. **Habilita GitHub Pages** en Settings > Pages
2. **Selecciona "GitHub Actions"** como fuente
3. **Haz push** a la rama `main`:
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

4. **Verifica el deploy**:
   - Ve a la pestaña **Actions** en tu repositorio
   - Verás el workflow ejecutándose
   - Cuando termine, tu app estará disponible en:
     `https://TU-USUARIO.github.io/REPOSITORIO/`

## 🔧 Opción 2: Deploy Manual

### Instalar angular-cli-ghpages

```bash
npm install -g angular-cli-ghpages
```

### Deploy Manual

```bash
# Build para GitHub Pages
npm run build:gh-pages

# Deploy
npm run deploy:gh-pages
```

O en un solo comando:
```bash
npm run deploy:gh-pages
```

## 📝 Configuración del Base Href

El proyecto está configurado para funcionar en:
- **URL base**: `/Angular-1/`
- **Ejemplo**: `https://usuario.github.io/Angular-1/`

### Si tu repositorio tiene otro nombre

Si tu repositorio se llama diferente, actualiza:

1. **package.json** - Script `build:gh-pages`:
```json
"build:gh-pages": "ng build --configuration production --base-href=/TU-REPOSITORIO/"
```

2. **404.html** - Actualiza las rutas:
```html
<base href="/TU-REPOSITORIO/">
location.replace('/TU-REPOSITORIO/');
```

3. **angular.json** - Si usas configuración específica

## 🌐 URLs de Ejemplo

Si tu repositorio se llama `Angular-1`:
- **URL**: `https://TU-USUARIO.github.io/Angular-1/`
- **Dashboard**: `https://TU-USUARIO.github.io/Angular-1/dashboard`
- **Demo**: `https://TU-USUARIO.github.io/Angular-1/demo`

## ✅ Verificación

Después del deploy:

1. **Espera 1-2 minutos** para que GitHub procese
2. **Visita tu URL**: `https://TU-USUARIO.github.io/REPOSITORIO/`
3. **Verifica que funcione**:
   - Dashboard carga correctamente
   - Navegación funciona
   - Gráficos se muestran
   - Temas funcionan

## 🔄 Actualizar el Deploy

### Con GitHub Actions (Automático)
- Simplemente haz `git push` a `main`
- El workflow se ejecutará automáticamente

### Manual
```bash
npm run deploy:gh-pages
```

## 🐛 Solución de Problemas

### Problema: Rutas no funcionan (404)

**Solución**: El archivo `404.html` ya está incluido. Asegúrate de que:
- El `base-href` sea correcto
- GitHub Pages esté configurado correctamente

### Problema: Assets no cargan

**Solución**: Verifica que el `base-href` en `index.html` coincida con tu repositorio.

### Problema: GitHub Actions falla

**Solución**:
1. Verifica que GitHub Pages esté habilitado
2. Revisa los logs en la pestaña **Actions**
3. Asegúrate de que el workflow tenga permisos

## 📚 Recursos Adicionales

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🎯 Checklist de Deploy

- [ ] Repositorio creado en GitHub
- [ ] Código subido a GitHub
- [ ] GitHub Pages habilitado en Settings
- [ ] Workflow de GitHub Actions configurado (automático)
- [ ] Build exitoso verificado
- [ ] URL de GitHub Pages funcionando
- [ ] Todas las rutas funcionan correctamente
- [ ] Assets cargan correctamente

---

**Desarrollado por Eddi Andreé Salazar Matos**

*Para más información, consulta el README.md principal*

