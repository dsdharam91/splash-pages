import path from 'path';
import webpack from 'webpack';
import writeStats from './utils/write-stats';
import notifyStats from './utils/notify-stats';
import autoprefixer from 'autoprefixer-core';

const assetsPath = path.resolve(__dirname, './public/');

export default function(WEBPACK_HOST, WEBPACK_PORT) {
  return {
    devtool: 'eval',
    debug: true,
    entry: {
      main: [
        `webpack-dev-server/client?http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
        'webpack/hot/only-dev-server',
        './app/client/bootstrap.js',
      ],
    },
    output: {
      path: assetsPath,
      filename: '[name]-[hash].js',
      chunkFilename: '[name]-[hash].js',
      publicPath: `http://${WEBPACK_HOST}:${WEBPACK_PORT}/assets/`,
    },
    module: {
      loaders: [
        { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file-loader' },
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader'] },
        { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      ],
    },
    postcss: [autoprefixer({ browsers: ['last 2 version'] })],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),

      new webpack.DefinePlugin({
        'process.env': {
          BROWSER: JSON.stringify(true),
          NODE_ENV: JSON.stringify('development'),
        },
      }),

      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),

      function() { this.plugin('done', notifyStats); },
      function() { this.plugin('done', writeStats); },
    ],
  };
}

