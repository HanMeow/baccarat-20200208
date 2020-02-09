const fs = require('fs')
const excel = require('excel4node');

// console.log('debug: __dirname + "/../src/**/*.js"', __dirname + "../src/**/*.js")

const date = new Date()
const dateString = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '.' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '.' + date.getFullYear()
const dateString2 = date.getFullYear() + '/' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))

let inputData = {}
let prefix = ''
let name = 'Johnny'

// const argv = process.argv.split(' ')

for (let i = 2; i < process.argv.length; i++) {
    const split = process.argv[i].split('=')
    const key = split[0]
    const value = split[1]
    if (key === 'prefix') {
        prefix = value + '_'
    } else if (key === 'name') {
        name = value
    } else {
        inputData[key] = value
    }
}
// console.log('debug: inputData', inputData)

const getJSON = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) return resolve({});
            return resolve(JSON.parse(data));
        })
    })
}

const workbook = new excel.Workbook();
const outPutDir = __dirname.replace(/build$/, '').replace(/\\/g, '/') + 'keysOutputs'
if (!fs.existsSync(outPutDir)) {
    fs.mkdirSync(outPutDir);
}
const path = `${outPutDir}/languageKeys.${dateString}.csv`
// const SheetZH = workbook.addWorksheet('zh_cn');
// const SheetEN = workbook.addWorksheet('en_us');
const outPutEXCEL = async (data, lang = 'zh_cn', prefix = '') => {
    if (typeof data !== 'object') return;
    const Sheet = workbook.addWorksheet(lang);
    let col = 1
    for (let key in data) {
        // const col = Sheet.lastUsedCol + 1
        if (Array.isArray(data[key])) {
            for (let i = 0; i < data[key].length; i++) {
                Sheet.cell(col, 1).string(`${RegExp('^'+prefix).test(key) ? '' : prefix}${key}_${i}`)
                Sheet.cell(col, 2).string('新增')
                Sheet.cell(col, 3).string(name)
                Sheet.cell(col, 4).string(dateString2)
                Sheet.cell(col, 5).string(data[key][i])
                Sheet.cell(col, 6).string(/^btn/.test(key) ? '按鈕' : /^rp/.test(key) ? '報表' : /^at/.test(key) ? '下拉選單' : '介面文字')
                Sheet.cell(col, 7).string(name)
                col++
            }
        } else {
            Sheet.cell(col, 1).string(`${RegExp('^'+prefix).test(key) ? '' : prefix}${key}`)
            Sheet.cell(col, 2).string('新增')
            Sheet.cell(col, 3).string(name)
            Sheet.cell(col, 4).string(dateString2)
            Sheet.cell(col, 5).string(data[key])
            Sheet.cell(col, 6).string(/^btn/.test(key) ? '按鈕' : /^rp/.test(key) ? '報表' : /^at/.test(key) ? '下拉選單' : '介面文字')
            Sheet.cell(col, 7).string(name)
            col++
        }
    }
    workbook.write(path);
}

// 項目	新增者	時間	多語文字	多語類型	需求者

const main = async () => {
    for (let key in inputData) {
        const data = await getJSON(inputData[key])
        await outPutEXCEL(data, key, prefix)
    }
    console.log('\x1b[32m%s\x1b[0m', `finished with output excel ${path}`); //green
}

main()