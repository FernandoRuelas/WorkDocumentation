<template><div><h1 id="didcom-select" tabindex="-1"><a class="header-anchor" href="#didcom-select"><span>Didcom select</span></a></h1>
<p>Este componente es una mejora del componente <a href="https://v2.vuetifyjs.com/en/components/autocompletes/" target="_blank" rel="noopener noreferrer">autocomplete</a> de <a href="https://v2.vuetifyjs.com/en/" target="_blank" rel="noopener noreferrer">Vuetify2</a> en cual se mejoro el funcionamiento asiendo mas rápido su comportamiento al momento de trabajar con una cantidad de datos muy grande.</p>
<h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion"><span>Instalacion</span></a></h2>
<h3 id="intalacion-por-cdn" tabindex="-1"><a class="header-anchor" href="#intalacion-por-cdn"><span>intalación por CDN</span></a></h3>
<p>Copia el siguiente link de los estilos del selector y pegalo en el index o layout de tu proyecto</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span></span>
<span class="line">  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://code.didcom.dev/libs/didcom-components/1.0.1/selector/select.css<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Copia el siguiente script y pegalo en el body de y pegalo en el index o layout de tu proyecto. Si estas utilziando vue y vuetify por cdn, entonces el cdn de didcom-select debe estar debajo de ellos.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://code.didcom.dev/libs/didcom-components/1.0.1/selector/select.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="simple" tabindex="-1"><a class="header-anchor" href="#simple"><span>simple</span></a></h2>
<p>El componente contiene las mismas propiedades que el autocomplete de vuetify.</p>
<p><img src="/img/didcomSelectSimplepng.png" alt="Descripción de la imagen"></p>
<h3 id="codigo-del-componente" tabindex="-1"><a class="header-anchor" href="#codigo-del-componente"><span>Código del componente</span></a></h3>
<CodeTabs id="32" :data='[{"id":"html"},{"id":"JavaScript"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">JavaScript</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-container</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-autocomplete</span></span>
<span class="line">      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select something<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">outlined</span></span>
<span class="line">    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-autocomplete</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-container</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Item 1"</span><span class="token punctuation">,</span> <span class="token string">"Item 2"</span><span class="token punctuation">,</span> <span class="token string">"Item 3"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="opcion-multiple" tabindex="-1"><a class="header-anchor" href="#opcion-multiple"><span>Opcion multiple</span></a></h2>
<p>Se agrega una opcion para poder seleccionar multiples items, esto es posible agregando la propiedad &quot;multiple&quot; para que tenga un funcionamiento correcto debemos agregar las propiedades como se reflejan en el ejemplo del codigo.</p>
<p><img src="/img/didcomSelect.png" alt="Descripción de la imagen"></p>
<h3 id="codigo-del-componente-1" tabindex="-1"><a class="header-anchor" href="#codigo-del-componente-1"><span>Código del componente</span></a></h3>
<CodeTabs id="52" :data='[{"id":"html"},{"id":"JavaScript"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">JavaScript</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>didcom-select</span></span>
<span class="line">  <span class="token attr-name">item-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AssetName<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">item-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activo<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">name-plural</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activos<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">solo</span></span>
<span class="line">  <span class="token attr-name">dense</span></span>
<span class="line">  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span> <span class="token property">min-width</span><span class="token punctuation">:</span>250px<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span>250px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span></span>
<span class="line">  <span class="token attr-name">background-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#e7eaf3<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">clearable</span></span>
<span class="line">  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>assetsSelect<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>assets<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Activos<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">:menu-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{  maxWidth: '250'}<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">multiple</span></span>
<span class="line"><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>didcom-select</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">assetSelect</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">AssetName</span><span class="token operator">:</span> <span class="token string">"asset1"</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">AssetName</span><span class="token operator">:</span> <span class="token string">"asset2"</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">AssetName</span><span class="token operator">:</span> <span class="token string">"asset3"</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container info">
<p class="hint-container-title">Información</p>
<p>Si no se pone la propiedad <code v-pre>item-value</code>, se regresará todo el objeto.</p>
</div>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2>
<p>Estas son las propiedades actuales con las que cuenta el componente</p>
<table>
<thead>
<tr>
<th>Propiedad</th>
<th>Tipo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>value</code></td>
<td>Array</td>
<td>Es el <code v-pre>v-model</code> que se pasará al componente.</td>
</tr>
<tr>
<td><code v-pre>disabled</code></td>
<td>Boolean</td>
<td>Deshabilitar el input.</td>
</tr>
<tr>
<td><code v-pre>focus</code></td>
<td>Function</td>
<td>Función que se ejecutará al enfocar el input.</td>
</tr>
<tr>
<td><code v-pre>icon</code></td>
<td>String</td>
<td>Icono que mostrará dentro del input.</td>
</tr>
<tr>
<td><code v-pre>showInfo</code></td>
<td>Boolean</td>
<td>Si se activa, se mostrará un icono de pregunta fuera del componente a la izquierda.</td>
</tr>
<tr>
<td><code v-pre>infoText</code></td>
<td>String</td>
<td>La información que se mostrará al poner el mouse sobre el icono informativo.</td>
</tr>
<tr>
<td><code v-pre>itemText</code></td>
<td>String</td>
<td>Nombre de la propiedad que se mostrará en la lista de los items.</td>
</tr>
<tr>
<td><code v-pre>items</code></td>
<td>Array</td>
<td>Items a mostrar.</td>
</tr>
<tr>
<td><code v-pre>itemValue</code></td>
<td>String</td>
<td>Valor que se obtendrá al seleccionar un item. Si no se pone la propiedad, se devolverá todo.</td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td>String</td>
<td>Etiqueta del input.</td>
</tr>
<tr>
<td><code v-pre>loading</code></td>
<td>Boolean</td>
<td>Indica si está en estado de carga.</td>
</tr>
<tr>
<td><code v-pre>multiple</code></td>
<td>Boolean</td>
<td>Si se permite seleccionar múltiples elementos.</td>
</tr>
<tr>
<td><code v-pre>clearable</code></td>
<td>Boolean</td>
<td>Si el input puede ser borrado.</td>
</tr>
<tr>
<td><code v-pre>name</code></td>
<td>String</td>
<td>El nombre que aparecerá por defecto en el placeholder.</td>
</tr>
<tr>
<td><code v-pre>namePlural</code></td>
<td>String</td>
<td>Nombre que se pondrá cuando se seleccionen más de un elemento.</td>
</tr>
<tr>
<td><code v-pre>required</code></td>
<td>Boolean</td>
<td>Indica si el campo es obligatorio.</td>
</tr>
<tr>
<td><code v-pre>solo</code></td>
<td>Boolean</td>
<td>Si se debe mostrar el componente solo.</td>
</tr>
<tr>
<td><code v-pre>backgroundColor</code></td>
<td>String</td>
<td>Color de fondo del componente.</td>
</tr>
<tr>
<td><code v-pre>menuProps</code></td>
<td>Object</td>
<td>Propiedades adicionales para el menú desplegable.</td>
</tr>
<tr>
<td><code v-pre>style</code></td>
<td>String</td>
<td>Estilos CSS aplicados al componente.</td>
</tr>
<tr>
<td><code v-pre>dense</code></td>
<td>Boolean</td>
<td>Si el componente debe ser más compacto.</td>
</tr>
<tr>
<td><code v-pre>prependInnerIcon</code></td>
<td>String</td>
<td>Icono que se mostrará al principio del input.</td>
</tr>
<tr>
<td><code v-pre>filled</code></td>
<td>Boolean</td>
<td>Si se debe mostrar el input con el estilo &quot;filled&quot;.</td>
</tr>
</tbody>
</table>
<h2 id="acerca-del-componente" tabindex="-1"><a class="header-anchor" href="#acerca-del-componente"><span>Acerca del Componente</span></a></h2>
<h3 id="ubicacion-del-componente" tabindex="-1"><a class="header-anchor" href="#ubicacion-del-componente"><span>Ubicación del Componente</span></a></h3>
<p>Este componente se encuentra en el <em>cloud 2</em>, en la siguiente ruta: <code v-pre>code.didcom.dev/libs/didcom-components/1.0.1/selector/select.js</code>.</p>
<h3 id="personas-relacionadas" tabindex="-1"><a class="header-anchor" href="#personas-relacionadas"><span>Personas Relacionadas</span></a></h3>
<p>Si surge algún inconveniente, puedes ponerte en contacto con las siguientes personas:</p>
<ul>
<li><strong>Fernando Rodríguez Ruelas</strong> | Ing. Frontend</li>
<li><strong>Fernanda Cruz</strong> | Lider Frontend</li>
</ul>
</div></template>


