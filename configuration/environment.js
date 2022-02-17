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
  
  site_name: "WEB 3.1",
  
  site_description: "Developing blockchain solutions and Web 3.0 services. We design, build and promote great web3 products. We drive all aspects of SMM strategies by setting up disruptive techniques through outstanding content production, effective community management, paid social advertising, influencer marketing, and more.",
  
  // Source file for favicon generation.
  favicon: path.join(ROOT, '/src/images/favicon.png'),
  
  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width,initial-scale=1',
};
