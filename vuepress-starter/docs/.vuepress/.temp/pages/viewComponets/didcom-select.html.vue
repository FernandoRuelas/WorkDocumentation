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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="vista-previa-del-componente-simple" tabindex="-1"><a class="header-anchor" href="#vista-previa-del-componente-simple"><span>Vista previa del componente simple</span></a></h2>
<p>El componente contiene las mismas propiedades que el autocomplete de vuetify.</p>
<p><img src="/img/didcomSelectSimplepng.png" alt="Descripción de la imagen"></p>
<h3 id="codigo-del-componente" tabindex="-1"><a class="header-anchor" href="#codigo-del-componente"><span>Código del componente</span></a></h3>
<details>
  <summary>Html</summary>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details>
 <summary>Script</summary>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Item 1"</span><span class="token punctuation">,</span> <span class="token string">"Item 2"</span><span class="token punctuation">,</span> <span class="token string">"Item 3"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


