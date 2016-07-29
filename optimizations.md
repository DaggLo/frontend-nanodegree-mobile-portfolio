# The list of optimizations.

## /index.html
1. Google fonts are made to download asynchronously using [Web Font Loader](https://github.com/typekit/webfontloader).
2. Styles are moved from the <em>/css/styles.css</em> into the <em>/index.html</em> via `<style>` tag.
3. A `media="print"`attribute is added to the `<link href="css/print.css" ...>` tag.
4. An `async`attribute is added in the google analytics script.

## /views/images/pizzeria.jpg
1. Heavily reduced the file size.

## /views/js/main.js
#### 1. Changing pizza sizes.
  * All `document.querySelectorAll('.randomPizzaContainer')` calls were changed to `document.getElementsByClassName('randomPizzaContainer')` and placed in `randomPizzaContainerNodeList` variable in the global scope. Because this collection is unchangeable and there is no need of recollect it multiple times each function call.
  * `dx` and `newWidth` definitions are moved out of for-loop. Because they determine `randomPizzas` sizes that are the same for all ones. So we can just use only for example first value.
  * Added `window.requestAnimationFrame` for `changePizzaSizes` call.

#### 2. Main pizzas generation.
  * `document.getElementById("randomPizzas")` was moved out from the for-loop that creates and appends all of the pizzas when the page loads to the global variable `randomPizzas`.

#### 3. Background pizzas generation.
  * Refactor: background pizzas generation function is moved out of `DOMContentLoadedEventListener` to the global scope (`generateBackgroundPizzas`).
  * The number of the background movingPizzas is reduced from 300 to the value that depends on a device viewport (for managing less layers). `orientationchangeEvent` is also taken into account and handled by  `doOnOrientationChange`.

#### 4. UpdatePositions.
  * Reading of the `window.scrollTop` property is puted outside the loop. There is no need of reading this property each time the loop iterates. Also the `window.scrollTop` is replaced on the `window.pageYOffset` because of incorrect behavior in other browsers besides Chrome.
  * Items collection is moved out to the global variable and method is changed to `getElementsByClassName()`.
  * Phase calculations are now cached in the `phase` array.
  * `transform: translate3d` is used instead `style.left`.

## /views/css/style.css
1. Background pizzas are promoted onto their own layers (via `will-change: transform;` for the `.mover` selector) to avoid needless painting when scrolling.
2. Additionaly `backface-visibility: hidden;` and `transform: translate3d(0,0,0);` are applied to reduce paint and trigger gpu assistance on devices that not supports `will-change: transform;`. 

## Other optimizations and changes.
* All .js and .css files are minificated using gulp plugins (gulp-csso, gulp-uglify).
* All pictures are also additionaly compressed via gulp-imagemin plugin.
