var gulp = require('gulp');
var babel = require('gulp-babel');
const minify = require('gulp-minify');

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
        .pipe(minify())
        .pipe(gulp.dest('min'))
});