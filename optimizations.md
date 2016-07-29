# The list of optimizations.

## /index.html
1. Make Google fonts to download asynchronously using [Web Font Loader](https://github.com/typekit/webfontloader).
2. Move styles from the <em>/css/styles.css</em> into the <em>/index.html</em> via `<style>` tag.
3. Add `media="print"`attribute to the `<link href="css/print.css" ...>` tag.
4. Add `async`attribute in the google analytics script.

## /views/images/pizzeria.jpg
1. Heavily reduce the file size.

## /views/js/main.js
#### 1. Background pizzas.
  * Refactor - moved background pizzas generation function out of DOMContentLoadedEventListener to the global scope (generateBackgroundPizzas).
  * Reduce the number of the background movingPizzas from 300 to the value that depends on a device viewport (for managing less layers).
  * Fix forced synchronous layout (FSL) in `updatePositions()` (_/views/js/main.js_). Put reading of the `window.scrollTop` property outside the loop. There is no need of reading this property each time the loop iterates. Also replace `window.scrollTop` on the `window.pageYOffset` because of incorrect behavior in other browsers besides Chrome.

#### 2. Changing pizza sizes.
  * Fix forced synchronous layout (FSL) in `changePizzaSizes()` (_/views/js/main.js_). Now there are two loops instaed one: first - reads propeties, second - writes down changes.

## /views/css/style.css
1. Promote background pizzas onto their own layers (via `will-change: transform;` for the `.mover` selector) to avoid needless painting when scrolling.

## Other optimizations and changes.
* All .js and .css files are minificated using gulp plugins (gulp-csso, gulp-uglify).
* All pictures are also additionaly compressed via gulp-imagemin plugin.
* The opacity of the `background-color` property from the `.container` selector in the _/views/css/style.css_ was changed from `0.8` to `1.0` (for better readability).
