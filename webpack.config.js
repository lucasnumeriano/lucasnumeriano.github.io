const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/backtop.js', './src/certifications.js', './src/menu.js', './src/secondary-projects.js', './src/star-project.js', './src/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};