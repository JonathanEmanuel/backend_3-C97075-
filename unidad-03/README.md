# Unidad 04 - Gestión de Versiones, Rendimiento, logging y performance


Instalamos NVM
``` bash 
    nvm list
    nvm install <version node>
    nvm use
```

> Podemos tener varias versiones para cada proyecto

> Node es parte del Proyecto y de la computadora del Programador


- Cada versión = Entorno distinto de trabajo


## YARN
Es un remplazo a NPM con alguanas mejoras

Para instalalo de forma *global* necesitamos usar npm
``` bash 
    npm install -g yarn
```

Para verificar que se instalo correctamente

``` bash 
    yarn --version
```

Comandos Básicos
``` bash 
    yarn init -y
    yarn add <paquete>
```

### 💻 Creación de proyecto con yarn

A partir del módulo instalado de yarn

- Instalar por medio de yarn la dependencia de express.
-Crear un archivo app.js o server.js para escribir un servidor funcional.
- Modificar el package.json para que ejecute el script “start”, el cual deberá inicializar el servidor (tip, funciona similar a npm)

Paso 1
``` bash 
    yarn init -y
    yarn add express
```

Paso 2
``` bash 
{
  "type": "module"
}
```
