const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/backtop.js', './src/certifications.js', './src/menu.js', './src/secondary-projects.js', './src/star-project.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};