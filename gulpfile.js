var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('scripts', function () {
    return gulp.src(
        [
            'script.js'
        ])
        .pipe(babel({
            "plugins": [
                ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ],
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "esmodules": true,
                  },
                }
              ]
            ]
          }))
        .pipe(gulp.dest('min'))
});