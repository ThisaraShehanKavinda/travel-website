module.exports = {
    devtool: 'cheap-module-source-map', // Example to disable detailed source maps
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@mediapipe': 'empty-module' // Prevents loading source maps for @mediapipe
      }
    }
  };
  