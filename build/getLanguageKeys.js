const glob = require("glob")
const fs = require('fs')
const childProcess = require('child_process')
const fork = childProcess.fork;

// console.log('debug: __dirname + "/../src/**/*.js"', __dirname + "../src/**/*.js")

const outPutDir = __dirname.replace(/build$/, '').replace(/\\/g, '/') + 'keysOutputs'

if (!fs.existsSync(outPutDir)) {
    fs.mkdirSync(outPutDir);
}

const langs = ['zh_cn', 'en_us', 'vn', 'th_th']

const date = new Date()
const dateString = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '.' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '.' + date.getFullYear()

// 輸出
const outPutTxt = async (text = '', newLine = true) => {
    const path = `${outPutDir}/languageKeys.${dateString}.txt`
    return new Promise((resolve, reject) => {
        if (!newLine) {
            fs.writeFile(
                path,
                newLine ? `${data}\r\n${text}` : text,
                'utf8',
                (err) =>
                err ? reject("ERROR" + err) : resolve("SUCCESS")
            )
        } else {
            fs.readFile(path, 'utf8', (err, data) => {
                return err ? reject("ERROR" + err) :
                    fs.writeFile(
                        path,
                        newLine ? `${data}\r\n${text}` : text,
                        'utf8',
                        (err) =>
                        err ? reject("ERROR" + err) : resolve("SUCCESS")
                    )
            })
        }
    })
}

// 發布成 JSON
const outPut = async (text = '', lang = 'zh_cn') => {
    const path = `${outPutDir}/languageKeys.${dateString}.${lang}.json`
    return new Promise((resolve, reject) => {
        fs.writeFile(
            path,
            text,
            'utf8',
            (err) => {
                if (err) {
                    return reject("ERROR" + err)
                } else {
                    console.log('\x1b[32m%s\x1b[0m', `finished with output json ${outPutDir}/languageKeys.${dateString}.${lang}.json`); //green
                    return resolve(path)
                }
            }
        )
    })
}

// 搜特定檔案
const scanning = async (path = null) => {
    if (!path) return;
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) return reject("ERROR" + err);
            // console.log('debug: scanning -> data', data)
            // let matches = data.match(/(\'|\")(ui|rp)_[a-zA-Z\_]*(\'|\")/g) || []
            let matches = data.match(/(\'|\")[\w\_]*(\'|\")/g) || []
            matches = matches.map(str => str.replace(/(\'|\")/g, ''))
            // console.log('debug: scanning -> matches', matches)
            resolve(matches)
        })
    })
}

// 取得中文語言檔案
const getJSON = async (lang = 'zh_cn') => {
    const path = __dirname.replace(/build$/, '') + `/language/${lang}/${lang}.json`
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) return resolve({});
            return resolve(JSON.parse(data));
        })
    })
}

const src = __dirname.replace(/build$/, '') + '/src/**/*\.@(js|vue)'

glob(src, async function (er, files) {
    // console.log(files)
    await outPutTxt('', false)
    let outPutJSON = {}
    let LangJSON = {}
    for (let lang of langs ) {
        outPutJSON[lang] = {}
        LangJSON[lang] = await getJSON(lang)
    }
    // let LangJSON = await getJSON()
    // let LangJSON_en = await getJSON('en_us')
    for (let path of files) {
        console.log('\x1b[33m%s\x1b[0m', `scanning ${path} ...`); //yellow
        let result = await scanning(path)
        if (result.length) {
            // await outPutTxt(`${path}\r\n\t${result.join('\r\n\t')}\r\n`)
            let str = ''
            for (let key of result) {
                let f_key = 'f_' + key
                // 先檢查有額外加 "f_" 的有無符合，無再檢查其他平台的 key 有無符合
                if (LangJSON[ langs[0] ][ f_key ]) {
                    str += `\t${ f_key }\t${LangJSON[ langs[0] ][ f_key ]}\r\n`
                    for (let lang of langs ) {
                        outPutJSON[ lang ][ f_key ] = LangJSON[ lang ][ f_key ]
                    }
                } else if (LangJSON[ langs[0] ][ key ]) {
                    str += `\t${ key }\t${LangJSON[ langs[0] ][ key ]}\r\n`
                    for (let lang of langs ) {
                        outPutJSON[ lang ][ key ] = LangJSON[ lang ][ key ]
                    }
                }
            }
            if (str !== '') {
                const index = path.match('/src/').index + 5
                await outPutTxt(`${path.substr(index)}\r\n${str}`)
            }
        }
    }

    console.log('\x1b[32m%s\x1b[0m', `finished with output txt ${outPutDir}/languageKeys.${dateString}.txt`); //green

    let pathes = {}
    let argvs = []

    for (let lang of langs ) {
        pathes[lang] = await outPut(
            JSON.stringify(outPutJSON[lang])
            .replace(
                /\"[\da-zA-Z_]*\":/g,
                match => '\r\n\t' + match
            ), lang)
        argvs.push(`${lang}=${pathes[lang]}`)
    }

    console.log('\x1b[33m%s\x1b[0m', `running ./build/LanguageKeysToExcel.js prefix=f ${argvs.join(' ')}`); //yellow

    const test = fork('./build/LanguageKeysToExcel.js', [
        `prefix=f`,
        ...argvs,
    ], {silent: false})
})