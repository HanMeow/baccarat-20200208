var gulp = require('gulp')
var replace = require('gulp-replace')
var rename = require('gulp-rename')
// var file = require('gulp-file')
var fs = require('fs')
var header = require('gulp-header')
var rimraf = require('rimraf')
var pkg = {
    name: 'B2b',
    version: +new Date(),
}
var banner = ['/**', ' * <%= pkg.name %>', ' * @version v<%= pkg.version %>', ' */', ''].join('\n')

var LangTaskList = [
    {
        task: 'i18n:enUS',
        json: 'en_us',
        el: 'en',
        default: 'enUS',
    },
    {
        task: 'i18n:zhCN',
        json: 'zh_cn',
        el: 'zh-CN',
        default: 'zhCN',
    },
    {
        task: 'i18n:VN',
        json: 'vn',
        el: 'vn',
        default: 'VN',
    },
    {
        task: 'i18n:TH',
        json: 'th_th',
        el: 'th',
        default: 'TH',
    },
]
const tasks = []
// const i18n = () => {
// LangTaskList.map(v => v.task)
for (let term of LangTaskList) {
    const i18nLang = () => {
        let jsonString = fs.readFileSync(`./language/${term.json}/${term.json}.json`, 'utf8')
        let json = JSON.parse(jsonString)
        Object.keys(json).forEach(key => {
            // 不要「濾出 f_ 前綴，並去掉非 f_」的話去掉下三行
            if (!/^f\_|^sys\_|^system\_/.test(key)) {
                delete json[key]
            } else if (Array.isArray(json[key])) {
            // 不要「濾出 f_ 前綴，並去掉非 f_」的話去掉上三行，加入下一行
            // if (Array.isArray(json[key])) {
                for (let i = 0; i < json[key].length; i++) {
                    // json[key][i] = json[key][i]
                    let n = 0
                    while (/\%\w\%/.test(json[key][i])) {
                        // console.log(`debug: json[key][${i}]`, json[key][i])
                        json[key][i] = json[key][i].replace(/\%\w\%/, `{${n++}}`)
                    }
                }
            } else {
                // json[key] = json[key]
                let n = 0
                while (/\%\w\%/.test(json[key])) {
                    // console.log('debug: json[key]', json[key])
                    json[key] = json[key].replace(/\%\w\%/, `{${n++}}`)
                }
            }
        })
        return (
            gulp
                .src(`./static/localeDefault.js`)
                .pipe(rename(`locale.${term.json.replace('_', '-')}.json`))
                .pipe(replace(`['%lang%']`, JSON.stringify(json).replace(/\"f\_/g, '"')))
                // .pipe(uglify())
                .pipe(
                    gulp.dest('./static/', {
                        overwrite: true,
                    }),
                )
        )
    }
    tasks.push(i18nLang)
}

const i18n = gulp.series.apply(this, tasks)

// }

// gulp.task(
//     'i18n',
//     LangTaskList.map(v => v.task),
//     function() {},
// )

const addMark = () => {
    return gulp
        .src(['./dist/**/app.css', './dist/**/vendor.js', './dist/**/manifest.js'])
        .pipe(header(banner, { pkg }))
        .pipe(gulp.dest('./dist/'))
}

const clear = function(cb) {
    rimraf('./dist/**/mis', () => {})
    rimraf('./dist/fusionwap/outsource', () => {})
    rimraf('./dist/**/index.html', () => {})
    rimraf('./dist/**/localeDefault.js', cb)
}
const replaceString = () => {
    // return gulp
    //     .src(['./dist/**/*.js', './dist/**/*.css'])
    //     .pipe(replace('//CDN', '//"+CDN+"'))
    //     .pipe(replace('//cdn', ''))
    //     .pipe(replace('"./"+window.CDN+"', '"//"+window.CDN+"'))
    //     .pipe(gulp.dest('dist/'))
    return gulp
        .src(['./dist/index.html'])
        .pipe(replace('/default/css/vendor.css', '/default/css/vendor1.css'))
        .pipe(replace('/default/css/app.css', '/default/css/vendor.css'))
        .pipe(replace('/default/css/vendor1.css', '/default/css/app.css'))
        .pipe(gulp.dest('dist/'))
        
}

// const release = gulp.series(clear, gulp.parallel(addMark, replaceString))
const release = gulp.series(replaceString)

exports.i18n = gulp.series(i18n)

exports.release = release
