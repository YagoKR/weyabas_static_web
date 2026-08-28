# weyabas_static_web

Proyecto de página estática para la web de Weyabu y Angeluseries

# Instalación de dependencias

```
npx astro add @sanity/astro @astrojs/react

npm install @astrojs/react @sanity/astro @sanity/client sanity @types/react-dom @types/react-is @types/react react-dom react-is react styled-components

npx astro add cloudflare
```

# Tutorial: como usar "prettier" para mantener codigo bien estructurado en VS Code

## Requisitos previos

1. Instala la extensión de **Astro** en VS Code para obtener resaltado de sintaxis y soporte de servidor de lenguaje.
2. Instala la extensión **Prettier - Code formatter**.
3. Instalar el plugin de Astro para Prettier. Ejecuta el siguiente comando en la raíz de tu proyecto para añadir el plugin como dependencia de desarrollo:

```bash
npm install --save-dev prettier-plugin-astro
```

4. Configurar Prettier. Crea un archivo llamado `prettier.config.mjs` en el directorio raíz de tu proyecto y añade la configuración del plugin:

```javascript
/** @type {import('prettier').Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
```

5. Actualizar la configuración de VS Code. Configura VS Code para que use Prettier como formateador predeterminado para los archivos de Astro. Agrega las siguientes líneas a `.vscode/settings.json` para que se establezca el formateador y el formateo automático al guardar.

```json
{
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true
}
```

6. Reinicia VS Code para aplicar los cambios. A partir de ahora, Prettier formateará tus archivos `.astro` correctamente.
