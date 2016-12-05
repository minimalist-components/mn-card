# Minimalist card

A card component with a minimalist design

<!-- ![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-card/master/sources/imgs/preview.png) -->

<!-- See the [demo](https://codepen.io/darlanmendonca/full/vKqLOx) -->

### Install

With bower

```sh
bower install --save mn-card
```

Or just download the main file ```dist/mn-card.css``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/dist/mn-card.css">
```


### Usage

Just use the class `.mn-card` in a element. To has padding, use the class `.padding`

```pug
.mn-card.padding
  h2 Title

  p lorem ipsum
```


If you want padding only in header, and not in content, use the class `.padding-title`

```pug
.mn-card.padding-title
  h2 Lorem title

  img(src='/path/to/an/image')
```




