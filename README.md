# Udacity mobile portfolio project.
Copyright (C) 2016  Udacity, Evgeny A. Degtev
## License
**[GNU General Public License v3.0](http://www.gnu.org/licenses/gpl.html)**

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

## Decription
This is my project task I've been made during the Udacity Website Performance optimization course.

I've decided not to customize this portfolio yet to make it easier by reviewer to check optimizations made and evaluate my work. 

There is a list of optimizations below made by me:

1. Reduce number of background movingPizzas from 300 to 80 (for managing less layers).
2. Promote background pizzas onto their own layers to avoid needless painting when scrolling.
3. Fix forced synchronous layout (FSL) in `changePizzaSizes()` (_/views/js/main.js_).
4. Fix forced synchronous layout (FSL) in `updatePositions()` (_/views/js/main.js_).
5. Make Google fonts to download asynchronously using [Web Font Loader](https://github.com/typekit/webfontloader).
6. Move styles from the <em>/css/styles.css</em> into the <em>index.html</em> via `<style>` tag.
7. Add `media="print"`attribute to the `<link href="css/print.css" ...>` tag.
8. Add `async`attribute in the google analytics script.


## Installation
Requirements:
- You should have the [Node.js](https://nodejs.org/en/) properly installed on your system.
- Also the [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) task runner <ins>installed globaly</ins> is required to perform build tasks.

Installation:

- [Clone](https://github.com/DaggLo/frontend-nanodegree-mobile-portfolio.git) or [download](https://github.com/DaggLo/frontend-nanodegree-mobile-portfolio/archive/master.zip) the repository.
- In the project directory install all dev-dependences using Node.js command line:
```
$ npm install
```
- Run gulp default task:
```
$ gulp
```
- Final code will be in the _/build_ folder.

## Contacts
some-mail@some-mail-service.com
