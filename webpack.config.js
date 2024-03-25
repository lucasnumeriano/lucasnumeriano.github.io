const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/menu.js', './src/backtop.js', './src/certifications.js', './src/secondary-projects.js', './src/star-project.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};