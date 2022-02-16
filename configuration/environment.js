const path = require('path');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

module.exports = {
  
  paths: {
    /* Path to source files directory */
    source: path.resolve(__dirname, '../src/'),

    /* Path to built files directory */
    output: path.resolve(__dirname, '../dist/'),
  },
  
  server: {
    host: 'localhost',
    port: 8000,
  },
  
  limits: {
    /* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
    images: 8192,

    /* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
    fonts: 8192,
  },
  
  site_name: "Crator Studio",
  
  site_description: "Crator is a sleek, dark, and creative agency & portfolio theme ideal for presenting your services, portfolio, and details in a creative way.",
  
  // Source file for favicon generation.
  favicon: path.join(ROOT, '/src/images/favicon.png'),
  
  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width,initial-scale=1',
};
