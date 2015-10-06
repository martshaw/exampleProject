var dest = './build';
var src = './app';
var gp = './gulp';
var complexityOpts = {
  errorsOnly: false,
  cyclomatic: 3,
  halstead: 10,
  maintainability: 90,
  trycatch: true
};

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest,
      port: 4200
    }
  },
  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest + '/css/',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  gulp: {
    src: gp + '/*/**.js'
  },
  lint: {
    src: src + '/*/**.js'
  },
  images: {
    src: src + './images/**',
    dest: dest + '/images'
  },
  markup: {
    src: src + '/**/*.html',
    dest: dest
  },
  json: {
    src: src + '/data/**',
    dest: dest + '/data/'
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
   bundleConfigs: [{
        entries: src + '/js/app.js',
        dest: dest + '/js/',
        outputName: 'bundle.js',
        // list of externally available modules to exclude from the bundle
        external: ['jquery', 'underscore'],
        exclude: '/js/publish.min.js, ../node_modules'
      }]
  },
  plato: {
    dest: '../report',
    js: '../build/bundle.js',
    complexity: complexityOpts,
    jshint: {
      options: {
        strict: true
      }
    }
  },
  complexity: complexityOpts,
  istanbul: {
    dir: '../reports/coverage',
    reporters: ['text-summary', 'html']
  },
  mocha: {
    reporter: 'nyan'
  },
  size: {
    showFiles: true,
    title: 'File Size: '
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest
  }
};
