# Crator
A modern dark agency theme built with Tailwind CSS

## Getting started
Unzip and open the folder of the theme with your editor of choice.

The theme is shipped with Webpack to build the assets and to quickly get you into the development process. The webpack build is based on a custom version of [Athlon's frontend webpack boilerplate template](https://github.com/WeAreAthlon/frontend-webpack-boilerplate). You are free to use any other build tool if you prefer!

First, ensure that Node.js & npm are installed. This theme uses the latest version of Tailwind: tailwindcss v3.0. To install Node.js choose your OS and installation method from [this page](https://nodejs.org/en/download/package-manager/) and follow the instructions.

This theme comes with a ready-to-use package file called `package.json`. You just need to install the NPM dependencies. To do that run 
```
npm install
``` 
in your terminal. This will install all the required dependencies and place them in a folder called `node_modules` in the root directory.

## Start a development server
Run 
```
npm run dev
``` 
in the terminal to run the Webpack development server. Once the server has started you can view the app at [http://localhost:8000](http://localhost:8000/). Then whenever files are changed, Webpack will rebuild the asset bundle and update the pages automatically.

## File structure
Any kind of changes to the site should be made inside the `src` directory. Here you will find the styles (`src/scss`), images (`src/images`), and JavaScript (`src/js`).

In order to make the content easier to read and maintain, we have sliced the HTML content into partials by taking advantage of the webpack `html-loader` plugin (https://webpack.js.org/loaders/html-loader/). All of the HTML components are located in the `src/components` directory and no extra configuration is required. 

All of the theme pages are located at the root of the `src` directory. There are a total of 6 pages including `index.html`, `services.html`, `about.html`, `work.html`, `case-study.html` and `contact.html`.

## Tailwind CSS & SCSS
This theme is built on top of the Tailwind CSS framework which is installed as a PostCSS plugin as recommended by the offical Tailwind installation docs (https://tailwindcss.com/docs/installation/using-postcss). 

We use Sass as the CSS preprocessor, but you're free to use whatever you prefer. We import Tailwind along with our font of choice [Inter](https://rsms.me/inter/) in our custom SCSS in `src/scss/app.scss`. The only custom SCSS in this file is used for the hamburger menu in our navbar. If you are not familiar with the Tailwind CSS framework I would recommend you check out the [Tailwind documentation](https://tailwindcss.com/docs).

Tailwind allows you to customize what it generates using a `tailwind.config.js` file at the root of the project directory. For this theme we have defined a custom `dark` color palette and some extra utility classes. We have also configured the `content` option to tree-shake unused styles and optimize your final build size in production.

## Javascript
As for JavaScript we are only using [Alpine.js](https://github.com/alpinejs/alpine) for the mobile navigation and hamburger menu. Our JS entrypoint is located at `src/js/app.js`. Its only task is to import Alpine.js and our SCSS.

## Compile and build for production
When you are done with changes run 
```
npm run production
```
This will prompt Webpack to compile and optimize your assets for production. Webpack will generate a `dist/` directory at the root of your project with all your site files.

* CSS files are located under /dist/css/
* JavaScript files with support of ES6 / ECMAScript 2016(ES7) files are located under /dist/js/
* Images are located under /dist/images/
* Fonts are located under /dist/fonts/
* HTML files are located under /dist/

## Favicon generation
We automatically generate favicons from a single source file with the `favicons-webpack-plugin` (https://github.com/jantimon/favicons-webpack-plugin). The favicon source file is configured to be located at `src/images/favicon.png`. To change the name or location of the source file you can update the favicon variable in the `configuration/environment.js` file.

## Deploy with Netlify
This theme comes with a `netlify.toml` file so you can easily deploy your site with [Netlify](https://www.netlify.com/) without having to configure anything. All you have to do is create a git repository using this theme, create a new project on Netlify, link it your git repository and build it using our `netlify.toml` file. For more information check out this [short step by step guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) from Netlify on how to deploy your app.

## Icons
The icons used for this theme are part of the [Tabler Icons](https://github.com/tabler/tabler-icons) set that are free to use and published under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).
