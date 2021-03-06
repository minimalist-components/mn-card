[![npm version](https://badge.fury.io/js/mn-card.svg)](https://badge.fury.io/js/mn-card)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-card.svg)](https://gemnasium.com/github.com/minimalist-components/mn-card)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   

# mn-card

A card component with a minimalist design

<a href="https://minimalist-components.github.io/mn-card/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-card/master/preview.png">
</a>

See the [demo](https://minimalist-components.github.io/mn-card/)

### Install

```sh
npm install --save mn-card
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-card/tree/master/dist) with your preferred tool.


### Usage

Just use the class `.mn-card` in a element. To has padding, use the class `.padding`

```html
<div class="mn-card padding">
  <h2>Title</h2>
  <p>lorem ipsum</p>
</div>
```


If you want padding only in header, and not in content, use the class `.padding-title`

```html
<div class="mn-card padding-title">
  <h2>Title</h2>
  <p>lorem ipsum</p>
</div>
```

Too works if you use a `<header>` wraping the tags h2, h3, etc.



