# Didcom select

Este componente es una mejora del componente [autocomplete] de [Vuetify2] en cual se mejoro el funcionamiento asiendo mas rápido su comportamiento al momento de trabajar con una cantidad de datos muy grande.

## Instalacion

### intalación por CDN

Copia el siguiente link de los estilos del selector y pegalo en el index o layout de tu proyecto

```html
<link
  href="https://code.didcom.dev/libs/didcom-components/1.0.1/selector/select.css"
  rel="stylesheet"
/>
```

Copia el siguiente script y pegalo en el body de y pegalo en el index o layout de tu proyecto. Si estas utilziando vue y vuetify por cdn, entonces el cdn de didcom-select debe estar debajo de ellos.

```html
<script src="https://code.didcom.dev/libs/didcom-components/1.0.1/selector/select.js"></script>
```

## simple

El componente contiene las mismas propiedades que el autocomplete de vuetify.

![Descripción de la imagen](/img/didcomSelectSimplepng.png)

### Código del componente

::: code-tabs

@tab html

```html
<template>
  <v-container>
    <v-autocomplete
      v-model="selected"
      :items="items"
      label="Select something"
      outlined
    ></v-autocomplete>
  </v-container>
</template>
```

@tab JavaScript

```js
export default {
  data() {
    return {
      selected: null,
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
```

:::

## Opcion multiple

Se agrega una opcion para poder seleccionar multiples items, esto es posible agregando la propiedad "multiple" para que tenga un funcionamiento correcto debemos agregar las propiedades como se reflejan en el ejemplo del codigo.

![Descripción de la imagen](/img/didcomSelect.png)

### Código del componente

::: code-tabs

@tab html

```html
<didcom-select
  item-text="AssetName"
  item-value="id"
  name="Activo"
  name-plural="Activos"
  solo
  dense
  style="max-width: 250px; min-width:250px; width:250px;"
  background-color="#e7eaf3"
  clearable
  v-model="assetsSelect"
  :items="assets"
  label="Activos"
  :menu-props="{  maxWidth: '250'}"
  multiple
>
</didcom-select>
```

@tab JavaScript

```js
export default {
  data() {
    return {
      assetSelect: [],
      assets: [
        { AssetName: "asset1", id: 1 },
        { AssetName: "asset2", id: 2 },
        { AssetName: "asset3", id: 3 },
      ],
    };
  },
};
```

:::

::: info
 Si no se pone la propiedad `item-value`, se regresará todo el objeto.
:::

## Props
Estas son las propiedades actuales con las que cuenta el componente

| Propiedad          | Tipo     | Descripción                                                                                               |
|--------------------|----------|-----------------------------------------------------------------------------------------------------------|
| `value`            | Array    | Es el `v-model` que se pasará al componente.                                                              |
| `disabled`         | Boolean  | Deshabilitar el input.                                                                                   |
| `focus`            | Function | Función que se ejecutará al enfocar el input.                                                             |
| `icon`             | String   | Icono que mostrará dentro del input.                                                                      |
| `showInfo`         | Boolean  | Si se activa, se mostrará un icono de pregunta fuera del componente a la izquierda.                      |
| `infoText`         | String   | La información que se mostrará al poner el mouse sobre el icono informativo.                             |
| `itemText`         | String   | Nombre de la propiedad que se mostrará en la lista de los items.                                         |
| `items`            | Array    | Items a mostrar.                                                                                          |
| `itemValue`        | String   | Valor que se obtendrá al seleccionar un item. Si no se pone la propiedad, se devolverá todo.             |
| `label`            | String   | Etiqueta del input.                                                                                       |
| `loading`          | Boolean  | Indica si está en estado de carga.                                                                        |
| `multiple`         | Boolean  | Si se permite seleccionar múltiples elementos.                                                             |
| `clearable`        | Boolean  | Si el input puede ser borrado.                                                                            |
| `name`             | String   | El nombre que aparecerá por defecto en el placeholder.                                                   |
| `namePlural`       | String   | Nombre que se pondrá cuando se seleccionen más de un elemento.                                           |
| `required`         | Boolean  | Indica si el campo es obligatorio.                                                                        |
| `solo`             | Boolean  | Si se debe mostrar el componente solo.                                                                    |
| `backgroundColor`  | String   | Color de fondo del componente.                                                                            |
| `menuProps`        | Object   | Propiedades adicionales para el menú desplegable.                                                         |
| `style`            | String   | Estilos CSS aplicados al componente.                                                                      |
| `dense`            | Boolean  | Si el componente debe ser más compacto.                                                                  |
| `prependInnerIcon` | String   | Icono que se mostrará al principio del input.                                                             |
| `filled`           | Boolean  | Si se debe mostrar el input con el estilo "filled".                                                      |



## Acerca del Componente

### Ubicación del Componente
Este componente se encuentra en el *cloud 2*, en la siguiente ruta: `code.didcom.dev/libs/didcom-components/1.0.1/selector/select.js`.

### Personas Relacionadas
Si surge algún inconveniente, puedes ponerte en contacto con las siguientes personas:

- **Fernando Rodríguez Ruelas** | Ing. Frontend
- **Fernanda Cruz** | Lider Frontend

[Vuetify2]: https://v2.vuetifyjs.com/en/
[autocomplete]: https://v2.vuetifyjs.com/en/components/autocompletes/
