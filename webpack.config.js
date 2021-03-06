const webpack = require('webpack');

module.exports = {
  entry: {
    main: "./src/index.jsx"
  },
  output: {
    filename: "./dist/[name].js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource)
    })
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      // { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
        // include: PATHS.app
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: /node_modules/,
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM"
    "gapi": "gapi",
    "jade": "jade"
  },
};
