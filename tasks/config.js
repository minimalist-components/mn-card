import browserSync from 'browser-sync'

module.exports = {
  templates: {
    src: [
      './sources/templates/demo.jade',
      './sources/templates/index.jade',
    ],
    dest: './docs/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
    output: 'mn-card.css',
  },
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
    output: 'mn-card.js',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      index: 'demo.html',
      baseDir: [
        './docs',
        '.',
      ],
    },
    notify: false,
    ui: false,
    reloadDelay: 100,
    open: false,
  },
}
